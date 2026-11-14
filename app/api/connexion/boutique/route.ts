import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

// Retrouve la boutique à partir de l'adresse saisie sur /connexion et renvoie l'URL de sa
// page de connexion. La connexion staff se fait toujours sur le sous-domaine de la boutique
// (<slug>.caisseplus.fr/login) : la caisse refuse tout hôte qui n'est pas une boutique
// (app.caisseplus.fr → « Boutique introuvable »).
// Accepte « maboutique », « maboutique.caisseplus.fr », une URL complète, ou le domaine
// personnalisé de la boutique (redirigé vers son sous-domaine, où vit le login staff).

const SOUS_DOMAINE = /^([a-z0-9-]+)\.caisseplus\.fr$/;
const SLUG = /^[a-z0-9-]{1,63}$/;
const DOMAINE = /^[a-z0-9.-]{3,253}$/;

function normaliser(brut: string): string {
  let s = brut.trim().toLowerCase();
  s = s.replace(/^[a-z]+:\/\//, ""); // protocole
  s = s.split(/[/?#]/)[0]; // chemin
  s = s.split(":")[0]; // port
  if (s.startsWith("www.")) s = s.slice(4);
  return s;
}

export async function GET(req: NextRequest) {
  const adresse = normaliser(req.nextUrl.searchParams.get("adresse") ?? "");
  if (!adresse) return Response.json({ erreur: "Saisissez l'adresse de votre boutique." }, { status: 400 });

  let slug: string | null = null;
  const sousDomaine = adresse.match(SOUS_DOMAINE);
  if (sousDomaine) slug = sousDomaine[1];
  else if (SLUG.test(adresse)) slug = adresse;

  let boutique: { slug: string | null } | null = null;
  if (slug) {
    boutique = await prisma.boutiques.findFirst({ where: { slug }, select: { slug: true } });
  } else if (DOMAINE.test(adresse)) {
    const variantes = [adresse, `www.${adresse}`];
    boutique = await prisma.boutiques.findFirst({
      where: { OR: [{ domaine_custom: { in: variantes } }, { domaine_boutique: { in: variantes } }] },
      select: { slug: true },
    });
  }

  if (!boutique?.slug) {
    return Response.json({ erreur: "Aucune boutique CaissePlus ne correspond à cette adresse." }, { status: 404 });
  }
  return Response.json({ slug: boutique.slug, url: `https://${boutique.slug}.caisseplus.fr/login` });
}
