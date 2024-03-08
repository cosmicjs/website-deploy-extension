import { TriggerDeploy } from "@/components/TriggerDeploy"
import { InstallationSteps } from "@/app/InstallationSteps"

export default async function IndexPage({
  searchParams,
}: {
  searchParams: {
    bucket_slug: string
    read_key: string
    write_key: string
    page: string
    deploy_url: string
  }
}) {
  return (
    <section className="w-full">
      {searchParams.page === "edit-object" ? (
        <TriggerDeploy deploy_url={searchParams.deploy_url} />
      ) : (
        <InstallationSteps />
      )}
    </section>
  )
}
