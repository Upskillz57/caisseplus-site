import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CaissePlus — Logiciel de caisse pour boutiques et restaurants",
  description: "Caisse connectée, borne de commande, boutique en ligne et location sécurisée. Tout en un, sans installation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body style={{ margin: 0, padding: 0, fontFamily: "var(--font-poppins), sans-serif" }}>{children}</body>
    </html>
  );
}
