const chai = require('chai')
const expect = chai.expect

module.exports = async function (options) {
  const {
    statebox,
    stateMachineName,
    input = {},
    userId,
    expectedCurrentStateName = 'AwaitingHumanInput',
    expectedStatus = 'RUNNING'
  } = options

  const {
    executionName,
    ctx,
    status,
    currentStateName,
    errorCode,
    errorMessage
  } = await statebox.startExecution(
    input,
    stateMachineName,
    {
      sendResponse: 'AFTER_RESOURCE_CALLBACK.TYPE:awaitingHumanInput',
      userId
    }
  )

  expect(status).to.eql(expectedStatus)

  if (expectedStatus !== 'RUNNING') {
    return { status, errorCode, errorMessage }
  }

  expect(currentStateName).to.eql(expectedCurrentStateName)

  return { executionName, ctx }
}
