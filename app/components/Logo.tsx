const GRADIENT = "linear-gradient(135deg, #7C83F5 0%, #D99AEC 100%)";

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C83F5" />
          <stop offset="100%" stopColor="#D99AEC" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="#0D1B2A" />
      <path d="M 84 38 A 22 22 0 0 0 62 16 L 38 16 A 22 22 0 0 0 16 38 L 16 62 A 22 22 0 0 0 38 84 L 62 84 A 22 22 0 0 0 84 62" stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" fill="none" />
      <path d="M 80 34 V 66 M 64 50 H 96" stroke="url(#logo-gradient)" strokeWidth="11" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ on = "light", size = 28, fontSize = "1.15rem" }: { on?: "light" | "dark"; size?: number; fontSize?: string }) {
  const caisseColor = on === "dark" ? "#7FA6FF" : "#0D1B2A";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
      <LogoMark size={size} />
      <span style={{ fontWeight: 700, fontSize }}>
        <span style={{ color: caisseColor }}>Caisse</span>
        <span style={{ background: GRADIENT, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Plus</span>
      </span>
    </span>
  );
}
