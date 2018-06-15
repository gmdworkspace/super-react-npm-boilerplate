# super-react-npm-boilerplate

[![Build Status](https://travis-ci.org/gmdworkspace/super-react-npm-boilerplate.svg?branch=master)](https://travis-ci.org/gmdworkspace/super-react-npm-boilerplate)
[![npm version](https://badge.fury.io/js/super-react-npm-boilerplate.svg)](https://badge.fury.io/js/super-react-npm-boilerplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**super-react-npm-boilerplate gives you an express way to start building your React packages and publishing it to the registry.**

# Features

* React v16
* Lint enabled - eslint
* Testing - mocha, chai, enzyme
* Code coverage - nyc
* Dev server for local development (webpack-dev-server)
* Production/Publish ready
* Generator support to create new components

# Usage
* Clone this repository 
``` https://github.com/gmdworkspace/super-react-npm-boilerplate.git ```

* Install the dependencies 
``` npm install ```

* Run setup command
``` npm run setup ```

* Enter your project details and you are all set!

# Run App
``` npm run start:dev ```
Dev server is started, Launch your browser to http://localhost:9000 to view your changes

# Lint
``` npm run lint ```
To run lint test.

``` npm run lint:fix ```
Fix the lint errors automatically which are fixable.

# Testing
``` npm test ```
This will run lint, unit tests, and builds JS

# Build

``` npm run build:production ```

This will minify JS make and make your component production ready.

# Generators

``` npm run component:create HelloWorld ```

This creates new react component and respective tests for the component.

To remove a component which was created by mistake, Use

``` npm run component:delete HelloWorld ``` 
