module.exports = {
  plugins: [
    // eslint-disable-next-line global-require
    require('postcss-import'),
    // eslint-disable-next-line global-require
    require('tailwindcss'),
    // eslint-disable-next-line global-require
    require('postcss-nested'),
    // eslint-disable-next-line global-require
    require('autoprefixer'),
  ],
}
