"use client";
import { useState } from "react";

const GOLD = "#b8923f";
const DARK = "#1a1a16";
const BG = "#f7f5f0";
const TEXTE_LIGHT = "#6b6b5f";

const PLANS = [
  {
    id: "caisse",
    nom: "Caisse",
    prix: "29",
    desc: "POS tactile, locations, back-office",
    inclus: ["Caisse tactile", "Gestion stock", "Location + empreinte bancaire", "Clôture de caisse"],
  },
  {
    id: "pack",
    nom: "Caisse + Site + Borne",
    prix: "49",
    desc: "Le kit complet — boutique et restauration",
    inclus: ["Tout du plan Caisse", "Boutique en ligne", "Borne de commande", "WhatsApp automatique"],
    featured: true,
  },
  {
    id: "site",
    nom: "Site web",
    prix: "29",
    desc: "Boutique e-commerce sur votre domaine",
    inclus: ["Boutique en ligne", "Domaine custom", "Catalogue produits", "Compte client"],
  },
];

export default function Inscription() {
  const [plan, setPlan] = useState("pack");
  const [email, setEmail] = useState("");
  const [nomBoutique, setNomBoutique] = useState("");
  const [activite, setActivite] = useState("mode");
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState("");

  async function handleSubmit() {
    setErreur("");
    if (!email || !nomBoutique) {
      setErreur("Merci de remplir tous les champs.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/saas/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nom_boutique: nomBoutique, plan, activite }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setErreur(data.error || "Une erreur est survenue.");
      }
    } catch {
      setErreur("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: BG, minHeight: "100vh", padding: "2rem 1rem" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input { outline: none; }
        input:focus { border-color: #b8923f !important; }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "1.5rem" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="7" fill={GOLD}/><path d="M7 9h14M7 14h10M7 19h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.15rem", color: DARK }}>Caisse<span style={{ color: GOLD }}>Plus</span></span>
        </a>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.9rem", color: DARK, marginBottom: "0.5rem" }}>Créer votre compte</h1>
        <p style={{ color: TEXTE_LIGHT, fontSize: "0.95rem" }}>Choisissez votre plan et renseignez vos informations</p>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>

        {/* Choix plan */}
        <div>
          <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: TEXTE_LIGHT, marginBottom: "1rem" }}>CHOISISSEZ VOTRE PLAN</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {PLANS.map(p => (
              <div
                key={p.id}
                onClick={() => setPlan(p.id)}
                style={{
                  background: "#fff",
                  border: `2px solid ${plan === p.id ? GOLD : "#e8e4dc"}`,
                  borderRadius: "12px",
                  padding: "1.2rem 1.5rem",
                  cursor: "pointer",
                  transition: "border-color 0.15s",
                  position: "relative",
                }}
              >
                {p.featured && (
                  <div style={{ position: "absolute", top: -10, right: 16, background: GOLD, color: "#fff", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", padding: "0.2rem 0.7rem", borderRadius: "20px" }}>POPULAIRE</div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${plan === p.id ? GOLD : "#ccc"}`, background: plan === p.id ? GOLD : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {plan === p.id && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }}/>}
                    </div>
                    <span style={{ fontWeight: 600, fontSize: "0.95rem", color: DARK }}>{p.nom}</span>
                  </div>
                  <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.1rem", color: plan === p.id ? GOLD : DARK }}>{p.prix}€<span style={{ fontSize: "0.75rem", fontWeight: 400, color: TEXTE_LIGHT }}>/mois</span></span>
                </div>
                <div style={{ fontSize: "0.8rem", color: TEXTE_LIGHT, marginLeft: "1.5rem" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <div style={{ background: "#fff", borderRadius: "16px", padding: "2rem", border: "1px solid #e8e4dc" }}>
          <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: TEXTE_LIGHT, marginBottom: "1.5rem" }}>VOS INFORMATIONS</div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 600, color: DARK, display: "block", marginBottom: "0.4rem" }}>Nom de votre boutique / restaurant</label>
            <input
              type="text"
              value={nomBoutique}
              onChange={e => setNomBoutique(e.target.value)}
              placeholder="Ex: Le Burger, Maison Dupont..."
              style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #e8e4dc", borderRadius: "8px", fontSize: "0.9rem", fontFamily: "Jost, sans-serif", color: DARK, background: BG, transition: "border-color 0.15s" }}
            />
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 600, color: DARK, display: "block", marginBottom: "0.4rem" }}>Type d'activité</label>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { id: "mode", label: "Commerce / Boutique", desc: "Vente, location, gestion stock" },
                { id: "restauration", label: "Restauration / Food", desc: "Borne de commande, cuisine, livraison" },
              ].map(a => (
                <div key={a.id} onClick={() => setActivite(a.id)} style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "0.75rem 1rem", border: `1.5px solid ${activite === a.id ? GOLD : "#e8e4dc"}`, borderRadius: "8px", cursor: "pointer", background: activite === a.id ? "#fffbf2" : "#fff" }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${activite === a.id ? GOLD : "#ccc"}`, background: activite === a.id ? GOLD : "transparent", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: DARK }}>{a.label}</div>
                    <div style={{ fontSize: "0.78rem", color: TEXTE_LIGHT }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ fontSize: "0.82rem", fontWeight: 600, color: DARK, display: "block", marginBottom: "0.4rem" }}>Adresse email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="vous@votreboutique.fr"
              style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #e8e4dc", borderRadius: "8px", fontSize: "0.9rem", fontFamily: "Jost, sans-serif", color: DARK, background: BG, transition: "border-color 0.15s" }}
            />
          </div>

          {erreur && (
            <div style={{ background: "#fff5f5", border: "1px solid #fcc", borderRadius: "8px", padding: "0.75rem 1rem", fontSize: "0.82rem", color: "#c00", marginBottom: "1rem" }}>
              {erreur}
            </div>
          )}

          {/* Récap plan sélectionné */}
          {(() => {
            const p = PLANS.find(x => x.id === plan)!;
            return (
              <div style={{ background: BG, borderRadius: "8px", padding: "1rem", marginBottom: "1.5rem", fontSize: "0.82rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ color: TEXTE_LIGHT }}>Plan sélectionné</span>
                  <span style={{ fontWeight: 700, color: DARK }}>{p.nom}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: TEXTE_LIGHT }}>Montant mensuel</span>
                  <span style={{ fontWeight: 700, color: GOLD }}>{p.prix}€ / mois</span>
                </div>
              </div>
            );
          })()}

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{ width: "100%", background: loading ? "#ccc" : GOLD, color: "#fff", border: "none", borderRadius: "8px", padding: "1rem", fontSize: "1rem", fontWeight: 700, fontFamily: "Jost, sans-serif", cursor: loading ? "not-allowed" : "pointer", transition: "opacity 0.2s" }}
          >
            {loading ? "Redirection..." : "Continuer vers le paiement →"}
          </button>

          <p style={{ textAlign: "center", fontSize: "0.75rem", color: TEXTE_LIGHT, marginTop: "1rem" }}>
            Sans engagement · Résiliable à tout moment · TVA non applicable art. 293B CGI
          </p>
        </div>
      </div>
    </main>
  );
}
