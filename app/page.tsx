import { cosmicBucketConfig } from "@/lib/cosmic"
import { TriggerDeploy } from "@/components/TriggerDeploy"

export default async function IndexPage({
  searchParams,
}: {
  searchParams: {
    bucket_slug: string
    read_key: string
    write_key: string
    location: string
    deploy_url: string
  }
}) {
  const cosmic = cosmicBucketConfig(
    searchParams.bucket_slug,
    searchParams.read_key,
    searchParams.write_key
  )
  return (
    <section className="container py-4">
      <div className="flex">
        <TriggerDeploy deploy_url={searchParams.deploy_url} />
      </div>
    </section>
  )
}
