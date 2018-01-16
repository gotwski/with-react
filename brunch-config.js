// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest', 'react']},
  postcss: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    processors: [
      require('autoprefixer')(['last 10 versions']),
    ]
  }
};
