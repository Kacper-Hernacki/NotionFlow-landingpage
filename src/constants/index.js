import {  linkedin, gumroadBanner, producthuntBanner, code, notionImg, docs, instagramLogo, xLogo } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "demo",
    title: "Demo",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: code,
    title: "Easy Customization",
    content:
      "The Clean NextJS boilerplate with simply added features",
  },
  {
    id: "feature-2",
    icon: notionImg,
    title: "Notion Templates",
    content:
      "Included Notion templates for customization of an app",
  },
  {
    id: "feature-3",
    icon: docs,
    title: "Docs and Videos",
    content:
      "Docs and videos tutorials as a guide through the setup",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Licenses",
        link: "/licenses",
      },
      {
        name: "Docs",
        link: "/docs",
      },

    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Terms of services",
        link: "/terms",
      },
      {
        name: "Privacy policy",
        link: "/privacy-policy",
      }
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Support",
        link: "/support",
      },
      {
        name: "Discord",
        link: "https://discord.gg/BRGpGhqANH",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagramLogo,
    link: "https://www.instagram.com/kacper.hernacki/",
  },
  {
    id: "social-media-3",
    icon: xLogo,
    link: "https://twitter.com/KacperHernacki",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://pl.linkedin.com/in/kacper-hernacki-965161203",
  },
];

export const platforms = [
  {
    id: "platform-1",
    logo: gumroadBanner,
    link:"https://gumroad.com/"
  },
  {
    id: "platform-2",
    logo: producthuntBanner,
    link:"https://www.producthunt.com/"
  },
];
