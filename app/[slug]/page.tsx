import { TriggerDeploy } from "@/components/TriggerDeploy"
import { InstallationSteps } from "@/app/InstallationSteps"

export default async function IndexPage({
  searchParams,
  params,
}: {
  searchParams: {
    bucket_slug: string
    read_key: string
    write_key: string
    page: string
    deploy_url: string
    kinsta_app_id: string
    kinsta_site_id: string
    kinsta_token: string
    branch: string
  }
  params: { slug: string }
}) {
  return (
    <section className="w-full">
      {searchParams.page === "edit-object" ? (
        <TriggerDeploy
          deploy_url={searchParams.deploy_url}
          kinsta_app_id={searchParams.kinsta_app_id}
          kinsta_site_id={searchParams.kinsta_site_id}
          kinsta_token={searchParams.kinsta_token}
          branch={searchParams.branch}
        />
      ) : (
        <InstallationSteps service={params.slug} />
      )}
    </section>
  )
}
