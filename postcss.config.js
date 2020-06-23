const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssMixins = require('postcss-mixins');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const env = process.env.NODE_ENV;

const plugins = [
  postcssImport, // Sass like Import
  tailwindcss('./tailwind.config.js'),
  postcssNested, // Sass like nesting
  postcssMixins, // Sass like mixins
  postcssSimpleVars, // Sass like variables
  autoprefixer
];

if (env !== 'development') {
  plugins.push(cssnano);
}

module.exports = { plugins };
