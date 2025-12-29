import React, { ReactElement } from "react"
import { SVGX, SVGTelegram, SVGDiscord, SVGBluesky, SVGMedium, SVGYoutube, SVGGithub } from "@/components/svg"
import style from "./style.module.css"

const list: { icon: ReactElement; social: string; username: string; url: string }[] = [
  {
    icon: <SVGX />,
    social: "X",
    username: "@xray_network",
    url: "https://x.com/xray_network",
  },
  {
    icon: <SVGTelegram />,
    social: "Telegram",
    username: "@xray_community",
    url: "https://t.me/xray_community",
  },
  {
    icon: <SVGDiscord />,
    social: "Discord",
    username: "XRAY/Network",
    url: "https://discord.gg/WhZmm46APN",
  },
  {
    icon: <SVGBluesky />,
    social: "Bluesky",
    username: "@xray-network",
    url: "https://bsky.app/profile/xray-network.bsky.social",
  },
  {
    icon: <SVGMedium />,
    social: "Medium",
    username: "@xray-network",
    url: "https://xray-network.medium.com",
  },
  {
    icon: <SVGYoutube />,
    social: "YouTube",
    username: "@xray-network",
    url: "https://www.youtube.com/@xray-network",
  },
  {
    icon: <SVGGithub />,
    social: "GitHub",
    username: "@xray-network",
    url: "https://github.com/xray-network",
  },
]

const SocialMedia = () => {
  return (
    <div className={style.container}>
      {list.map((item, index) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className={style.item} key={index}>
          <i className={`xi xi-ext xi-arrow_up ${style.itemExt}`} />
          <div className="d-flex align-items-center">
            <span>{item.icon}</span>
            <span className={style.itemTitle}>
              <small>{item.username}</small>
              <span>{item.social}</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
