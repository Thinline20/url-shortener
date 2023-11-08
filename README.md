# URL Shortener

Shorten long URLs to short ones.

## Project Setup

### Requirements

Install [node.js]("https://nodejs.org/) (Or install [Bun]("https://bun.sh/) if you want to use Bun, but this project is not tested on Bun)

### Run project

```bash
# clone the project and move to project directory
git clone https://github.com/Thinline20/url-shortener && cd url-shortener

# install dependencies, build project, and run project
# npm
npm install
npm run build
npm run start

# pnpm
pnpm install
pnpm run build
pnpm run start

# yarn
yarn
yarn build
yarn start
```

## Developing

Once you've installed the dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
pnpm run dev
yarn dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
pnpm run dev -- --open
yarn dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.

## Commands

| Command | Action |
| -------------- | -------------------------------------------- |
| npm install | Install dependencies |
| npm run dev | Launch dev server |
| npm run build | Build optimized production site to `./dist/` |
| npx eslint . | Lint source files |
| npx prettier . | Format source files |
