exports.name = 'built-in:shared-command-options'

exports.cli = ({ command, isProd }) => {
  const cmd = require('../../utils/easyCmdOption')(command)
  cmd('--src-dir', 'Source directory', 'src')
  cmd('-d, --out-dir <dir>', 'Output directory', 'dist')
  cmd('--public-url <url>', 'Set the public URL to serve on', '/')
  cmd('--public-folder <folder>', 'Use a public folder', 'public')
  cmd('--constants', 'Global constants')
  cmd('--evergreen', 'Only targeting evergreen browsers', false)

  if (isProd) {
    cmd('--no-minimize', 'Disable minimization')
    cmd('--no-source-map', 'Disable source map')
  } else {
    cmd('--minimize', 'Minimize output')
    cmd('--source-map', 'Enable source map')
  }
}
