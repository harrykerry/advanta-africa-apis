import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "Advanta Africa APIs",
  description:
    "Official API documentation for Advanta Africa, outlining integration guidelines and usage instructions.",

  theme: defaultTheme({

    colorMode: "dark", 
    colorModeSwitch: true,

    navbar: ["/", "/get-started"],

    sidebar: [
      {
        text: "SMS API",
        prefix: "/sms-api/",
        link: "/sms-api/",
        collapsible: true,
        children: [
          {
            text: "Send SMS",
            link: "send-sms.md",
            children: [],
          },
          {
            text: "Bulk SMS",
            link: "bulk-sms.md",
            children: [],
          },
          {
            text: "Send Hashed SMS",
            link: "send-hashed.md",
            children: [],
          },
          {
            text: "Send OTP",
            link: "send-otp.md",
            children: [],
          },
          {
            text: "Delivery Reports",
            link: "delivery.md",
            children: [],
          },
          {
            text: "Delivery Status Descriptions",
            link: "delivery-status.md",
            children: [],
          },
          {
            text: "SMS Balance",
            link: "balance.md",
            children: [],
          },
          {
            text: "Common Errors",
            link: "common-errors.md",
            children: [],
          },
          {
            text: "Response Codes",
            link: "codes.md",
            children: [],
          },
         
        ],
      },

      {
        text: "RESELLER SMS CREDIT API",
        prefix: "/credit-api/",
        link: "/credit-api/",
        children: [],
      },

      {
        text: "USSD GUIDE",
        prefix: "/ussd-api/",
        link: "/ussd-api/",
        children: [],
      },
      {
        text: "SHORTCODE GUIDE",
        prefix: "/shortcode-api/",
        link: "/shortcode-api/",
        children: [],
      },

      {
        text: "SMPP API",
        prefix: "/smpp-api/",
        link: "/smpp-api/",
        children: [],
      },

      {
        text: "AIRTIME API",
        prefix: "/airtime-api/",
        link: "/airtime-api/",
        children: [],
      },

      {
        text: "EMAIL API",
        prefix: "/email-api/",
        link: "/email-api/",
        children: [],
      },
    ],
    
  }),


  bundler: viteBundler(),
});
