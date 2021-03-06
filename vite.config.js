// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        DetailProduct: resolve(__dirname, 'detail.html'),
        products: resolve(__dirname, 'products.html')
      }
    }
  }
})