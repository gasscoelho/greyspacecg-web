const { i18n } = require('./next-i18next.config')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  i18n
})
