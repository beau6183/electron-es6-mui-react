# electron-mui-es6-react

A complete boilerplate app to demonstrate how to use [ES6], [Material-UI], and [React] with
[Electron] and [Electron-Connect]. It uses [Babel] to automatically transpile ES6 and JSX code,
without depending on any package manager besides `npm`.

Based on https://github.com/b52/electron-es6-react

## How?

The main entry point is `boostrapper.js`, which registers Babel and loads the
real entry point `main.js`. This is necessary to allow `main.js` to make use of
Babel's features.

The renderer entry point `index.html` does basically the same, but loads the
`scripts/main.js` file, which renders the `app/main.jsx` component into the `body`.

## Installation

```bash
git clone https://github.com/beau6183/electron-es6-mui-react.git
cd electron-es6-mui-react
npm install
npm start
```

[ES6]: http://exploringjs.com/
[React]: https://facebook.github.io/react/
[Electron]: http://electron.atom.io/
[Babel]: http://babeljs.io