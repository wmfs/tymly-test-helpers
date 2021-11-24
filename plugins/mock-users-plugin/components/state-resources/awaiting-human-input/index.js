module.exports = class AwaitingHumanInput {
  run (event, context) {
    context.sendTaskSuccess()
  } // run
}
