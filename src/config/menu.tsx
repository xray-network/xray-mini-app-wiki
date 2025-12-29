export const menuConfig = [
  {
    text: "Homepage",
    link: "/",
  },
  {
    text: "General",
    collapsed: false,
    items: [
      { text: "XRAY Tokenomics", link: "/xray-tokenomics/", icon: "xi xi-diamond" },
      { text: "Ecosystem Metrics", link: "/ecosystem-metrics/", icon: "xi xi-diamond" },
      { text: "Roadmap", link: "/roadmap/", icon: "xi xi-map" },
      { text: "Latest Updates", link: "/latest-updates/", icon: "xi xi-code" },
      { text: "Github Updates", link: "/github-updates/", icon: "xi xi-code" },
      { text: "Social Media", link: "/social-media/", icon: "xi xi-share" },
      { text: "Install App (PWA)", link: "/install-app-pwa/", icon: "xi xi-add_circled" },
    ],
  },
  {
    text: "Ecosystem",
    collapsed: false,
    items: [
      { text: "XRAY/Network", link: "/xray-network/", icon: "xi xi-bank" },
      { text: "XRAY/Foundation", link: "/xray-foundation/", icon: "xi xi-heart" },
      { text: "XRAY/App", link: "/xray-app/", icon: "xi xi-cursor" },
      { text: "XRAY/Vault", link: "/xray-vault/", icon: "xi xi-document" },
      { text: "Mini Apps", link: "/mini-apps/", icon: "xi xi-category" },
    ],
  },
  {
    text: "Developers",
    collapsed: false,
    items: [
      { text: "XRAY/Builder", link: "/dev/xray-builder/", icon: "xi xi-code" },
      { text: "XRAY/Graph", link: "/dev/xray-graph/", icon: "xi xi-code" },
      { text: "XRAY/Vault", link: "/dev/xray-vault/", icon: "xi xi-code" },
      { text: "Mini Apps SDK", link: "/dev/mini-apps-sdk/", icon: "xi xi-code" },
      { text: "CardanoWeb3.js", link: "/dev/cardano-web3-js/", icon: "xi xi-code" },
    ],
  },
  {
    text: "Legal",
    collapsed: false,
    items: [
      { text: "Terms of Service", link: "/terms-of-service/", icon: "xi xi-info" },
      { text: "Privacy Policy", link: "/privacy-policy/", icon: "xi xi-shield_check" },
    ],
  },
]
