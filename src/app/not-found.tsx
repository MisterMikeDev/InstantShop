import Link from "next/link";

export default async function NotFound() {
    return (
        <Link href="/" className="not-found-btn ">
            Ir a la página principal
        </Link>
    );
}
