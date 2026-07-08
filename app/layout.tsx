import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CaissePlus — Logiciel de caisse pour boutiques et restaurants",
  description: "Caisse connectée, borne de commande, boutique en ligne et location sécurisée. Tout en un, sans installation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
