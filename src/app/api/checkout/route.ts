import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
  try {
    const { order, totalAmount, paymentMethod } = await req.json();

    if (!totalAmount || totalAmount <= 0) {
      console.error("Invalid totalAmount:", totalAmount);
      return NextResponse.json({ error: "Invalid total amount" }, { status: 400 });
    }

    let responseData;

    if (paymentMethod === "paypal") {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["paypal"],
        line_items: order.map((item: any) => ({
          price_data: {
            currency: "usd",
            product_data: { name: item.name },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        })),
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/ordercomplete`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment`,
      });

      responseData = { sessionId: session.id };
    } else if (paymentMethod === "stripe") {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(totalAmount * 100), 
        currency: "usd",
        payment_method_types: ["card"],
      });

      if (!paymentIntent.client_secret) {
        console.error("No clientSecret returned:", paymentIntent);
        return NextResponse.json({ error: "Failed to generate client secret" }, { status: 500 });
      }

      responseData = { clientSecret: paymentIntent.client_secret };
    } else {
      responseData = { message: "Cash on Delivery selected, no payment required." };
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error(" Stripe API error:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
