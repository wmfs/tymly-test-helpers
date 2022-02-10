module.exports = class SendingMessageViaService {
  init (stateConfig, options) {
    this.notify = options.bootedServices.notify
    this.template = this.notify.templates[stateConfig.messageTemplateId]

    if (!this.template) {
      throw new Error(`No message template with id: ${stateConfig.messageTemplateId}`)
    }
  }

  async run (event, context) {
    try {
      const sent = await this.template.sendMessage(event)
      context.sendTaskSuccess({ sent })
    } catch (e) {
      context.sendTaskFailure({
        error: 'SEND_MESSAGE_FAIL',
        cause: e.message
      })
    }
  }
}
