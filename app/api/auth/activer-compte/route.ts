import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

const CORS = { 'Access-Control-Allow-Origin': 'https://www.caisseplus.fr' }

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      ...CORS,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token")
  if (!token) return NextResponse.json({ erreur: "Token manquant" }, { status: 400, headers: CORS })

  const vendeur = await prisma.utilisateurs.findUnique({
    where: { magic_link_token: token },
    select: { id: true, nom: true, magic_link_expire_le: true },
  })
  if (!vendeur) return NextResponse.json({ erreur: "Lien invalide" }, { status: 400, headers: CORS })
  if (!vendeur.magic_link_expire_le || new Date() > vendeur.magic_link_expire_le) {
    return NextResponse.json({ erreur: "Lien expire" }, { status: 400, headers: CORS })
  }
  return NextResponse.json({ nom: vendeur.nom }, { headers: CORS })
}

export async function POST(req: NextRequest) {
  const { token, password } = await req.json()
  if (!token || !password) return NextResponse.json({ erreur: "Champs manquants" }, { status: 400, headers: CORS })
  if (password.length < 6) return NextResponse.json({ erreur: "Mot de passe trop court" }, { status: 400, headers: CORS })

  const vendeur = await prisma.utilisateurs.findUnique({
    where: { magic_link_token: token },
    select: { id: true, magic_link_expire_le: true },
  })
  if (!vendeur) return NextResponse.json({ erreur: "Lien invalide" }, { status: 400, headers: CORS })
  if (!vendeur.magic_link_expire_le || new Date() > vendeur.magic_link_expire_le) {
    return NextResponse.json({ erreur: "Lien expire" }, { status: 400, headers: CORS })
  }

  const hash = await bcrypt.hash(password, 10)
  await prisma.utilisateurs.update({
    where: { id: vendeur.id },
    data: {
      mot_de_passe_hash: hash,
      magic_link_token: null,
      magic_link_expire_le: null,
    },
  })
  return NextResponse.json({ ok: true }, { headers: CORS })
}
