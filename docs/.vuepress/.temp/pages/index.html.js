import comp from "/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/advlogo.png\",\"actions\":[{\"text\":\"Get Started 🚀\",\"link\":\"/get-started.html\",\"type\":\"primary\"}],\"footer\":\"©  Advanta Africa Ltd. All rights reserved | tech@advantasms.com.\"},\"headers\":[],\"git\":{\"updatedTime\":1741899483000,\"contributors\":[{\"name\":\"harrykerry\",\"username\":\"harrykerry\",\"email\":\"haroldkerry@gmail.com\",\"commits\":1,\"url\":\"https://github.com/harrykerry\"}],\"changelog\":[{\"hash\":\"f03da0d7b216cec07746048fad2d865c24c74957\",\"time\":1741899483000,\"email\":\"haroldkerry@gmail.com\",\"author\":\"harrykerry\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
