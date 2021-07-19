# Pug and Bootstrap

A simple boilerplate for Pug and Bootstrap.

## Requirements

* [Node.js](https://nodejs.org)
* [npm](https://www.npmjs.com)
* [Gulp](http://gulpjs.com/)
* [Sass](https://sass-lang.com/)
* [Bootstrap](https://getbootstrap.com/)

## Requirements

Make sure you have run the below package globally.
1. `npm i serve -g` or `yarn global add serve` ([serve](https://www.npmjs.com/package/serve))
2. `npm i concurrently -g` or `yarn global add concurrently` ([concurrently](https://www.npmjs.com/package/concurrently))

## Installation

1. `npm install` or `yarn`
2. `npm run serve` or `yarn serve`
3. enjoy.

## Project Struture

```
.
├── assets/                     # The assets directory before compiling
├── bundles/                    # The main directory that will include all of the compiled html
│   ├── pages/                  # All html pages that compiled
├── js/                         # Main folder for JS files
├── css/                        # Main folder for cascade style files
├── node_modules/               # Store third party modules and initializers (e.g.: gulp, pug, etc)
├── templates/                  # Main folder for pug template files
│   ├── pages/                  # All pug pages
│   ├── partials/               # The elements of partial
│   ├── wrapper.pug             # The root wrapper which will be extended within pages/
├── gulpfile.js                 # Setup Gulp tasks
```
