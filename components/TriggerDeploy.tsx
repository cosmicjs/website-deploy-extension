"use client"

import { useState } from "react"
import { CheckCircle2Icon, Loader2, XCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function TriggerDeploy({ deploy_url }: { deploy_url: string }) {
  const [submitting, setSubmitting] = useState(false)
  const [triggered, setTriggered] = useState(false)
  const [error, setError] = useState(false)
  async function handleTriggerDeployClicked(deploy_url: string) {
    setSubmitting(true)
    try {
      const data = await fetch(`/api/deploy`, {
        method: "POST",
        body: JSON.stringify({ deploy_url }),
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
      onClick={() => handleTriggerDeployClicked(deploy_url)}
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
