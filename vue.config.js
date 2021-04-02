module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/_mixins.scss";
          @import "@/styles/_variables.scss";
        `
      }
    }
  }
}
