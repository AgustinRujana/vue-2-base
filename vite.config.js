//See documentation https://www.npmjs.com/package/vite-plugin-vue2
const { createVuePlugin } = require('vite-plugin-vue2');

//Resolve is used to declare paths
const { resolve } = require('path')

module.exports = {
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'node_modules'),
      '@': resolve(__dirname, 'src'),
      '@comp': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@plugins': resolve(__dirname, 'src/plugins'),
      '@locales': resolve(__dirname, 'src/locales'),
      '@css': resolve(__dirname, 'src/assets/css')
    },
  },
};