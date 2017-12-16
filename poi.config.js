module.exports = {
  entry: './src/app.tsx',
  webpack(config) {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      options: {}
    })
    return config;
  }
}