import { defineConfig } from 'vite'
import path from 'path'
import handlebars from 'vite-plugin-handlebars'
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { hulakPlugins } from 'vite-plugin-hulak-tools'

const partialDirs = [
  path.resolve(__dirname, 'src/html/components/base'),
  path.resolve(__dirname, 'src/html/components/contacts'),
  path.resolve(__dirname, 'src/html/components/hotdeals'),
  path.resolve(__dirname, 'src/html/components/home'),
  path.resolve(__dirname, 'src/html/components/tourRequest'),
  path.resolve(__dirname, 'src/html/components/oneHotel'),
  path.resolve(__dirname, 'src/html/components/resultSearch'),
  path.resolve(__dirname, 'src/html/components/authorization'),
  path.resolve(__dirname, 'src/html/components/profile'),
  
]

export default defineConfig({
  root: 'src',
  appType: 'mpa',
  plugins: [
    hulakPlugins({
      enableHandlebars: true,
      handlebarsOptions: {
        partialDirectory: 'src/html/components'
      }
    }),
    handlebars({
      partialDirectory: partialDirs,
      watch: true,
    }),
    
    createHtmlPlugin({
      minify: true,
      // @ts-ignore
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      minifyCSS: true,
      minifyJS: true,
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
  assetsInclude: ['**/*.html'],
  
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        hotdeals: path.resolve(__dirname, 'src/html/pages/hotdeals.html'),
      },
    },
  },
})
