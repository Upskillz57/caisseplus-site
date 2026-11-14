// Logo officiel CaissePlus Pay — même identité que la caisse (ma-shahidacaisse,
// components/LogoCaissePlus.tsx) : pictogramme turquoise, « Caisse » blanc ou marine,
// « Plus » turquoise, sous-titre « — BORNE — » encadré de filets turquoise.
// Sur fond clair, le turquoise vif manque de contraste : picto et « Plus » passent au
// vert foncé de la caisse en mode jour (#0E8C76).
const TURQUOISE = "#1ED8B8";
const VERT_FONCE = "#0E8C76";
const PICTO = "/icons/picto-caisseplus.png";
const PICTO_FONCE = "/icons/picto-caisseplus-fonce.png";

export function LogoMark({ size = 32, on = "dark" }: { size?: number; on?: "light" | "dark" }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={on === "light" ? PICTO_FONCE : PICTO} alt="" aria-hidden="true" width={size} height={size} style={{ width: size, height: size, flexShrink: 0, display: "block", objectFit: "contain" }} />;
}

export function Logo({
  on = "light",
  size = 34,
  sousTitre = "BORNE",
}: {
  on?: "light" | "dark";
  size?: number;
  sousTitre?: string | null;
}) {
  const couleurBase = on === "dark" ? "#FFFFFF" : "#0D1B2A";
  const accent = on === "dark" ? TURQUOISE : VERT_FONCE;
  const taillePolice = Math.round(size * 0.62);
  const filet = Math.max(1, Math.round(size * 0.05));

  return (
    <span aria-label="CaissePlus" style={{ display: "inline-flex", alignItems: "center", gap: Math.round(size * 0.28) }}>
      <LogoMark size={size} on={on} />
      <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "stretch", lineHeight: 1 }}>
        <span style={{ fontWeight: 700, fontSize: taillePolice, letterSpacing: "-0.02em", color: couleurBase, whiteSpace: "nowrap" }}>
          Caisse<span style={{ color: accent }}>Plus</span>
        </span>
        {sousTitre && (
          <span style={{ display: "flex", alignItems: "center", gap: Math.max(4, Math.round(size * 0.14)), marginTop: Math.round(size * 0.14) }}>
            <span style={{ flex: 1, height: filet, background: accent, borderRadius: 2, minWidth: 6 }} />
            <span style={{ fontSize: Math.max(7, Math.round(size * 0.24)), fontWeight: 500, letterSpacing: "0.32em", marginRight: "-0.32em", color: couleurBase, whiteSpace: "nowrap" }}>
              {sousTitre}
            </span>
            <span style={{ flex: 1, height: filet, background: accent, borderRadius: 2, minWidth: 6 }} />
          </span>
        )}
      </span>
    </span>
  );
}
