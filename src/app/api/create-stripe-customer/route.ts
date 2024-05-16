import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import initStripe from "stripe";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
    const supabase = createRouteHandlerClient({ cookies });
    const query = req.nextUrl.searchParams.get("API_ROUTE_SECRET");

    // API制限をかける
    if (query !== process.env.API_ROUTE_SECRET) {
        return NextResponse.json({
            message: "APIを叩く情報がありません。",
        });
    }

    const data = await req.json();
    const { id, email } = data.record;
    
    // Stripteの初期化
    const stripe = new initStripe(process.env.STRIPE_SECRET_KEY!);
    // Customer新規追加
    const customer = await stripe.customers.create({
        email,
    });

    // supabaseに更新
    await supabase
        .from("profile")
        .update({
            stripe_customer: customer.id,
        }).eq("id", id);

    return NextResponse.json({
        message: `stripe customer created: ${customer.id}`,
    });
}