"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const GOLD = "#b8923f";
const DARK = "#1a1a16";
const BG = "#f7f5f0";
const TEXTE_LIGHT = "#6b6b5f";
const API = "";

function ActiverContent() {
  const params = useSearchParams();
  const token = params.get("token");

  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState("");
  const [succes, setSucces] = useState(false);
  const [tokenValide, setTokenValide] = useState<boolean | null>(null);

  useEffect(() => {
    if (!token) { setTokenValide(false); return; }
    fetch(`${API}/api/auth/activer-compte?token=${token}`)
      .then(r => r.json())
      .then(d => { if (d.nom) { setNom(d.nom); setTokenValide(true); } else setTokenValide(false); })
      .catch(() => setTokenValide(false));
  }, [token]);

  async function handleSubmit() {
    setErreur("");
    if (password.length < 6) { setErreur("Mot de passe trop court (6 caractères minimum)."); return; }
    if (password !== confirm) { setErreur("Les mots de passe ne correspondent pas."); return; }
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/activer-compte`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (data.ok) { setSucces(true); }
      else { setErreur(data.erreur || "Une erreur est survenue."); }
    } catch { setErreur("Impossible de contacter le serveur."); }
    finally { setLoading(false); }
  }

  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: BG, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; } input:focus { outline: none; border-color: #b8923f !important; }`}</style>

      <div style={{ width: "100%", maxWidth: 440 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <a href="https://caisseplus.fr" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill={GOLD}/><path d="M7 9h14M7 14h10M7 19h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.15rem", color: DARK }}>Caisse<span style={{ color: GOLD }}>Plus</span></span>
          </a>
        </div>

        {tokenValide === null && (
          <div style={{ textAlign: "center", color: TEXTE_LIGHT }}>Vérification du lien...</div>
        )}

        {tokenValide === false && (
          <div style={{ background: "#fff", borderRadius: "16px", padding: "2.5rem", textAlign: "center", border: "1px solid #e8e4dc" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c00" strokeWidth="1.5" strokeLinecap="round" style={{ marginBottom: "1rem" }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", color: DARK, marginBottom: "0.8rem" }}>Lien invalide ou expiré</h2>
            <p style={{ color: TEXTE_LIGHT, fontSize: "0.9rem", marginBottom: "1.5rem" }}>Ce lien d'activation n'est plus valide. Contactez-nous pour en recevoir un nouveau.</p>
            <a href="mailto:contact@caisseplus.fr" style={{ color: GOLD, fontWeight: 600, fontSize: "0.9rem" }}>contact@caisseplus.fr</a>
          </div>
        )}

        {tokenValide === true && !succes && (
          <div style={{ background: "#fff", borderRadius: "16px", padding: "2.5rem", border: "1px solid #e8e4dc" }}>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", color: DARK, marginBottom: "0.4rem" }}>Bienvenue, {nom}</h1>
            <p style={{ color: TEXTE_LIGHT, fontSize: "0.88rem", marginBottom: "2rem" }}>Définissez votre mot de passe pour accéder à votre espace CaissePlus.</p>

            <div style={{ marginBottom: "1.2rem" }}>
              <label style={{ fontSize: "0.82rem", fontWeight: 600, color: DARK, display: "block", marginBottom: "0.4rem" }}>Mot de passe</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Minimum 6 caractères"
                style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #e8e4dc", borderRadius: "8px", fontSize: "0.9rem", fontFamily: "Jost, sans-serif", color: DARK, background: BG }} />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ fontSize: "0.82rem", fontWeight: 600, color: DARK, display: "block", marginBottom: "0.4rem" }}>Confirmer le mot de passe</label>
              <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Répétez le mot de passe"
                style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #e8e4dc", borderRadius: "8px", fontSize: "0.9rem", fontFamily: "Jost, sans-serif", color: DARK, background: BG }} />
            </div>

            {erreur && (
              <div style={{ background: "#fff5f5", border: "1px solid #fcc", borderRadius: "8px", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#c00", marginBottom: "1rem" }}>{erreur}</div>
            )}

            <button onClick={handleSubmit} disabled={loading}
              style={{ width: "100%", background: loading ? "#ccc" : GOLD, color: "#fff", border: "none", borderRadius: "8px", padding: "1rem", fontSize: "1rem", fontWeight: 700, fontFamily: "Jost, sans-serif", cursor: loading ? "not-allowed" : "pointer" }}>
              {loading ? "Activation..." : "Activer mon compte →"}
            </button>
          </div>
        )}

        {succes && (
          <div style={{ background: "#fff", borderRadius: "16px", padding: "2.5rem", textAlign: "center", border: "1px solid #e8e4dc" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" style={{ marginBottom: "1rem" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", color: DARK, marginBottom: "0.8rem" }}>Compte activé !</h2>
            <p style={{ color: TEXTE_LIGHT, fontSize: "0.9rem", marginBottom: "1.5rem" }}>Votre mot de passe est défini. Vous pouvez maintenant vous connecter à votre back-office depuis votre domaine.</p>
            <p style={{ fontSize: "0.82rem", color: TEXTE_LIGHT }}>Une question ? <a href="mailto:contact@caisseplus.fr" style={{ color: GOLD, fontWeight: 600 }}>contact@caisseplus.fr</a></p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function ActiverPage() {
  return <Suspense><ActiverContent /></Suspense>;
}
