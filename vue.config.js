module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'MyNotes'
      return args
    })
  },
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
