class DummyNotifyService {
  boot (options) {
    const notificationModel = options.bootedServices.storage.models.tymly_govUkNotifications

    this.notifyClient = {}

    this.templates = {}

    for (const [key, template] of Object.entries(options.blueprintComponents.messageTemplates || {})) {
      this.templates[key] = {
        sendMessage: async (input) => {
          input = Array.isArray(input) ? input : [input]

          if (Array.isArray(template.required)) {
            for (const required of template.required) {
              for (const i of input) {
                if (!i[required]) {
                  throw new Error(`Missing input: ${required}`)
                }
              }
            }
          }

          const notifications = []

          let recipient = ''

          if (template.messageType === 'mail') recipient = input.emailAddress
          if (template.messageType === 'sms') recipient = input.phoneNumber

          for (const i of input) {
            const n = {
              recipient,
              input: i,
              template: template.templateId,
              blueprint: template.blueprintName,
              templateName: template.name,
              namespace: template.namespace,
              notifyId: null,
              error: null,
              statusCode: null
            }
            notifications.push(n)
            await notificationModel.create(n)
          }

          return notifications
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
