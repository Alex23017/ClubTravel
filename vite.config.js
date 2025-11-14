import { defineConfig } from 'vite'
import path from 'path'
import handlebars from 'vite-plugin-handlebars'
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite'

const partialDirs = [
  path.resolve(__dirname, 'src/html/components/header'),
  path.resolve(__dirname, 'src/html/components/footer'),
  path.resolve(__dirname, 'src/html/components/search'),
  path.resolve(__dirname, 'src/html/components/consultation'),
  path.resolve(__dirname, 'src/html/components/oneHotel'),
]

export default defineConfig({
  root: 'src',
  appType: 'mpa',
  plugins: [
    handlebars({
      partialDirectory: partialDirs,
      watch: true,
    }),
    svgSpritePlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/img/icons')],
      symbolId: 'icon-[name]',
      inject: 'body-last',
      customDomId: 'svg-sprite',
    }),

    {
      name: 'hmr-hbs-partials',
      configureServer(server) {
        server.watcher.add(partialDirs)
        server.watcher.on('change', file => {
          if (partialDirs.some(dir => file.startsWith(dir))) {
            server.ws.send({ type: 'full-reload' })
          }
        })
      },
    },
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        hotdeals: path.resolve(__dirname, 'src/html/pages/hotdeals.html'),
      },
    },
  },
})
