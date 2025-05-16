import comp from "/home/harold/Documents/Projects/advanta-api-docs/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Available APIs\",\"slug\":\"available-apis\",\"link\":\"#available-apis\",\"children\":[]}],\"git\":{\"updatedTime\":1742484397000,\"contributors\":[{\"name\":\"harrykerry\",\"username\":\"harrykerry\",\"email\":\"haroldkerry@gmail.com\",\"commits\":3,\"url\":\"https://github.com/harrykerry\"}],\"changelog\":[{\"hash\":\"f2d3a131ac406253cd8a91247ea355a5c88359d4\",\"time\":1742484397000,\"email\":\"haroldkerry@gmail.com\",\"author\":\"harrykerry\",\"message\":\"feat: Add Email API doc\"},{\"hash\":\"aec4f96697781c6919573b1becc8bac37e15dace\",\"time\":1741944567000,\"email\":\"haroldkerry@gmail.com\",\"author\":\"harrykerry\",\"message\":\"feat: Add run in postman, shortcode guide and delivery descriptions\"},{\"hash\":\"f03da0d7b216cec07746048fad2d865c24c74957\",\"time\":1741899483000,\"email\":\"haroldkerry@gmail.com\",\"author\":\"harrykerry\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"get-started.md\"}")
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
