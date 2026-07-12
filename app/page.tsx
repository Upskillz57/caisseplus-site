"use client";
import Image from "next/image";
import { Logo } from "./components/Logo";

const MARINE = "#0D1B2A";
const MARINE_LIGHT = "#16273D";
const BLUE = "#2563EB";
const BLUE_LIGHT = "#7FA6FF";
const GREEN = "#22C55E";
const BG = "#F2F4F7";
const TEXT = "#0D1B2A";
const TEXT_LIGHT = "#5B6472";
const HERO_SUBTEXT = "#9aa5b5";
const BORDER = "rgba(13,27,42,0.12)";
const GRADIENT = "linear-gradient(135deg, #7C83F5 0%, #D99AEC 100%)";

export default function Home() {
  return (
    <main style={{ background: BG, color: TEXT, margin: 0, padding: 0 }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${BG}; }
        a { text-decoration: none; color: inherit; }
        .btn-primary { background: ${BLUE}; color: #fff; border: none; cursor: pointer; font-weight: 600; font-size: 0.95rem; padding: 0.9rem 2rem; border-radius: 10px; transition: opacity 0.2s; display: inline-block; }
        .btn-primary:hover { opacity: 0.88; }
        .btn-gradient { background: ${GRADIENT}; color: #fff; border: none; cursor: pointer; font-weight: 600; font-size: 0.95rem; padding: 0.9rem 2rem; border-radius: 10px; transition: opacity 0.2s; display: inline-block; }
        .btn-gradient:hover { opacity: 0.9; }
        .btn-outline-dark { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.25); cursor: pointer; font-weight: 600; font-size: 0.95rem; padding: 0.87rem 2rem; border-radius: 10px; transition: all 0.2s; display: inline-block; }
        .btn-outline-dark:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.4); }
        .btn-outline { background: transparent; color: ${BLUE}; border: 1.5px solid ${BLUE}; cursor: pointer; font-weight: 600; font-size: 0.95rem; padding: 0.87rem 2rem; border-radius: 10px; transition: all 0.2s; display: inline-block; }
        .btn-outline:hover { background: ${BLUE}; color: #fff; }
        .feature-card { background: #fff; border-radius: 14px; padding: 1.6rem; border: 1px solid ${BORDER}; }
        .icon-pill { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
        .plan-card { background: #fff; border-radius: 14px; padding: 2.5rem 2rem; border: 1px solid ${BORDER}; flex: 1; min-width: 240px; }
        .plan-card.featured { border-color: transparent; background: ${MARINE}; color: #fff; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .plans-grid { flex-direction: column !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 2.4rem !important; }
          .mockup { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(242,244,247,0.95)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${BORDER}`, padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/"><Logo on="light" /></a>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a href="#fonctionnalites" style={{ fontSize: "0.9rem", fontWeight: 500, color: TEXT_LIGHT }}>Fonctionnalités</a>
          <a href="#tarifs" style={{ fontSize: "0.9rem", fontWeight: 500, color: TEXT_LIGHT }}>Tarifs</a>
          <a href="#demo" style={{ fontSize: "0.9rem", fontWeight: 500, color: TEXT_LIGHT }}>Démo</a>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a href="https://app.caisseplus.fr" className="btn-outline" style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem" }}>Connexion</a>
          <a href="#tarifs" className="btn-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.85rem" }}>Démarrer</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: MARINE }}>
        <div className="hero-grid" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <Image src="/logo-Cplus.png" alt="CaissePlus" width={555} height={329} priority style={{ width: 190, height: "auto", marginBottom: "1.8rem" }} />
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "20px", padding: "0.3rem 1rem", fontSize: "0.72rem", color: BLUE_LIGHT, fontWeight: 700, marginBottom: "1.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Logiciel de caisse SaaS</div>
            <h1 className="hero-title" style={{ fontSize: "3rem", lineHeight: 1.15, fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>
              La caisse connectée pour boutiques et restaurants
            </h1>
            <p style={{ fontSize: "1.05rem", color: HERO_SUBTEXT, lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Vendez, louez, encaissez — depuis un seul outil. Borne de commande, site e-commerce, gestion stock et locations avec empreinte bancaire. Tout est inclus, rien à installer.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#tarifs" className="btn-gradient">Commencer à 29€/mois</a>
              <a href="#demo" className="btn-outline-dark">Demander une démo</a>
            </div>
            <p style={{ marginTop: "1.2rem", fontSize: "0.82rem", color: HERO_SUBTEXT }}>Sans engagement — résiliable à tout moment</p>
          </div>
          <div className="mockup" style={{ position: "relative" }}>
            <div style={{ background: MARINE_LIGHT, borderRadius: "16px", padding: "1.5rem", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1rem" }}>
                {["#ff5f57", "#ffbd2e", "#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "1rem" }}>
                <div style={{ color: HERO_SUBTEXT, fontSize: "0.7rem", marginBottom: "0.8rem", letterSpacing: "0.1em" }}>TICKET EN COURS</div>
                {[{ nom: "Robe Lin Beige — T38", prix: "89,00 €" }, { nom: "Location Blazer — 3 jours", prix: "45,00 €" }, { nom: "Burger Classic + Frites", prix: "14,50 €" }].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontSize: "0.78rem" }}>
                    <span>{item.nom}</span>
                    <span style={{ color: BLUE_LIGHT, fontWeight: 600 }}>{item.prix}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0 0", color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>
                  <span>Total</span><span style={{ color: BLUE_LIGHT }}>148,50 €</span>
                </div>
                <div style={{ marginTop: "1rem", background: BLUE, borderRadius: "8px", padding: "0.7rem", textAlign: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>Encaisser</div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -16, left: -16, background: "#fff", borderRadius: "12px", padding: "0.8rem 1.2rem", boxShadow: "0 8px 24px rgba(13,27,42,0.16)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              <div>
                <div style={{ fontSize: "0.7rem", color: TEXT_LIGHT }}>Paiement sécurisé</div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: TEXT }}>Transactions certifiées</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDE */}
      <div style={{ background: "#fff", borderBottom: `1px solid ${BORDER}`, padding: "1.2rem 2rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", color: TEXT_LIGHT, letterSpacing: "0.08em" }}>
          DÉJÀ UTILISÉ PAR&nbsp;&nbsp;·&nbsp;&nbsp;<strong style={{ color: TEXT }}>Shahida Collection</strong>&nbsp;&nbsp;·&nbsp;&nbsp;et bientôt votre établissement
        </p>
      </div>

      {/* FEATURES */}
      <section id="fonctionnalites" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", color: BLUE, textTransform: "uppercase", marginBottom: "0.8rem" }}>Fonctionnalités</div>
          <h2 style={{ fontSize: "2rem", fontWeight: 600, color: TEXT, marginBottom: "0.8rem" }}>Tout ce dont vous avez besoin, rien de superflu</h2>
          <p style={{ color: TEXT_LIGHT, fontSize: "1rem", maxWidth: 540, margin: "0 auto" }}>Un seul abonnement couvre la vente, la location, la restauration et votre présence en ligne.</p>
        </div>
        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {[
            { color: BLUE, bg: "rgba(37,99,235,0.1)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>, titre: "Caisse tactile", texte: "Encaissez en quelques secondes. Tickets, remises, modes de paiement multiples. Clôture de caisse automatisée." },
            { color: GREEN, bg: "rgba(34,197,94,0.1)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>, titre: "Location sécurisée", texte: "Empreinte bancaire en garantie, contrat signé sur tablette. Caution digitale — aucune avance de cash pour vos clients." },
            { color: BLUE, bg: "rgba(37,99,235,0.1)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>, titre: "Boutique en ligne", texte: "Votre site e-commerce sur votre propre domaine. Réservation, essayage, compte client intégré." },
            { color: TEXT, bg: "rgba(13,27,42,0.08)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={TEXT} strokeWidth="1.8" strokeLinecap="round"><rect x="1" y="3" width="15" height="13" rx="2" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>, titre: "Borne restauration", texte: "Commande autonome, personnalisation des plats, paiement en ligne. Écran cuisine, écran salle, livraison avec calcul de distance." },
            { color: GREEN, bg: "rgba(34,197,94,0.1)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>, titre: "WhatsApp automatique", texte: "Vos clients reçoivent une notification à chaque étape : commande reçue, en préparation, prête, en livraison." },
            { color: BLUE, bg: "rgba(37,99,235,0.1)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, titre: "Transactions sécurisées", texte: "Chaque paiement transite directement vers votre compte bancaire. Vos revenus, vos règles, votre argent." },
          ].map((f, i) => (
            <div key={i} className="feature-card">
              <div className="icon-pill" style={{ background: f.bg }}>{f.icon}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.5rem", color: TEXT }}>{f.titre}</h3>
              <p style={{ fontSize: "0.88rem", color: TEXT_LIGHT, lineHeight: 1.65 }}>{f.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" style={{ background: "#fff", padding: "5rem 2rem", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", color: BLUE, textTransform: "uppercase", marginBottom: "0.8rem" }}>Tarifs</div>
            <h2 style={{ fontSize: "2rem", fontWeight: 600, color: TEXT, marginBottom: "0.8rem" }}>Des tarifs clairs, sans surprise</h2>
            <p style={{ color: TEXT_LIGHT, fontSize: "1rem" }}>Choisissez ce dont vous avez besoin. Changez de plan à tout moment.</p>
          </div>
          <div className="plans-grid" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { nom: "Caisse", prix: "29", desc: "Pour les boutiques physiques", inclus: ["POS tactile complet", "Gestion stock automatique", "Location + empreinte bancaire", "Contrat signé sur tablette", "Clôture de caisse", "Back-office gérant"], cta: "Choisir Caisse", featured: false },
              { nom: "Caisse + Site + Borne", prix: "49", desc: "Le kit complet", inclus: ["Tout du plan Caisse", "Boutique en ligne sur votre domaine", "Borne de commande restauration", "Écran cuisine + écran salle", "Livraison avec calcul de distance", "WhatsApp automatique", "Notifications temps réel"], cta: "Choisir le pack complet", featured: true },
              { nom: "Site web", prix: "29", desc: "Votre vitrine en ligne", inclus: ["Boutique e-commerce", "Domaine custom inclus", "Personnalisation couleurs/logo", "Réservation de créneaux", "Compte client", "Catalogue produits"], cta: "Choisir Site", featured: false },
            ].map((plan, i) => (
              <div key={i} className={`plan-card${plan.featured ? " featured" : ""}`}>
                {plan.featured && <div style={{ background: GRADIENT, color: "#fff", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", padding: "0.25rem 0.8rem", borderRadius: "20px", display: "inline-block", marginBottom: "1rem", textTransform: "uppercase" }}>Le plus populaire</div>}
                <div style={{ fontSize: "0.82rem", color: plan.featured ? BLUE_LIGHT : TEXT_LIGHT, marginBottom: "0.4rem" }}>{plan.desc}</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 600, color: plan.featured ? "#fff" : TEXT, marginBottom: "0.5rem" }}>{plan.nom}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "2.8rem", fontWeight: 700, color: plan.featured ? "#fff" : TEXT }}>{plan.prix}€</span>
                  <span style={{ fontSize: "0.85rem", color: plan.featured ? HERO_SUBTEXT : TEXT_LIGHT }}>/mois</span>
                </div>
                <ul style={{ listStyle: "none", marginBottom: "2rem" }}>
                  {plan.inclus.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.85rem", color: plan.featured ? "#dbe1ea" : TEXT_LIGHT, marginBottom: "0.6rem" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={plan.featured ? BLUE_LIGHT : GREEN} strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:contact@caisseplus.fr?subject=Abonnement CaissePlus" className={plan.featured ? "btn-gradient" : "btn-outline"} style={{ display: "block", textAlign: "center", width: "100%" }}>{plan.cta}</a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.82rem", color: TEXT_LIGHT }}>TVA non applicable — art. 293B du CGI · Sans engagement · Résiliable à tout moment</p>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" style={{ maxWidth: 680, margin: "0 auto", padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 600, color: TEXT, marginBottom: "1rem" }}>Vous voulez voir CaissePlus en action ?</h2>
        <p style={{ color: TEXT_LIGHT, fontSize: "1rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>Prenez 20 minutes avec nous — on vous montre la caisse, la borne et le site depuis un vrai compte de démonstration.</p>
        <a href="mailto:contact@caisseplus.fr?subject=Demande de démo CaissePlus" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>Demander une démo gratuite</a>
        <p style={{ marginTop: "1.2rem", fontSize: "0.82rem", color: TEXT_LIGHT }}>Réponse sous 24h · contact@caisseplus.fr</p>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "2rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.8rem" }}>
          <Logo on="light" size={20} fontSize="1rem" />
        </div>
        <p style={{ fontSize: "0.8rem", color: TEXT_LIGHT }}>© {new Date().getFullYear()} CaissePlus · Logiciel de caisse SaaS · contact@caisseplus.fr</p>
      </footer>
    </main>
  );
}
