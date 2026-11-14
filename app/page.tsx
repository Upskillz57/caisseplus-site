/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { Logo, LogoMark } from "./components/Logo";

const CONTACT = "contact@caisseplus.fr";

/* ───────── Icônes (trait 1.8, couleur héritée) ───────── */
function Icone({ children, taille = 22 }: { children: ReactNode; taille?: number }) {
  return (
    <svg width={taille} height={taille} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}
const I = {
  panier: <><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h3l2.6 12.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6" /></>,
  borne: <><rect x="5" y="2" width="14" height="20" rx="2" /><rect x="8" y="5" width="8" height="7" rx="1" /><path d="M9 16h6M9 19h3" /></>,
  couches: <><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 12 10 5 10-5" /><path d="m2 17 10 5 10-5" /></>,
  calendrier: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></>,
  carte: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>,
  nuage: <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 0 0 4.5 12 3.5 3.5 0 0 0 6 19h11.5Z" />,
  ecran: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  boutique: <><path d="M3 9h18l-1.5-5h-15L3 9Z" /><path d="M4 9v11h16V9" /><path d="M9 20v-6h6v6" /></>,
  couverts: <><path d="M7 2v20M4 2v6a3 3 0 0 0 6 0V2" /><path d="M17 22V2c-2.2 1.6-3 4.5-3 8h3" /></>,
  camion: <><path d="M1 4h14v12H1z" /><path d="M15 9h4l3 3v4h-7" /><circle cx="5.5" cy="18.5" r="2" /><circle cx="18.5" cy="18.5" r="2" /></>,
  bouclier: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  sac: <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></>,
  fete: <><path d="M3 21h18M5 21V10l7-6 7 6v11" /><path d="M9 21v-5h6v5" /></>,
  horloge: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  video: <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 10 6-3v10l-6-3" /></>,
  coche: <path d="M20 6 9 17l-5-5" />,
  fleche: <path d="M5 12h14M13 6l6 6-6 6" />,
  contrat: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>,
  cadenas: <><rect x="4" y="11" width="16" height="11" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
  archive: <><rect x="2" y="3" width="20" height="5" rx="1" /><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4" /></>,
  etapes: <><circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="12" r="2.5" /><path d="M7.5 12h9" /></>,
  ticket: <><path d="M4 2h16v20l-3-2-3 2-2-2-2 2-3-2-3 2Z" /><path d="M8 7h8M8 11h8M8 15h5" /></>,
};

/* Vagues lumineuses (fond des sections sombres et de l'appel final). */
function Vagues({ claire = false }: { claire?: boolean }) {
  const c = claire ? "rgba(14,140,118," : "rgba(30,216,184,";
  return (
    <svg className="cp-vagues" viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 330 C 300 250, 520 380, 820 300 S 1250 180, 1440 240" stroke={`${c}0.55)`} strokeWidth="2" fill="none" />
      <path d="M0 350 C 320 280, 560 390, 860 320 S 1260 210, 1440 270" stroke={`${c}0.3)`} strokeWidth="1.5" fill="none" />
      <path d="M0 372 C 340 310, 600 400, 900 345 S 1280 245, 1440 300" stroke={`${c}0.18)`} strokeWidth="1.2" fill="none" />
      <path d="M0 400 L0 360 C 330 300, 580 400, 880 330 S 1270 230, 1440 290 L1440 400 Z" fill={`${c}${claire ? "0.06" : "0.08"})`} />
    </svg>
  );
}

/* ───────── Maquettes produit ───────── */
const PLATS = [
  { nom: "Burgers", img: "/caisse/burger.webp" },
  { nom: "Kebabs", img: "/caisse/kebab-assiette.webp" },
  { nom: "Menus", img: "/caisse/menu-frites-boisson.webp" },
  { nom: "Boissons", img: "/caisse/canette-coca-cola.png" },
  { nom: "Frites", img: "/caisse/frites.webp" },
  { nom: "Tenders", img: "/caisse/tenders.webp" },
];
const TICKET = [
  { nom: "Burger Classic", prix: "8,90 €" },
  { nom: "Frites", prix: "3,50 €" },
  { nom: "Boisson", prix: "2,50 €" },
];

function EcranCaisse() {
  return (
    <div className="cp-ecran">
      <div className="cp-ecran-menu">
        <div className="cp-ecran-menu-logo">
          <LogoMark size={22} />
          <span>Caisse<span className="cp-turquoise">Plus</span></span>
        </div>
        {["Vente", "Produits", "Clients", "Stock", "Rapports", "Paramètres"].map((m, i) => (
          <div key={m} className={`cp-ecran-menu-item${i === 0 ? " actif" : ""}`}>{m}</div>
        ))}
      </div>
      <div className="cp-ecran-centre">
        <div className="cp-ecran-barre">
          <span className="cp-ecran-onglet">Comptoir</span>
          <span>Table 4 · 12:42</span>
        </div>
        <div className="cp-ecran-grille">
          {PLATS.map(p => (
            <div key={p.nom} className="cp-plat">
              <img src={p.img} alt="" loading="lazy" />
              {p.nom}
            </div>
          ))}
        </div>
      </div>
      <div className="cp-ecran-ticket">
        <div className="cp-ticket-titre">Commande n° 23</div>
        {TICKET.map(l => (
          <div key={l.nom} className="cp-ticket-ligne"><span>{l.nom}</span><span>{l.prix}</span></div>
        ))}
        <div className="cp-ticket-total"><span>Total</span><span>14,90 €</span></div>
        <div className="cp-ticket-bouton">Encaisser</div>
      </div>
    </div>
  );
}

function Tablette({ incline = false, pied = false }: { incline?: boolean; pied?: boolean }) {
  return (
    <div className="cp-tablette-scene" aria-hidden="true">
      <div className={`cp-tablette${incline ? " cp-tablette-incline" : ""}`}>
        <EcranCaisse />
      </div>
      {pied && (<><div className="cp-pied" /><div className="cp-pied-socle" /></>)}
    </div>
  );
}

function Telephone() {
  return (
    <div className="cp-telephone" aria-hidden="true">
      <div className="cp-telephone-ecran">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}><LogoMark size={18} /></div>
        <div style={{ fontWeight: 700, fontSize: 11, marginBottom: 10 }}>Ma commande</div>
        {TICKET.map(l => (
          <div key={l.nom} className="cp-ticket-ligne"><span>{l.nom}</span><span>{l.prix}</span></div>
        ))}
        <div className="cp-ticket-total" style={{ marginTop: "auto" }}><span>Total</span><span>14,90 €</span></div>
        <div className="cp-ticket-bouton">Paiement</div>
      </div>
    </div>
  );
}

/* ───────── Contenus ───────── */
const ATOUTS = [
  { icone: I.panier, texte: "Vente & encaissement" },
  { icone: I.borne, texte: "Borne de commande" },
  { icone: I.couches, texte: "Stock & produits" },
  { icone: I.calendrier, texte: "Locations" },
  { icone: I.carte, texte: "Paiement sécurisé" },
  { icone: I.nuage, texte: "100 % SaaS sans installation" },
];

const FONCTIONNALITES = [
  { icone: I.ecran, titre: "Caisse tactile", texte: "Encaissez en quelques secondes. Tickets, remises, modes de paiement multiples. Clôture de caisse automatisée." },
  { icone: I.couches, titre: "Gestion des stocks", texte: "Suivez vos ingrédients et produits en temps réel, avec alertes de réassort automatiques." },
  { icone: I.boutique, titre: "Boutique en ligne", texte: "Votre site e-commerce sur votre domaine. Réservation, commandes et paiement intégrés." },
  { icone: I.couverts, titre: "Borne de commande", texte: "Commandes autonomes, personnalisation des plats et paiement en ligne." },
  { icone: I.camion, titre: "Livraison & à emporter", texte: "Gérez le click & collect et la livraison avec calcul automatique des frais." },
  { icone: I.bouclier, titre: "Paiements sécurisés", texte: "Carte bancaire, wallet, QR code. Chaque paiement arrive directement sur votre compte." },
];

const SOLUTIONS = [
  { photo: "/solutions/restauration.jpg", icone: I.couverts, titre: "Restauration & Snack", texte: "Encaissement rapide, menus, options, borne et fidélité." },
  { photo: "/solutions/boutique.jpg", icone: I.sac, titre: "Boutique & Commerce", texte: "Vente en magasin et en ligne, stock, codes-barres et promotions." },
  { photo: "/solutions/location.jpg", icone: I.calendrier, titre: "Location de matériel", texte: "Réservation, planning, cautions et gestion des retours." },
  { photo: "/solutions/evenementiel.jpg", icone: I.fete, titre: "Événementiel", texte: "Vente et location pour vos événements, avec gestion des créneaux." },
];

const BORNE_MOBILE = [
  { icone: I.borne, titre: "Une borne connectée chez vos clients", texte: "Ils commandent depuis leur téléphone, sur place, à emporter ou en livraison, et paient en ligne." },
  { icone: I.couverts, titre: "Envoi direct en cuisine", texte: "Chaque commande s'affiche sur l'écran cuisine, sans ressaisie ni ticket perdu." },
  { icone: I.ecran, titre: "Gestion interne centralisée", texte: "Commandes de la caisse, de la borne et du téléphone réunies sur un seul écran." },
  { icone: I.camion, titre: "Livraison et suivi", texte: "Frais calculés selon la distance, suivi de chaque livraison et client prévenu à chaque étape." },
];

const LOCATION = [
  { icone: I.carte, titre: "Caution par empreinte bancaire", texte: "La carte du client est enregistrée au retrait, sans rien débiter. Vous ne prélevez que si le matériel revient abîmé ou en retard." },
  { icone: I.etapes, titre: "Paiement en plusieurs fois", texte: "Un acompte pour réserver, le solde au retrait : votre client étale son paiement, vous bloquez la date." },
  { icone: I.contrat, titre: "Contrat signé en ligne", texte: "Le contrat est créé automatiquement et signé par le client, sans papier." },
  { icone: I.calendrier, titre: "Planning et retours", texte: "Disponibilités en temps réel, aucune double réservation, retours suivis et caution libérée en un clic." },
];

const CONFORMITE = [
  { icone: I.cadenas, titre: "Inaltérabilité", texte: "Une vente validée ne peut plus être modifiée ni supprimée. Une erreur se corrige par un avoir, jamais en effaçant." },
  { icone: I.bouclier, titre: "Sécurisation", texte: "Chaque ticket est numéroté et chaîné au précédent : la moindre modification se voit." },
  { icone: I.ticket, titre: "Conservation", texte: "Clôtures journalières, mensuelles et annuelles, automatiques ou manuelles, conservées avec leurs totaux par taux de TVA." },
  { icone: I.archive, titre: "Archivage", texte: "Ventes et clôtures sont archivées et exportables à tout moment, pour votre comptable ou en cas de contrôle." },
];

const OFFRES = [
  { id: "caisse", nom: "Caisse", prix: "29", inclus: ["POS tactile complet", "Gestion stock automatique", "Clôture de caisse", "Rapports & statistiques", "Support inclus"], cta: "Choisir Caisse", vedette: false },
  { id: "pack", nom: "Caisse + Site + Borne", prix: "49", inclus: ["Tout du plan Caisse", "Boutique en ligne sur votre domaine", "Borne de commande restauration", "Réservation / location", "Livraison avec calcul de distance", "Notifications temps réel"], cta: "Choisir le pack complet", vedette: true },
  { id: "site", nom: "Site web", prix: "29", inclus: ["Boutique e-commerce", "Domaine personnalisé", "Personnalisation (logo, couleurs)", "Compte client", "Catalogue produits"], cta: "Choisir Site", vedette: false },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="cp-nav">
        <div className="cp-nav-inner">
          <a href="/" aria-label="CaissePlus — accueil"><Logo on="dark" size={36} /></a>
          <div className="cp-nav-liens">
            <a href="#fonctionnalites">Fonctionnalités</a>
            <a href="#solutions">Solutions</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#demo">Démo</a>
          </div>
          <div className="cp-nav-actions">
            <a href="/connexion" className="cp-btn cp-btn-contour-nuit cp-btn-petit">Connexion</a>
            <a href="#tarifs" className="cp-btn cp-btn-primaire cp-btn-petit">Démarrer</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="cp-section-nuit cp-hero">
        <Vagues />
        <div className="cp-conteneur">
          <div className="cp-hero-grille">
            <div>
              <span className="cp-pastille">Logiciel de caisse SaaS</span>
              <h1>
                La caisse connectée pour <span className="cp-turquoise">boutiques</span> et <span className="cp-turquoise">restaurants</span>
              </h1>
              <p className="cp-hero-texte">
                Vendez, encaissez, gérez vos stocks, vos locations et vos commandes, depuis un seul outil simple, puissant et 100 % en ligne.
              </p>
              <div className="cp-hero-boutons">
                <a href="#tarifs" className="cp-btn cp-btn-primaire">Commencer à 29€/mois <Icone taille={18}>{I.fleche}</Icone></a>
                <a href="#demo" className="cp-btn cp-btn-contour-nuit">Demander une démo</a>
              </div>
            </div>
            <Tablette incline pied />
          </div>
          <div className="cp-atouts">
            {ATOUTS.map(a => (
              <div key={a.texte} className="cp-atout">
                <Icone taille={30}>{a.icone}</Icone>
                {a.texte}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section id="fonctionnalites" className="cp-section">
        <div className="cp-conteneur">
          <div className="cp-entete">
            <span className="cp-pastille">Fonctionnalités</span>
            <h2 className="cp-titre">Tout ce dont vous avez besoin, rien de superflu</h2>
            <p className="cp-sous-titre">Un seul abonnement couvre la vente, la location, la restauration et votre présence en ligne.</p>
          </div>
          <div className="cp-grille-3">
            {FONCTIONNALITES.map(f => (
              <div key={f.titre} className="cp-carte">
                <div className="cp-icone"><Icone>{f.icone}</Icone></div>
                <h3>{f.titre}</h3>
                <p>{f.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="cp-section cp-section-claire">
        <div className="cp-conteneur">
          <div className="cp-entete">
            <span className="cp-pastille">Nos solutions</span>
            <h2 className="cp-titre">Une solution adaptée à votre activité</h2>
            <p className="cp-sous-titre">CaissePlus s&apos;adapte à tous les commerces : restaurant, snack, boutique, location de matériel ou événementiel.</p>
          </div>
          <div className="cp-grille-4">
            {SOLUTIONS.map(s => (
              <div key={s.titre} className="cp-solution">
                <div className="cp-solution-photo">
                  <img src={s.photo} alt="" loading="lazy" width={640} height={420} />
                  <div className="cp-solution-pastille"><Icone taille={20}>{s.icone}</Icone></div>
                </div>
                <div className="cp-solution-corps">
                  <h3>{s.titre}</h3>
                  <p>{s.texte}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Borne sur le téléphone des clients */}
          <div className="cp-borne-mobile">
            <div className="cp-borne-mobile-texte">
              <span className="cp-pastille">Borne sur mobile</span>
              <h3 className="cp-borne-mobile-titre">Votre borne de commande, directement sur le téléphone de vos clients</h3>
              <p className="cp-sous-titre">
                Vos clients commandent depuis chez eux ou à table, sans application à installer. Chaque commande arrive aussitôt en cuisine et vous suivez tout, de la préparation à la livraison.
              </p>
              <ul className="cp-borne-mobile-liste">
                {BORNE_MOBILE.map(b => (
                  <li key={b.titre}>
                    <span className="cp-icone"><Icone taille={20}>{b.icone}</Icone></span>
                    <div><strong>{b.titre}</strong><span>{b.texte}</span></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cp-borne-mobile-visuel" aria-hidden="true">
              <div className="cp-telephone cp-telephone-seul">
                <div className="cp-telephone-ecran">
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}><LogoMark size={20} /></div>
                  <div style={{ fontWeight: 700, fontSize: 11, marginBottom: 8 }}>Comment souhaitez-vous commander ?</div>
                  <div className="cp-modes">
                    {["Sur place", "À emporter", "Livraison"].map((m, i) => (
                      <span key={m} className={i === 1 ? "actif" : ""}>{m}</span>
                    ))}
                  </div>
                  <div className="cp-ecran-grille" style={{ gridTemplateColumns: "repeat(2, 1fr)", margin: "10px 0" }}>
                    {PLATS.slice(0, 4).map(p => (
                      <div key={p.nom} className="cp-plat"><img src={p.img} alt="" loading="lazy" />{p.nom}</div>
                    ))}
                  </div>
                  <div className="cp-ticket-bouton" style={{ marginTop: "auto" }}>Commander · 14,90 €</div>
                </div>
              </div>
              <div className="cp-bulle cp-bulle-haut"><Icone taille={16}>{I.couverts}</Icone>Envoyée en cuisine</div>
              <div className="cp-bulle cp-bulle-bas"><Icone taille={16}>{I.camion}</Icone>En livraison · 12 min</div>
            </div>
          </div>

          {/* Location : empreinte bancaire et paiement en plusieurs fois */}
          <div className="cp-borne-mobile cp-borne-mobile-inverse">
            <div className="cp-borne-mobile-texte">
              <span className="cp-pastille">Location</span>
              <h3 className="cp-borne-mobile-titre">Louez sans immobiliser l&apos;argent de vos clients</h3>
              <p className="cp-sous-titre">
                Votre client réserve en ligne, paie en plusieurs fois et laisse une simple empreinte bancaire en guise de caution. Plus de chèque à garder dans le tiroir, plus de liquide à rendre.
              </p>
              <ul className="cp-borne-mobile-liste">
                {LOCATION.map(b => (
                  <li key={b.titre}>
                    <span className="cp-icone"><Icone taille={20}>{b.icone}</Icone></span>
                    <div><strong>{b.titre}</strong><span>{b.texte}</span></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cp-borne-mobile-visuel" aria-hidden="true">
              <div className="cp-telephone cp-telephone-seul">
                <div className="cp-telephone-ecran">
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}><LogoMark size={20} /></div>
                  <div style={{ fontWeight: 700, fontSize: 11, marginBottom: 2 }}>Votre location</div>
                  <div style={{ color: "#8FA3A6", marginBottom: 10 }}>Du vendredi au dimanche · 3 jours</div>
                  <div className="cp-loc-ligne"><span>Total de la location</span><strong>90,00 €</strong></div>
                  <div className="cp-loc-etape fait"><span className="cp-loc-puce">1</span><div><strong>Acompte à la réservation</strong><span>Payé aujourd&apos;hui</span></div><strong>30,00 €</strong></div>
                  <div className="cp-loc-etape"><span className="cp-loc-puce">2</span><div><strong>Solde au retrait</strong><span>Vendredi</span></div><strong>60,00 €</strong></div>
                  <div className="cp-loc-caution">
                    <div><strong>Caution 300 €</strong><span>Empreinte bancaire, rien n&apos;est débité</span></div>
                  </div>
                  <div className="cp-ticket-bouton" style={{ marginTop: "auto" }}>Signer le contrat</div>
                </div>
              </div>
              <div className="cp-bulle cp-bulle-haut"><Icone taille={16}>{I.carte}</Icone>Empreinte · 0 € débité</div>
              <div className="cp-bulle cp-bulle-bas"><Icone taille={16}>{I.contrat}</Icone>Contrat signé</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFORMITÉ */}
      <section id="conformite" className="cp-section">
        <div className="cp-conteneur">
          <div className="cp-entete">
            <span className="cp-pastille">Loi anti-fraude TVA</span>
            <h2 className="cp-titre">Une caisse construite pour la loi anti‑fraude</h2>
            <p className="cp-sous-titre">Depuis 2018, tout commerçant assujetti à la TVA doit utiliser une caisse qui garantit quatre conditions. CaissePlus les applique toutes, sans réglage de votre part.</p>
          </div>
          <div className="cp-grille-4">
            {CONFORMITE.map(f => (
              <div key={f.titre} className="cp-carte">
                <div className="cp-icone"><Icone>{f.icone}</Icone></div>
                <h3>{f.titre}</h3>
                <p>{f.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="cp-section cp-section-nuit">
        <div className="cp-conteneur">
          <div className="cp-entete">
            <span className="cp-pastille">Tarifs</span>
            <h2 className="cp-titre">Des tarifs clairs, sans surprise</h2>
            <p className="cp-sous-titre">Choisissez ce dont vous avez besoin. Changez de plan à tout moment.</p>
          </div>
          <div className="cp-tarifs">
            {OFFRES.map(o => (
              <div key={o.nom} className={`cp-offre${o.vedette ? " cp-offre-vedette" : ""}`}>
                {o.vedette && <span className="cp-offre-badge">Le plus populaire</span>}
                <div className="cp-offre-nom">{o.nom}</div>
                <div className="cp-offre-prix"><strong>{o.prix}€</strong><span>/mois</span></div>
                <ul>
                  {o.inclus.map(item => (
                    <li key={item}><Icone taille={16}>{I.coche}</Icone>{item}</li>
                  ))}
                </ul>
                <a
                  href={`/inscription?plan=${o.id}`}
                  className={`cp-btn cp-btn-bloc ${o.vedette ? "cp-btn-primaire" : "cp-btn-contour-turquoise"}`}
                >
                  {o.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="cp-mention">TVA non applicable — art. 293B du CGI · Sans engagement · Résiliable à tout moment</p>
        </div>
      </section>

      {/* DÉMO */}
      <section id="demo" className="cp-section cp-section-nuit" style={{ borderTop: "1px solid rgba(30,216,184,0.12)" }}>
        <Vagues />
        <div className="cp-conteneur">
          <div className="cp-demo-grille">
            <div className="cp-demo-visuel">
              <Tablette />
              <Telephone />
            </div>
            <div>
              <span className="cp-pastille">Démo</span>
              <h2 className="cp-titre">Vous voulez voir CaissePlus en action ?</h2>
              <p className="cp-sous-titre" style={{ marginBottom: "2rem" }}>
                Prenez 20 minutes avec nous — on vous montre la caisse, la borne et le site depuis un vrai compte de démonstration.
              </p>
              <a href={`mailto:${CONTACT}?subject=Demande de démo CaissePlus`} className="cp-btn cp-btn-primaire">
                Demander une démo gratuite <Icone taille={18}>{I.fleche}</Icone>
              </a>
              <div className="cp-demo-infos">
                <span><Icone taille={18}>{I.horloge}</Icone>Démo de 20 min</span>
                <span><Icone taille={18}>{I.video}</Icone>En visio</span>
                <span><Icone taille={18}>{I.calendrier}</Icone>Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPEL FINAL */}
      <section className="cp-final">
        <Vagues claire />
        <div className="cp-conteneur cp-final-contenu">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.8rem" }}>
            <Logo on="light" size={64} />
          </div>
          <h2 className="cp-titre">Prêt à digitaliser votre commerce ?</h2>
          <p className="cp-sous-titre">Rejoignez les commerçants qui font déjà confiance à CaissePlus.</p>
          <div className="cp-final-boutons">
            <a href="/inscription" className="cp-btn cp-btn-primaire">Démarrer maintenant <Icone taille={18}>{I.fleche}</Icone></a>
            <a href={`mailto:${CONTACT}`} className="cp-btn cp-btn-contour-clair">Nous contacter</a>
          </div>
          <div className="cp-final-garanties">
            <span><Icone taille={18}>{I.coche}</Icone>Sans engagement</span>
            <span><Icone taille={18}>{I.coche}</Icone>Mise en route rapide</span>
            <span><Icone taille={18}>{I.coche}</Icone>Support réactif</span>
          </div>
        </div>
      </section>

      {/* PIED DE PAGE */}
      <footer className="cp-footer">
        <div className="cp-conteneur cp-footer-inner">
          <Logo on="dark" size={26} />
          <p>© {new Date().getFullYear()} CaissePlus · Logiciel de caisse SaaS · <a href={`mailto:${CONTACT}`}>{CONTACT}</a></p>
        </div>
      </footer>
    </main>
  );
}
