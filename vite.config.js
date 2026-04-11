import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const githubPagesBase = repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署使用仓库名作为 base，其他环境使用根路径
  base: process.env.GITHUB_ACTIONS === 'true' ? githubPagesBase : '/',
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist'
  }
})
