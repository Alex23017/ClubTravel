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
  path.resolve(__dirname, 'src/html/components/skeleton'),
]

export default defineConfig({
  root: 'src',
  // base: '/ClubTravel/',
  appType: 'mpa',
  plugins: [
    hulakPlugins({
      enableHandlebars: true,
      handlebarsOptions: {
        partialDirectory: 'src/html/components',
      },
    }),
    handlebars({
      partialDirectory: partialDirs,
      watch: true,
    }),
    createHtmlPlugin({
      minify: false,
      inject: false,
    }),

    svgSpritePlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/img/icons')],
      symbolId: 'icon-[name]',
      inject: 'body-last',
      customDomId: 'svg-sprite',
      svgoConfig: false,
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
    minify: 'esbuild',
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        hotdeals: path.resolve(__dirname, 'src/html/pages/hotdeals.html'),
        nofFOunt: path.resolve(__dirname, 'src/html/pages/404.html'),
        authorization: path.resolve(__dirname, 'src/html/pages/authorization.html'),
        company: path.resolve(__dirname, 'src/html/pages/company.html'),
        contacts: path.resolve(__dirname, 'src/html/pages/contacts.html'),
        oneHotel: path.resolve(__dirname, 'src/html/pages/oneHotel.html'),
        profile: path.resolve(__dirname, 'src/html/pages/profile.html'),
        resultSearch: path.resolve(__dirname, 'src/html/pages/resultSearch.html'),
        tourRequest: path.resolve(__dirname, 'src/html/pages/tourRequest.html'),
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) return 'css/[name].css'
          return 'assets/[name][extname]'
        },
      },
    },
  },
})
