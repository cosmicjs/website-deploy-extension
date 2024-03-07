import { InstallationSteps } from "@/components/InstallationSteps"
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
  return (
    <section className="w-full">
      {searchParams.deploy_url ? (
        <TriggerDeploy deploy_url={searchParams.deploy_url} />
      ) : (
        <InstallationSteps />
      )}
    </section>
  )
}
