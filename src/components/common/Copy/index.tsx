import { useState, useRef } from "react"
import { Tooltip } from "antd"

const Copy = ({
  children,
  copy,
  tooltipMessage = "Copy to Clipboard",
  tooltipSuccess = "Copied!..",
}: {
  children: React.ReactNode
  copy: string
  tooltipMessage?: string
  tooltipSuccess?: string
}) => {
  const [copied, setCopied] = useState(false)
  const tooltip = !copied ? tooltipMessage : tooltipSuccess
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const process = () => {
    // message.success(tooltipSuccess)
    setCopied(true)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <span
      onClick={() => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          navigator.clipboard.writeText(copy).then(process)
        }
      }}
    >
      <Tooltip title={tooltip} onOpenChange={() => setCopied(false)}>
        {children}
      </Tooltip>
    </span>
  )
}

export default Copy
