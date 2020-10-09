const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  generateBuildId: async () => 'current',
  assetPrefix: !debug ? '/sample-frontend-react' : '',
};

