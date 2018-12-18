class GetCloudStorageContents {
  init (config, env, cb) {
    cb(null)
  }

  run (event, context) {
    context.sendTaskSuccess({ contents: [] })
  }
}

module.exports = GetCloudStorageContents
