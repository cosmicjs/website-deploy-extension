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
    <Markdown className="space-y-4 text-zinc-700 dark:text-zinc-300">
      {object.metadata.installation_guide}
    </Markdown>
  )
}
