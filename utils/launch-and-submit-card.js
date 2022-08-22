const launchCard = require('./launch-card')
const submitCard = require('./submit-card')

module.exports = async function (options) {
  const {
    statebox,
    stateMachineName,
    input = {},
    userId,
    expectedCurrentStateName = 'AwaitingHumanInput',
    expectedStatus = 'RUNNING',
    formData = {}
  } = options

  const { executionName } = launchCard({
    statebox,
    stateMachineName,
    input,
    userId,
    expectedCurrentStateName,
    expectedStatus
  })

  return submitCard({
    statebox,
    execName: executionName,
    formData,
    userId
  })
}
