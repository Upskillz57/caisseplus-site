import { NextResponse } from "next/server";
import Stripe from "stripe";

const PLANS: Record<string, string> = {
  caisse: process.env.STRIPE_PRICE_CAISSE!,
  site: process.env.STRIPE_PRICE_SITE!,
  pack: process.env.STRIPE_PRICE_PACK!,
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const { email, nom_boutique, plan } = await req.json();

    if (!email || !nom_boutique || !plan || !PLANS[plan]) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const origin = "https://www.caisseplus.fr";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [{ price: PLANS[plan], quantity: 1 }],
      allow_promotion_codes: true,
      metadata: { email, nom_boutique, plan },
      subscription_data: { metadata: { email, nom_boutique, plan } },
      success_url: `${origin}/inscription/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/inscription`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("POST /api/saas/inscription:", err?.message);
    return NextResponse.json({ error: err?.message || "Erreur serveur" }, { status: 500 });
  }
}
