import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ddu2025: 'ddu2025.html',
        next_chapter: 'next-chapter.html',
        secret_vault: 'secret-vault.html',
        ddu2027: '2027.html',
      },
    },
  },
})
