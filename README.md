# brainz21

Integrated project of the lecture Web2.0 at the University of Zurich.
This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.6.1.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

This [link](http://www.mkyong.com/mongodb/how-to-install-mongodb-on-mac-os-x/) may help you setting up MongoDB in your OS X environment.
[Here](https://docs.mongodb.org/v3.0/tutorial/install-mongodb-on-windows/) you may find help setting it up on Windows.

###  Configure Webstorm

1. If you are using Webstorm, you have to make sure that the Node.js Core library is enabled.
In order to enable it, go to *Preferences > Languages and Frameworks > Node.js and NPM* and click "Enable" under 'Code Assistance'.

2. Since the application is written in ES6, you have to set it as the JavaScript language version of the project.
In order to do this, go to *Preferences > Languages and Frameworks > JavaScript* and select 'ECMAScript 6' in the dropdown.

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
