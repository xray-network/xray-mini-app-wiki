import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import {
  useMiniAppClientMessaging,
  type HostMessage,
} from "xray-mini-app-sdk-react";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const route = location.pathname + location.search + location.hash;

  if (typeof window !== "undefined") {
    const { sendMessage: sendMessageToXRAY, isConnected } =
      useMiniAppClientMessaging(handleXRAYMessage);

    function handleXRAYMessage(message: HostMessage) {
      if (message.type === "xray.host.theme") {
        const theme = message.payload.theme;
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("vocs.theme", theme);
      }
    }

    useEffect(() => {
      if (isConnected) {
        sendMessageToXRAY("xray.client.getTheme");
      }
    }, [isConnected]);

    useEffect(() => {
      sendMessageToXRAY("xray.client.routeChanged", { route });
    }, [route]);
  }

  return <div id="222">{children}</div>;
}
