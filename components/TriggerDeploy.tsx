"use client"

import { useState } from "react"
import { CheckCircle2Icon, CrossIcon, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function TriggerDeploy({ deploy_url }: { deploy_url: string }) {
  const [submitting, setSubmitting] = useState(false)
  const [triggered, setTriggered] = useState(false)
  const [error, setError] = useState(false)
  async function handleTriggerDeployClicked(deploy_url: string) {
    // alert(deploy_url)
    setSubmitting(true)
    try {
      await fetch(deploy_url)
      setTriggered(true)
    } catch (err) {
      setError(true)
    }
    setSubmitting(false)
  }
  if (triggered)
    return (
      <div className="flex">
        <CheckCircle2Icon className="w-6 h-6 text-green-500 mr-2" />
        Deployment started
      </div>
    )
  if (error)
    return (
      <div className="flex">
        <CrossIcon className="w-6 h-6 text-red-500 mr-2" />
        Something went wrong. Make sure you have the set the deploy_url
        correctly in the extension settings.
      </div>
    )
  return (
    <Button
      disabled={submitting}
      onClick={() => handleTriggerDeployClicked(deploy_url)}
    >
      {submitting ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        "Trigger deploy"
      )}
    </Button>
  )
}
