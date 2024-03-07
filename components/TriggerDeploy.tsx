"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function TriggerDeploy({ deploy_url }: { deploy_url: string }) {
  const [submitting, setSubmitting] = useState(false)
  async function handleTriggerDeployClicked(deploy_url: string) {
    // alert(deploy_url)
    setSubmitting(true)
    try {
      await fetch(deploy_url)
    } catch (err) {
      alert(
        "Something went wrong. Make sure you have the set the deploy_url correctly in the extension settings."
      )
    }
    setSubmitting(false)
  }
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
