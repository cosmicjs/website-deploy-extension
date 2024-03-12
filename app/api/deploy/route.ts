// app/api/deploy/route.ts
import { type NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const res = await request.json()
  let headers: any = {
    "Content-Type": "application/json",
  }
  let body: any = {}
  if (res.kinsta_token) {
    headers["Authorization"] = `Bearer ${res.kinsta_token}`
  }
  if (res.kinsta_app_id) {
    body.app_id = res.kinsta_app_id
  }
  if (res.kinsta_site_id) {
    body.static_site_id = res.kinsta_site_id
  }
  if (res.branch) {
    body.branch = res.branch
  }
  const data = await fetch(res.deploy_url, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  })
  if (data.status >= 400)
    return new Response(JSON.stringify(data), { status: 400 })
  return new Response("Success", { status: 200 })
}
