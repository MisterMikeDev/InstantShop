"use client";
import CardOffert from "@/components/CardOffert";
import Loader from "@/components/Loader";
import { IProducts } from "@/types";
import { useEffect, useState } from "react";
export default function Home() {
    const [homeResults, setHomeResults] = useState<IProducts | null>(null);

    useEffect(() => {
        fetch("/api/offers")
            .then((res) => res.json())
            .then(setHomeResults);
    }, []);
    return (
        <main className="main-page">
            {homeResults && homeResults?.length ? (
                <ul className="main-offers-list">
                    {homeResults?.map((offer) => (
                        <CardOffert key={offer.id} offer={offer} />
                    ))}
                </ul>
            ) : (
                <section className="loading">
                    <Loader />
                </section>
            )}
        </main>
    );
}
