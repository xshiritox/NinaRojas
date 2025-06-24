import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Configuración de CSP
const cspDirectives = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://*.googletagmanager.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://analytics.google.com",
    "https://*.firebaseio.com",
    "https://www.googleapis.com",
    "https://www.gstatic.com"
  ],
  'img-src': [
    "'self'",
    "data:",
    "https://*.google-analytics.com",
    "https://*.google.com",
    "https://*.gstatic.com",
    "https://*.googleapis.com"
  ],
  'connect-src': [
    "'self'",
    "https://*.google-analytics.com",
    "https://*.analytics.google.com",
    "https://*.googletagmanager.com",
    "https://*.firebaseio.com",
    "https://*.googleapis.com"
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    "https://fonts.googleapis.com"
  ],
  'font-src': [
    "'self'",
    "data:",
    "https://fonts.gstatic.com"
  ],
  'frame-src': [
    "'self'",
    "https://www.googletagmanager.com"
  ]
}

export default defineConfig({
  base: '/',
  plugins: [vue()],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    fs: {
      strict: true
    },
    hmr: true,
    port: 3000,
    open: true,
    cors: true,
    headers: {
      'Content-Security-Policy': Object.entries(cspDirectives)
        .map(([key, values]) => `${key} ${values.join(' ')}`)
        .join('; ')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          'vue': ['vue', 'vue-router', 'pinia'],
          'firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore']
        },
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[ext]/[name]-[hash][ext]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (ext === 'css') {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[ext]/[name]-[hash][ext]';
        }
      }
    },
    sourcemap: false,
    minify: 'terser',
    cssCodeSplit: true,
    cssTarget: 'esnext',
    cssMinify: true
  }
})
