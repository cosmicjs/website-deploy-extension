import Link from "next/link"

export default async function IndexPage() {
  return (
    <section className="w-full">
      Select from the following services:
      <div>
        <Link href="/vercel">Vercel</Link>
      </div>
      <div>
        <Link href="/netlify">Netlify</Link>
      </div>
      <div>
        <Link href="/render">Render</Link>
      </div>
      <div>
        <Link href="/cloudflare">Cloudflare</Link>
      </div>
      <div>
        <Link href="/kinsta">Kinsta</Link>
      </div>
    </section>
  )
}
