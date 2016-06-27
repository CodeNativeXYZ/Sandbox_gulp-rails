assetsPath = 'public/assets';

module.exports = {
  assetsPath: assetsPath,
  javascript: {
    dest: assetsPath + '/javascripts'
  },
  stylesheet: {
    dest: assetsPath + '/stylesheets'
  },
  manifest: {
    dest: assetsPath + '/assets-manifest.json',
    opts: {
      base:  process.cwd() + '/' + assetsPath,
      merge: true
    }
  }
}
