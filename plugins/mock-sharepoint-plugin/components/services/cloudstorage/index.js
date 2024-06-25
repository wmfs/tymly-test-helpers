module.exports = {
  serviceClass: class {
    provider () {
      return {
        ensureFolderPath () {},
        listFolderContentsFromPath () {},
        checkFolderPathExists () {}
      }
    }
  }
}
