"use client"

import { Button } from "@/components/ui/button"

function handleTriggerDeployClicked(deploy_url: string) {
  // alert(deploy_url)
  fetch(deploy_url)
}

export function TriggerDeploy({ deploy_url }: { deploy_url: string }) {
  return (
    <Button onClick={() => handleTriggerDeployClicked(deploy_url)}>
      Trigger deploy
    </Button>
  )
}
