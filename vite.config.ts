import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
    // Allows the dev server to be reached through proxied/sandboxed preview
    // domains (e.g. *.vercel.run, *.vercel.app preview iframes) without the
    // "Blocked request. This host is not allowed" error. This only affects
    // `vite dev` / `vite preview`; production builds on Vercel are served as
    // static files and are not affected by this setting at all.
    allowedHosts: true,
  },
  preview: {
    host: true,
    allowedHosts: true,
  },
})
