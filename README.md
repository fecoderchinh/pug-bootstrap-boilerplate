# Pug and Bootstrap

A simple boilerplate for Pug and Bootstrap.

## Requirements

* [Node.js](https://nodejs.org)
* [npm](https://www.npmjs.com)
* [Gulp](http://gulpjs.com/)
* [Sass](https://sass-lang.com/)
* [Bootstrap](https://getbootstrap.com/)

## Importants

Make sure you have run the below packages globally.
1. `npm install --global gulp-cli` or `yarn global add gulp-cli`
2. `npm i serve -g` or `yarn global add serve` ([serve](https://www.npmjs.com/package/serve))
3. `npm i concurrently -g` or `yarn global add concurrently` ([concurrently](https://www.npmjs.com/package/concurrently))

## Installation

1. `git clone https://github.com/fecoderchinh/pug-bootstrap-boilerplate.git dpb`
2. `npm install` or `yarn`
3. `npm run serve` or `yarn serve`
4. enjoy.

## Docker is now supported.
### To play on live reloading
Step 1: Run `npm i` or `yarn` at your local directory.

Step 2: Run `docker compose up --build`

#### - Then try to change any file to see the affects.

### To play on the final works
Step 1: Run `docker build -t dpb_image .` or `docker compose up --build` then press `Ctrl + C` to stop docker-compose

Step 2: Run `docker run -p 4000:8888 dpb_image`

Step 3: Goto localhost:4000 and check for the final works.

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
├── .dockerignore               # Ignore the specifics in docker container
├── .gitignore                  # Ignore the specifics in github
├── docker-compose.yml          # To run multi-container
├── Dockerfile                  # The task commands to run Docker
├── gulpfile.js                 # Setup Gulp tasks
├── package.json                # The pakages list for this repo
├── serve.json                  # The configuration for serving
```
