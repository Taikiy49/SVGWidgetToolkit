<div align="center">
  <h1>SVGWidgetToolkit</h1>
  <p><strong>TypeScript and SVG.js widget exercise with a window, heading, and button demo.</strong></p>
  <p>
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-303840?style=flat-square" />
    <img alt="SVG.js" src="https://img.shields.io/badge/SVG.js-303840?style=flat-square" />
    <img alt="Webpack" src="https://img.shields.io/badge/Webpack-303840?style=flat-square" />
  </p>
  <p><a href="#overview">Overview</a> · <a href="#getting-started">Getting started</a> · <a href="#repository-map">Repository map</a></p>
</div>

---

## Overview

A small SVG widget exercise built on the Informatics 134 starter toolkit. It demonstrates a window containing a heading and a button, with widget classes separated from the demo.

## What’s inside

- SVG-based widget primitives.
- Separate button and heading implementations.
- TypeScript compilation through Webpack.

## Getting started

Install Node.js, then:

```sh
npm ci
npm run build
```

Open `dist/index.html` in a browser. Use `npm run watch` to rebuild during editing. The `test` script is the original placeholder and is not a working test suite.

## Repository map

| Location | Purpose |
| --- | --- |
| [`src/index.ts`](./src/index.ts) | Button demonstration |
| [`src/core/ui.ts`](./src/core/ui.ts) | Window and UI foundations |
| [`src/widgets/`](./src/widgets/) | Button, heading, and template widgets |
| [`webpack.config.js`](./webpack.config.js) | Build configuration |

## Project status

Course exercise derived from the `uci-inf-134/erasmas` / SVG widget starter. Original package metadata is preserved; this is not presented as an independently authored UI framework.
