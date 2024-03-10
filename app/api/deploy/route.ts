// app/api/deploy/route.ts
import { type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const res = await request.json()
  const data = await fetch(res.deploy_url)
  if (data.status !== 200) return new Response("Error", { status: 400 })
  return new Response("Success", { status: 200 })
}
