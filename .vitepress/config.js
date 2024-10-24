import { defineConfig } from 'vitepress'
import { imagetools } from 'vite-imagetools'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🧬 HTGAA Asia",
  description: "Class & Lab Reviews for the Asian Timezones",
  base: '/',
  cleanUrls: true,
  vite: { plugins: [ imagetools() ] },  // vite plugins
  outDir: './dist',                     // distribtion folder
  ignoreDeadLinks: true,                // no build error when dead links
  srcExclude: ['**/README.md'],         // exclude files
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    /*
    logo: {
      light: '/images/FLSv2.svg',
      dark: '/images/FLS_dark.svg',
      alt: "FabLab Sapporo"
    },
    */
    nav: [
      { text: 'Global HTGAA Site', link: 'https://htgaa.org' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
