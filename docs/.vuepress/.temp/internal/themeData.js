export const themeData = JSON.parse("{\"colorMode\":\"dark\",\"colorModeSwitch\":true,\"navbar\":[\"/\",\"/get-started\"],\"sidebar\":[{\"text\":\"SMS API\",\"prefix\":\"/sms-api/\",\"link\":\"/sms-api/\",\"collapsible\":true,\"children\":[{\"text\":\"Send SMS\",\"link\":\"send-sms.md\",\"children\":[]},{\"text\":\"Bulk SMS\",\"link\":\"bulk-sms.md\",\"children\":[]},{\"text\":\"Send Hashed SMS\",\"link\":\"send-hashed.md\",\"children\":[]},{\"text\":\"Send OTP\",\"link\":\"send-otp.md\",\"children\":[]},{\"text\":\"Delivery Reports\",\"link\":\"delivery.md\",\"children\":[]},{\"text\":\"Delivery Status Descriptions\",\"link\":\"delivery-status.md\",\"children\":[]},{\"text\":\"SMS Balance\",\"link\":\"balance.md\",\"children\":[]},{\"text\":\"Common Errors\",\"link\":\"common-errors.md\",\"children\":[]},{\"text\":\"Response Codes\",\"link\":\"codes.md\",\"children\":[]}]},{\"text\":\"RESELLER SMS CREDIT API\",\"prefix\":\"/credit-api/\",\"link\":\"/credit-api/\",\"children\":[]},{\"text\":\"USSD GUIDE\",\"prefix\":\"/ussd-api/\",\"link\":\"/ussd-api/\",\"children\":[]},{\"text\":\"SHORTCODE GUIDE\",\"prefix\":\"/shortcode-api/\",\"link\":\"/shortcode-api/\",\"children\":[]},{\"text\":\"SMPP API\",\"prefix\":\"/smpp-api/\",\"link\":\"/smpp-api/\",\"children\":[]},{\"text\":\"AIRTIME API\",\"prefix\":\"/airtime-api/\",\"link\":\"/airtime-api/\",\"children\":[]},{\"text\":\"EMAIL API\",\"prefix\":\"/email-api/\",\"link\":\"/email-api/\",\"children\":[]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
