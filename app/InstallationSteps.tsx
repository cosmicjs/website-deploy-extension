import { createBucketClient } from "@cosmicjs/sdk"
import Markdown from "react-markdown"

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || "",
  readKey: process.env.COSMIC_BUCKET_READ_KEY || "",
})

export async function InstallationSteps() {
  const { object } = await cosmic.objects
    .findOne({
      type: "extensions",
      slug: "deploy-to-vercel",
    })
    .props("slug,title,metadata")
    .status("any")
    .depth(1)
  return (
    <div className="py-10">
      <h2 className="mb-6 text-3xl">Installation Guide</h2>
      <Markdown
        className="m-auto max-w-[800px] space-y-4 text-zinc-700 dark:text-zinc-300"
        components={{
          a: (a: { href: string; children: string }) => {
            return a.href.charAt(0) === "#" ? (
              <a href={a.href}>{a.children}</a>
            ) : (
              <a
                href={a.href}
                rel="noopener noreferrer"
                target="_blank"
                className="text-cosmic-blue"
              >
                {a.children}
              </a>
            )
          },
          img: (image: { src: string; alt: string }) => {
            // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
            return <img loading="lazy" src={image.src} alt={image.alt} />
          },
        }}
      >
        {object.metadata.installation_guide}
      </Markdown>
    </div>
  )
}
