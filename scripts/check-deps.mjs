import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

function getRollupOptionalPackage() {
  const platform = process.platform
  const arch = process.arch

  if (platform === 'darwin' && arch === 'arm64') return '@rollup/rollup-darwin-arm64'
  if (platform === 'darwin' && arch === 'x64') return '@rollup/rollup-darwin-x64'
  if (platform === 'linux' && arch === 'arm64') return '@rollup/rollup-linux-arm64-gnu'
  if (platform === 'linux' && arch === 'x64') return '@rollup/rollup-linux-x64-gnu'
  if (platform === 'win32' && arch === 'x64') return '@rollup/rollup-win32-x64-msvc'
  if (platform === 'win32' && arch === 'arm64') return '@rollup/rollup-win32-arm64-msvc'

  return null
}

function checkModule(name) {
  try {
    require.resolve(name)
    return true
  } catch {
    return false
  }
}

const targetPackage = getRollupOptionalPackage()
if (!targetPackage) process.exit(0)

if (!checkModule(targetPackage)) {
  console.error(`[deps] Missing optional Rollup package: ${targetPackage}`)
  console.error('[deps] Please run: npm install')
  console.error('[deps] If issue persists, remove node_modules and reinstall dependencies.')
  process.exit(1)
}
