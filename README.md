# Brunch + React + Babel/ES6

This is a modern JS skeleton with React for [Brunch](http://brunch.io).


Note: This project was modified to include React router and PostCSS.

## Installation

Clone this repo manually or use `git clone https://github.com/gotwski/with-react.git`

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` or use `nenv` (a version manager for Node)
    * [Brunch](http://brunch.io): `npm install -g brunch`


* Inside your project folder:
    * Brunch plugins and app dependencies: `npm install`


* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production


* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
