"use client";
import { useEffect, useState } from "react";
import { Logo } from "../components/Logo";

// Point d'entrée « Connexion » du site : la connexion se fait sur le sous-domaine de chaque
// boutique (<slug>.caisseplus.fr/login). On demande l'adresse de la boutique, on vérifie
// qu'elle existe (/api/connexion/boutique) puis on redirige vers sa page de connexion.
const CLE_DERNIERE = "cp-derniere-boutique";

export default function Connexion() {
  const [adresse, setAdresse] = useState("");
  const [erreur, setErreur] = useState("");
  const [chargement, setChargement] = useState(false);

  useEffect(() => {
    try {
      const derniere = localStorage.getItem(CLE_DERNIERE);
      if (derniere) setAdresse(derniere);
    } catch { /* stockage indisponible : champ vide */ }
  }, []);

  async function valider(e: React.FormEvent) {
    e.preventDefault();
    setErreur("");
    if (!adresse.trim()) { setErreur("Saisissez l'adresse de votre boutique."); return; }
    setChargement(true);
    try {
      const res = await fetch(`/api/connexion/boutique?adresse=${encodeURIComponent(adresse)}`);
      const data = await res.json();
      if (!res.ok || !data.url) { setErreur(data.erreur || "Boutique introuvable."); setChargement(false); return; }
      try { localStorage.setItem(CLE_DERNIERE, data.slug); } catch { /* ignoré */ }
      window.location.href = data.url;
    } catch {
      setErreur("Impossible de contacter le serveur.");
      setChargement(false);
    }
  }

  return (
    <main className="cp-section-nuit cp-connexion">
      <div className="cp-connexion-carte">
        <a href="/" aria-label="CaissePlus — accueil" style={{ display: "flex", justifyContent: "center", marginBottom: "1.8rem" }}>
          <Logo on="dark" size={44} />
        </a>
        <h1 className="cp-connexion-titre">Connexion</h1>
        <p className="cp-connexion-texte">Saisissez l&apos;adresse de votre boutique pour accéder à votre caisse et à votre back-office.</p>

        <form onSubmit={valider}>
          <label htmlFor="adresse" className="cp-connexion-label">Adresse de votre boutique</label>
          <div className="cp-connexion-champ">
            <input
              id="adresse"
              type="text"
              inputMode="url"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              autoFocus
              value={adresse}
              onChange={e => setAdresse(e.target.value)}
              placeholder="maboutique"
            />
            <span>.caisseplus.fr</span>
          </div>
          {erreur && <div className="cp-connexion-erreur" role="alert">{erreur}</div>}
          <button type="submit" className="cp-btn cp-btn-primaire cp-btn-bloc" disabled={chargement} style={{ marginTop: "1.2rem" }}>
            {chargement ? "Recherche…" : "Accéder à ma boutique"}
          </button>
        </form>

        <div className="cp-connexion-separateur"><span>Pas encore client ?</span></div>
        <a href="/inscription" className="cp-btn cp-btn-contour-turquoise cp-btn-bloc">Je n&apos;ai pas de compte — m&apos;abonner</a>

        <p className="cp-connexion-aide">
          Adresse oubliée ? Elle figure dans l&apos;e-mail de bienvenue. Sinon : <a href="mailto:contact@caisseplus.fr">contact@caisseplus.fr</a>
        </p>
      </div>
    </main>
  );
}
