import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },

  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['pdfjs-dist'],
    },
    build: {
      target: 'esnext'
    }
  },
});