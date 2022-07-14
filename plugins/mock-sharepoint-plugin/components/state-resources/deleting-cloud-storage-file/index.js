class DeletingCloudStorageFile {
  run (event, context) {
    context.sendTaskSuccess({})
  }
}

module.exports = DeletingCloudStorageFile
