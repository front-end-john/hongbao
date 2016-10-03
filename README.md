This repo is a collection of simple hongbao page of Webpack.

## How to use

Fisrst, insall [Webpack](https://www.npmjs.com/package/webpack) and [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) globally.

```bash
$ npm i -g webpack webpack-dev-server
```
Then, clone the repo and install the dependencies.

```bash
$ git clone git@github.com:ruanyf/webpack-demos.git
$ cd webpack-demos
$ npm install
```
Now, play with the source files under the repo's demo* directories.

```bash
$ cd app
$ webpack-dev-server
```

Visit http://127.0.0.1:8080 with your browser.

## Foreword: What is Webpack

Webpack is a front-end build systems like Grunt and Gulp.

It can be used as a module bundler similar to Browserify, and do [much more](http://webpack.github.io/docs/what-is-webpack.html).

```bash
$ browserify index.js > bundle.js
# be equivalent to
$ webpack index.js bundle.js
```
Its configuration file is `webpack.config.js`.

```javascript
// webpack.config.js
module.exports = {
  entry: {
        bundle: './index.js',
        vendor: ['jquery'],
        hongbao: './js/hongbao.js'
    },
    output: {
        publicPath: '/',  //html引用路径，在这里是本地地址。
        /*filename: './bundle.js'*/ //打包后的名字
        filename: '[name].js'
    }
};
```

After having `webpack.config.js`, you can invoke Webpack without any arguments.

```bash
$ webpack
```

Some command-line options you should know.

- `webpack` – for building once for development
- `webpack -p` – for building once for production (minification)
- `webpack --watch` – for continuous incremental build
- `webpack -d` – to include source maps
- `webpack --colors` – for making things pretty

To produce a production ready application, you could write `scripts` field in your package.json file as following.

```javascript
// package.json
{
  // ...
  "scripts": {
    "dev": "webpack-dev-server --devtool eval --progress --colors",
    "deploy": "NODE_ENV=production webpack -p"
  },
  // ...
}