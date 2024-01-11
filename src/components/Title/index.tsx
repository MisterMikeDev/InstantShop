import Link from "next/link";
import "./index.scss";
export default function Title() {
    return (
        <Link href="/">
            <h1 className="title-text">
                <span className="purple">Instant</span>{" "}
                <span className="pink">Shop</span>
            </h1>
        </Link>
    );
}
