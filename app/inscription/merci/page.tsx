"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const GOLD = "#b8923f";
const DARK = "#1a1a16";
const BG = "#f7f5f0";

function MerciContent() {
  const params = useSearchParams();
  const session_id = params.get("session_id");

  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: BG, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap');`}</style>
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <div style={{ width: 72, height: 72, background: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", boxShadow: "0 4px 24px rgba(184,146,63,0.15)" }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", color: DARK, marginBottom: "1rem" }}>Bienvenue sur CaissePlus !</h1>
        <p style={{ color: "#6b6b5f", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          Votre compte est en cours de création. Vous recevrez un email avec votre lien d'accès dans quelques minutes.
        </p>
        <div style={{ background: "#fff", borderRadius: "12px", padding: "1.5rem", border: "1px solid #e8e4dc", marginBottom: "2rem", textAlign: "left" }}>
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#6b6b5f", marginBottom: "1rem", letterSpacing: "0.08em" }}>PROCHAINES ÉTAPES</div>
          {[
            "Vérifiez votre boîte email",
            "Cliquez sur le lien d'activation",
            "Configurez votre boutique (logo, couleurs, produits)",
            "Pointez votre domaine vers CaissePlus",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", marginBottom: "0.8rem" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: GOLD, color: "#fff", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
              <span style={{ fontSize: "0.88rem", color: DARK, paddingTop: 2 }}>{step}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.82rem", color: "#6b6b5f" }}>
          Une question ? <a href="mailto:contact@caisseplus.fr" style={{ color: GOLD, fontWeight: 600 }}>contact@caisseplus.fr</a>
        </p>
      </div>
    </main>
  );
}

export default function Merci() {
  return <Suspense><MerciContent /></Suspense>;
}
