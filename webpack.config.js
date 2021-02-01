let cmd = process.env.NPM_LIFECYCLE_EVENT.split(':'),
    isBuilding = cmd[0] === 'build',
    type = cmd[1],
    postfix = {
      'var': '.browser',
      'commonjs2': '.common',
      'amd': '.amd',
    };

postfix = postfix[type];

module.exports = {
  // mode: 'development',

  output: {
    filename: `[name]${postfix || ''}.js`,
    library: 'TYPE', 
    libraryTarget: isBuilding && postfix ? type : 'umd',
    globalObject: 'this',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
}