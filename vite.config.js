import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'ai-wave-survivor'
const githubPagesBase = `/${repositoryName}/`

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署使用仓库名作为 base
  base: githubPagesBase,
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist'
  }
})
