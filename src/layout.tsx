import { useEffect, useState, ReactNode, use } from "react"
import { useLocation } from "react-router-dom"
import { useMiniAppClientMessaging, type HostMessage } from "xray-mini-app-sdk-react"
import AntdTheme from "@/styles/antdTheme"
import { set } from "lodash"

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const route = location.pathname + location.search + location.hash

  const [theme, setTheme] = useState<"light" | "dark">("light")

  if (typeof window !== "undefined") {
    const { sendMessage: sendMessageToXRAY, isConnected } = useMiniAppClientMessaging(handleXRAYMessage)
    const theme = localStorage.getItem("vocs.theme") === "dark" ? "dark" : "light"

    useEffect(() => {
      setTheme(theme)
    }, [])

    function handleXRAYMessage(message: HostMessage) {
      if (message.type === "xray.host.theme") {
        const theme = message.payload.theme
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(theme)
        localStorage.setItem("vocs.theme", theme)
        setTheme(theme)
      }
    }

    useEffect(() => {
      if (isConnected) {
        sendMessageToXRAY("xray.client.getTheme")
      }
    }, [isConnected])

    useEffect(() => {
      sendMessageToXRAY("xray.client.routeChanged", { route })
    }, [route])
  }

  return <AntdTheme theme={theme}>{children}</AntdTheme>
}
