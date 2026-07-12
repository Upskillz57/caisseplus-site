"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Logo } from "../../components/Logo";

const BLUE = "#2563EB";
const GREEN = "#22C55E";
const BG = "#F2F4F7";
const TEXT = "#0D1B2A";
const TEXT_LIGHT = "#5B6472";
const BORDER = "rgba(13,27,42,0.12)";

function MerciContent() {
  const params = useSearchParams();
  const session_id = params.get("session_id");

  return (
    <main style={{ background: BG, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <Logo on="light" />
        </div>
        <div style={{ width: 72, height: 72, background: "rgba(34,197,94,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
        </div>
        <h1 style={{ fontSize: "2rem", fontWeight: 600, color: TEXT, marginBottom: "1rem" }}>Bienvenue sur CaissePlus !</h1>
        <p style={{ color: TEXT_LIGHT, fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          Votre compte est en cours de création. Vous recevrez un email avec votre lien d'accès dans quelques minutes.
        </p>
        <div style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: "10px", padding: "1rem 1.2rem", marginBottom: "2rem", fontSize: "0.88rem", color: TEXT }}>
          Votre espace sera accessible dans <strong>5 à 10 minutes</strong> le temps que votre adresse soit activée. Si vous tentez de vous connecter trop tôt, vous verrez une erreur SSL — c'est normal, patientez quelques instants.
        </div>
        <div style={{ background: "#fff", borderRadius: "14px", padding: "1.5rem", border: `1px solid ${BORDER}`, marginBottom: "2rem", textAlign: "left" }}>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: TEXT_LIGHT, marginBottom: "1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Prochaines étapes</div>
          {[
            "Vérifiez votre boîte email",
            "Cliquez sur le lien d'activation",
            "Configurez votre boutique (logo, couleurs, produits)",
            "Pointez votre domaine vers CaissePlus",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", marginBottom: "0.8rem" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: BLUE, color: "#fff", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
              <span style={{ fontSize: "0.88rem", color: TEXT, paddingTop: 2 }}>{step}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.82rem", color: TEXT_LIGHT }}>
          Une question ? <a href="mailto:contact@caisseplus.fr" style={{ color: BLUE, fontWeight: 600 }}>contact@caisseplus.fr</a>
        </p>
      </div>
    </main>
  );
}

export default function Merci() {
  return <Suspense><MerciContent /></Suspense>;
}
