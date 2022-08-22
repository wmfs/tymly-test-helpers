const chai = require('chai')
const expect = chai.expect

module.exports = async function (options) {
  const {
    statebox,
    execName,
    formData = {},
    userId
  } = options

  const execDesc = await statebox.sendTaskSuccess(execName, formData, { userId })

  if (execDesc) {
    expect(execDesc.status).to.eql('SUCCEEDED')
  }

  const { ctx, status } = await statebox.waitUntilStoppedRunning(execName)

  expect(status).to.eql('SUCCEEDED')

  return ctx
}
