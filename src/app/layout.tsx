import type { Metadata } from "next";
import React from "react";
import "./globals.scss";
import Header from "@/components/Header";
import Search from "@/components/Search";

export const metadata: Metadata = {
    title: "Instant Shop",
    description: "La tienda online con las mejores ofertas del mercado digital."
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>
                <Header />
                <Search />
                <main>{children}</main>
            </body>
        </html>
    );
}
