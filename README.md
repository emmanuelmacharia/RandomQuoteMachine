## Random Quote Machine:
A handful of helpful and inspirational quotes from some of the world's greatest minds over millenia in one place. This project was created from a [FreeCodeCamp](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine/) challenge meant to check the mastery of front end libraries such as bootstrap, jQuery, React,React-Redux and Sass.

## Stack
- JavaScript
- jQuery
- SCSS
- HTML

In this project, I implement the challenge using jQuery and ajax to make API calls and Sass for styling.

## How to manually test it:
- clone this repository
- ensure that you have an SCSS compiler; if you happen to be using Visual Studio Code as your text editor, try using `Live Sass Compiler` extension and ensure you have `Live Server` also installed. (you can read through the [live sass compiler](https://github.com/ritwickdey/vscode-live-sass-compiler)) documentation to help you get started.
- finally, in your favorite browser, open `index.html`; or if you use `Live Server`, click on `go live` and it'll open in your browser. 

## API

As mentioned, I use an ajax call to this URL [here]("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"):
- ensure you include header and set them to `application/json` for your get request
- the call returns an object that you'll have to Jsonify using `JSON.parse`

## contributor:
built by ~[emmanuel macharia](https://github.com/emmanuelmacharia)~

## License
this project is licenced under the MIT license

## How to contribute:
- fork this repository, and clone it onto your local machine
- edit and/or add features to it
- create a pull request onto the master branch of this repository