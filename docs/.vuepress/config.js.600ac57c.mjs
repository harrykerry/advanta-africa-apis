// docs/.vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import searchPlugin from "@vuepress/plugin-search";
var config_default = defineUserConfig({
  lang: "en-US",
  title: "Advanta API Documentation",
  description: "Official API documentation for Advanta Africa, outlining integration guidelines and usage instructions.",
  theme: defaultTheme({
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
            children: []
          },
          {
            text: "Bulk SMS",
            link: "bulk-sms.md",
            children: []
          },
          {
            text: "Send Hashed SMS",
            link: "send-hashed.md",
            children: []
          },
          {
            text: "Send OTP",
            link: "send-otp.md",
            children: []
          },
          {
            text: "Delivery Reports",
            link: "delivery.md",
            children: []
          },
          {
            text: "SMS Balance",
            link: "balance.md",
            children: []
          },
          {
            text: "Common Errors",
            link: "common-errors.md",
            children: []
          },
          {
            text: "Response Codes",
            link: "codes.md",
            children: []
          }
        ]
      },
      {
        text: "RESELLER SMS CREDIT API",
        prefix: "/credit-api/",
        link: "/credit-api/",
        children: []
      },
      {
        text: "USSD GUIDE",
        prefix: "/ussd-api/",
        link: "/ussd-api/",
        children: []
      },
      {
        text: "SMPP API",
        prefix: "/smpp-api/",
        link: "/smpp-api/",
        children: []
      },
      {
        text: "AIRTIME API",
        prefix: "/airtime-api/",
        link: "/airtime-api/",
        children: []
      }
    ]
  }),
  plugins: [
    searchPlugin({
      maxSuggestions: 10
      // Limit number of suggestions
    })
  ],
  bundler: viteBundler()
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvaGFyb2xkL0RvY3VtZW50cy9Qcm9qZWN0cy9hZHZhbnRhLWFwaS1kb2NzL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9oYXJvbGQvRG9jdW1lbnRzL1Byb2plY3RzL2FkdmFudGEtYXBpLWRvY3MvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2hhcm9sZC9Eb2N1bWVudHMvUHJvamVjdHMvYWR2YW50YS1hcGktZG9jcy9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHRcIjtcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3MvY2xpXCI7XG5pbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gXCJAdnVlcHJlc3MvYnVuZGxlci12aXRlXCI7XG5pbXBvcnQgc2VhcmNoUGx1Z2luIGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBsYW5nOiBcImVuLVVTXCIsXG5cbiAgdGl0bGU6IFwiQWR2YW50YSBBUEkgRG9jdW1lbnRhdGlvblwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIk9mZmljaWFsIEFQSSBkb2N1bWVudGF0aW9uIGZvciBBZHZhbnRhIEFmcmljYSwgb3V0bGluaW5nIGludGVncmF0aW9uIGd1aWRlbGluZXMgYW5kIHVzYWdlIGluc3RydWN0aW9ucy5cIixcblxuICB0aGVtZTogZGVmYXVsdFRoZW1lKHtcblxuICAgIG5hdmJhcjogW1wiL1wiLCBcIi9nZXQtc3RhcnRlZFwiXSxcblxuICAgIHNpZGViYXI6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJTTVMgQVBJXCIsXG4gICAgICAgIHByZWZpeDogXCIvc21zLWFwaS9cIixcbiAgICAgICAgbGluazogXCIvc21zLWFwaS9cIixcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJTZW5kIFNNU1wiLFxuICAgICAgICAgICAgbGluazogXCJzZW5kLXNtcy5tZFwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJCdWxrIFNNU1wiLFxuICAgICAgICAgICAgbGluazogXCJidWxrLXNtcy5tZFwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJTZW5kIEhhc2hlZCBTTVNcIixcbiAgICAgICAgICAgIGxpbms6IFwic2VuZC1oYXNoZWQubWRcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiU2VuZCBPVFBcIixcbiAgICAgICAgICAgIGxpbms6IFwic2VuZC1vdHAubWRcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiRGVsaXZlcnkgUmVwb3J0c1wiLFxuICAgICAgICAgICAgbGluazogXCJkZWxpdmVyeS5tZFwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJTTVMgQmFsYW5jZVwiLFxuICAgICAgICAgICAgbGluazogXCJiYWxhbmNlLm1kXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkNvbW1vbiBFcnJvcnNcIixcbiAgICAgICAgICAgIGxpbms6IFwiY29tbW9uLWVycm9ycy5tZFwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJSZXNwb25zZSBDb2Rlc1wiLFxuICAgICAgICAgICAgbGluazogXCJjb2Rlcy5tZFwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICBcbiAgICAgICAgXSxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJSRVNFTExFUiBTTVMgQ1JFRElUIEFQSVwiLFxuICAgICAgICBwcmVmaXg6IFwiL2NyZWRpdC1hcGkvXCIsXG4gICAgICAgIGxpbms6IFwiL2NyZWRpdC1hcGkvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJVU1NEIEdVSURFXCIsXG4gICAgICAgIHByZWZpeDogXCIvdXNzZC1hcGkvXCIsXG4gICAgICAgIGxpbms6IFwiL3Vzc2QtYXBpL1wiLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiU01QUCBBUElcIixcbiAgICAgICAgcHJlZml4OiBcIi9zbXBwLWFwaS9cIixcbiAgICAgICAgbGluazogXCIvc21wcC1hcGkvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJBSVJUSU1FIEFQSVwiLFxuICAgICAgICBwcmVmaXg6IFwiL2FpcnRpbWUtYXBpL1wiLFxuICAgICAgICBsaW5rOiBcIi9haXJ0aW1lLWFwaS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFxuICB9KSxcblxuICBwbHVnaW5zOiBbXG4gICAgc2VhcmNoUGx1Z2luKHtcbiAgICAgIG1heFN1Z2dlc3Rpb25zOiAxMCwgLy8gTGltaXQgbnVtYmVyIG9mIHN1Z2dlc3Rpb25zXG4gICAgfSksXG4gIF0sXG5cbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVyxTQUFTLG9CQUFvQjtBQUNsWSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLG1CQUFtQjtBQUM1QixPQUFPLGtCQUFrQjtBQUd6QixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxFQUNQLGFBQ0U7QUFBQSxFQUVGLE9BQU8sYUFBYTtBQUFBLElBRWxCLFFBQVEsQ0FBQyxLQUFLLGNBQWM7QUFBQSxJQUU1QixTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFVBQVUsQ0FBQztBQUFBLFVBQ2I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixVQUFVLENBQUM7QUFBQSxVQUNiO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sVUFBVSxDQUFDO0FBQUEsVUFDYjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFVBQVUsQ0FBQztBQUFBLFVBQ2I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixVQUFVLENBQUM7QUFBQSxVQUNiO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sVUFBVSxDQUFDO0FBQUEsVUFDYjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLFVBQVUsQ0FBQztBQUFBLFVBQ2I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixVQUFVLENBQUM7QUFBQSxVQUNiO0FBQUEsUUFFRjtBQUFBLE1BQ0Y7QUFBQSxNQUVBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixVQUFVLENBQUM7QUFBQSxNQUNiO0FBQUEsTUFFQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sVUFBVSxDQUFDO0FBQUEsTUFDYjtBQUFBLE1BRUE7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFVBQVUsQ0FBQztBQUFBLE1BQ2I7QUFBQSxNQUVBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixVQUFVLENBQUM7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLEVBRUYsQ0FBQztBQUFBLEVBRUQsU0FBUztBQUFBLElBQ1AsYUFBYTtBQUFBLE1BQ1gsZ0JBQWdCO0FBQUE7QUFBQSxJQUNsQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsU0FBUyxZQUFZO0FBQ3ZCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
