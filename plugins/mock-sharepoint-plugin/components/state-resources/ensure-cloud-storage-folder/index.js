class EnsureCloudStorageFolder {
  init (config, env, cb) {
    cb(null)
  }

  run (event, context) {
    context.sendTaskSuccess({
      folderPath: '/cloud/storage/folder',
      url: 'https://cloud.provider.example/'
    })
  }
}

module.exports = EnsureCloudStorageFolder
