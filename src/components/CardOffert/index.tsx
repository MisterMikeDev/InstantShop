import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types";
import "./index.scss";

export default function CardOffert({ offer }: { offer: IProduct }) {
    return (
        <Link className="card-offert" href={`/detail/${offer.id}`}>
            <picture className="card-offert-img-container">
                <Image
                    className="card-offert-img"
                    src={offer.img}
                    alt={`${offer.title} image`}
                    draggable={false}
                    width={250}
                    height={250}
                />
                <h2 className="card-offert-title">{offer.title}</h2>
                <p className="card-offert-description">{offer.description}</p>
            </picture>
            <span className="card-offert-price">{offer.price}</span>
        </Link>
    );
}
