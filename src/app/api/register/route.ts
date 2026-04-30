import { NextResponse } from "next/server";
import type { D1Database } from "@/lib/db";

type RegistrationBody = {
  name: string;
  email: string;
  sn: string;
  product_sku?: string;
  purchase_date?: string;
};

export async function POST(request: Request) {
  try {
    const body: RegistrationBody = await request.json();

    if (!body.name || !body.email || !body.sn) {
      return NextResponse.json(
        { error: "Name, email, and serial number are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (body.sn.length < 5) {
      return NextResponse.json(
        { error: "Invalid serial number format." },
        { status: 400 }
      );
    }

    const DB = (process.env as unknown as { DB: D1Database }).DB;

    await DB.prepare(
      "INSERT INTO registrations (name, email, sn, product_sku, purchase_date) VALUES (?, ?, ?, ?, ?)"
    )
      .bind(body.name, body.email, body.sn, body.product_sku || "", body.purchase_date || "")
      .run();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Registration failed. Please try again later." },
      { status: 500 }
    );
  }
}
