export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/airtime-api/", { loader: () => import(/* webpackChunkName: "airtime-api_index.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/airtime-api/index.html.js"), meta: {"title":"AIRTIME API"} }],
  ["/credit-api/", { loader: () => import(/* webpackChunkName: "credit-api_index.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/credit-api/index.html.js"), meta: {"title":"RESELLER CREDIT API"} }],
  ["/smpp-api/", { loader: () => import(/* webpackChunkName: "smpp-api_index.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/smpp-api/index.html.js"), meta: {"title":"SMPP API"} }],
  ["/sms-api/", { loader: () => import(/* webpackChunkName: "sms-api_index.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/sms-api/index.html.js"), meta: {"title":"SMS API"} }],
  ["/sms-api/balance.html", { loader: () => import(/* webpackChunkName: "sms-api_balance.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/sms-api/balance.html.js"), meta: {"title":"SMS ACCOUNT BALANCE"} }],
  ["/sms-api/bulk-sms.html", { loader: () => import(/* webpackChunkName: "sms-api_bulk-sms.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/sms-api/bulk-sms.html.js"), meta: {"title":"SEND BULK SMS"} }],
  ["/sms-api/codes.html", { loader: () => import(/* webpackChunkName: "sms-api_codes.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/sms-api/codes.html.js"), meta: {"title":"RESPONSE CODES"} }],
  ["/sms-api/common-errors.html", { loader: () => import(/* webpackChunkName: "sms-api_common-errors.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/sms-api/common-errors.html.js"), meta: {"title":"Common Errors and Solutions"} }],
  ["/sms-api/delivery.html", { loader: () => import(/* webpackChunkName: "sms-api_delivery.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/sms-api/delivery.html.js"), meta: {"title":"DELIVERY REPORTS"} }],
  ["/sms-api/send-hashed.html", { loader: () => import(/* webpackChunkName: "sms-api_send-hashed.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/sms-api/send-hashed.html.js"), meta: {"title":"SAFARICOM HASHED SMS"} }],
  ["/sms-api/send-otp.html", { loader: () => import(/* webpackChunkName: "sms-api_send-otp.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/sms-api/send-otp.html.js"), meta: {"title":"SEND OTP SMS"} }],
  ["/sms-api/send-sms.html", { loader: () => import(/* webpackChunkName: "sms-api_send-sms.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/sms-api/send-sms.html.js"), meta: {"title":"SEND SMS"} }],
  ["/ussd-api/", { loader: () => import(/* webpackChunkName: "ussd-api_index.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/ussd-api/index.html.js"), meta: {"title":"USSD GUIDE"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
