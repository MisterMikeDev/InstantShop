import db from "@/db.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.nextUrl);

    const { id, q } = Object.fromEntries(url.searchParams);

    if (id) {
        const item = db.find((item) => item.id === +id);
        return NextResponse.json(item);
    }

    if (q) {
        const results = db.filter((product) => {
            const { title } = product;
            return title.toLowerCase().includes(q.toLowerCase());
        });
        return NextResponse.json(results);
    }

    return NextResponse.json({});
}
