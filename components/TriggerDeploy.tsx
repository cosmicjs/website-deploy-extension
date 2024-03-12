"use client"

import { useState } from "react"
import { CheckCircle2Icon, Loader2, XCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

type TriggerDeploy = {
  deploy_url: string
  kinsta_app_id: string
  kinsta_site_id: string
  kinsta_token: string
  branch: string
}

export function TriggerDeploy({
  deploy_url,
  kinsta_app_id,
  kinsta_site_id,
  kinsta_token,
  branch,
}: TriggerDeploy) {
  const [submitting, setSubmitting] = useState(false)
  const [triggered, setTriggered] = useState(false)
  const [error, setError] = useState(false)
  async function handleTriggerDeployClicked() {
    setSubmitting(true)
    let body: any = {
      deploy_url,
    }
    if (kinsta_token) {
      body.kinsta_token = kinsta_token
    }
    if (kinsta_app_id) {
      body.kinsta_app_id = kinsta_app_id
    }
    if (kinsta_site_id) {
      body.static_site_id = kinsta_site_id
    }
    if (branch) {
      body.branch = branch
    }
    try {
      const data = await fetch(`/api/deploy`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (data.status === 200) setTriggered(true)
      else {
        setError(true)
        console.log(data)
      }
    } catch (err) {
      setError(true)
      console.log(err)
    }
    setSubmitting(false)
  }
  if (triggered) {
    setTimeout(() => {
      setTriggered(false)
    }, 2000)
    return (
      <div className="flex pt-2 text-sm">
        <CheckCircle2Icon className="mr-2 mt-[2px] size-4 text-green-500" />
        Deployment started
      </div>
    )
  }
  if (error) {
    alert(
      "Something went wrong. Make sure you have the set the deploy_url correctly in the extension settings."
    )
    return (
      <div className="flex pt-2 text-sm">
        <XCircleIcon className="mr-2 mt-[2px] size-4 text-red-500" />
        Deployment failed
      </div>
    )
  }
  return (
    <Button
      disabled={submitting}
      onClick={() => handleTriggerDeployClicked()}
      className="w-screen"
      variant="secondary"
    >
      {submitting ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        "Trigger deploy"
      )}
    </Button>
  )
}
