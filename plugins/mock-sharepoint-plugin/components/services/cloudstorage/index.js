module.exports = {
  serviceClass: class {
    provider () {
      return {
        sharepoint: {
          siteUrl: 'SITE_URL'
        },
        ensureFolderPath () {},
        listFolderContentsFromPath () {},
        checkFolderPathExists () {}
      }
    }
  }
}
