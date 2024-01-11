import db from "@/db.json";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(db);
}
