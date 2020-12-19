const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isPod = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
  entry: './js/main.js',
  output: {
      filename: `./js/${filename('js')}`,
      path:path.resolve(__dirname, 'app'),
  }
};