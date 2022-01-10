class DummyNotifyService {
  boot (options) {
    this.notifyClient = {}

    this.templates = {}

    for (const key of Object.keys(options.blueprintComponents.messageTemplates || {})) {
      this.templates[key] = {
        sendMessage: () => {
          console.log('Sending message')
        }
      }
    }
  } // boot
} // DummyNotifyService

module.exports = {
  serviceClass: DummyNotifyService,
  bootBefore: ['statebox'],
  bootAfter: ['registry']
}
