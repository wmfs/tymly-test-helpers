class GetCloudStorageContents {
  run (event, context) {
    context.sendTaskSuccess({ contents: [] })
  }
}

module.exports = GetCloudStorageContents
