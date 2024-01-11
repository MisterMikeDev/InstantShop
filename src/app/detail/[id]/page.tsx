"use client";
import Loader from "@/components/Loader";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Detail() {
    const { id } = useParams() as { id: string };
    const [product, setProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        fetch("/api/offers")
            .then((res) => res.json())
            .then((items) => {
                const product = items.find(
                    (item: IProduct) => item.id === Number(id)
                ) as IProduct;
                setProduct(product);
            });
    }, [id]);

    return (
        <>
            {product ? (
                <main className="detail-page">
                    <article className="detail-product">
                        <Image
                            className="detail-product-img"
                            src={`${product?.img}`}
                            alt={`${product?.title} image`}
                            width={250}
                            height={250}
                            draggable={false}
                        />
                        <div className="detail-product-content">
                            <h2 className="detail-product-title">
                                {product?.title}
                            </h2>
                            <section className="detail-product-info">
                                <p className="detail-product-description">
                                    {product?.description}
                                </p>
                                <span className="detail-product-price">
                                    {product?.price}
                                </span>
                            </section>
                        </div>
                    </article>

                    <Link className="detail-product-back" href="/">
                        Ir al inicio
                    </Link>
                </main>
            ) : (
                <section className="loading">
                    <Loader />
                </section>
            )}
        </>
    );
}
