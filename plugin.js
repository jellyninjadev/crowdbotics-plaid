const NPM_MODULE_NAME = 'crowdbotics-expo-plaid'
const NPM_MODULE_VERSION = '0.0.1'

const PLUGIN_PATH = __dirname
const APP_PATH = process.cwd()

const add = async function(toolbox) {
  toolbox.filesystem.copy(
    `${PLUGIN_PATH}/templates/sample`,
    `${APP_PATH}/app/plaid_link`
  )
}

const remove = async function(toolbox) {
  const confirmation = await toolbox.prompt.confirm(
    'Do you want to remove app/ignite-expo-plaid?'
  )
  if (confirmation) {
    toolbox.filesystem.remove(`${APP_PATH}/app/plaid_link`)
  }
}

module.exports = { add, remove }
