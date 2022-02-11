# Giftagram Coding Assignment

## What is being tested

> Build out an example React app that displays a page similar to [this one](https://www.giftagram.com/gift/1006/Mary-MacLeod's-3-Quart-Shortbread-Jar). The API that returns data on this, is [here](https://api.giftagram.com/api/gift/details?ids=1006).

## Getting started

[Yarn](https://yarnpkg.com/) is used as the package manager for this project, but the project can also be built, tested and previewed using just npm. It has been tested with Node 16.13.0.

### Install dependencies

```bash
# if using yarn:
yarn

# if using npm:
npm install
```

### Start the dev web server

[Vite](https://vitejs.dev/) is used as the build tool for this project. It enables fast dev server startup times and hot module reloading out of the box.

```bash
# if using yarn:
yarn vite

# if using npm:
npm run vite
```

### Run unit tests

```bash
# if using yarn:
yarn test:unit

# if using npm:
npm run test:unit
```

### Remove type annotations (convert to JavaScript)

If you would like to see the equivalent JavaScript version of this codebase, you can run the following command. The resulting code is equally human-readable, keeps formatting, comments, original JSX syntax, and file structure. It will be placed in a folder named `transpile` and can be browsed normally with an editor.

```bash
# if using yarn:
yarn transpile

# if using npm:
npm run transpile
```

### Create & preview bundled production build

```bash
# if using yarn:
yarn vite build
yarn vite preview

# if using npm:
npm run vite build
npm run vite preview
```

## Overview of implementation choices

- This project is a rewrite of Giftagram's product page using React with function components and hooks, amongst other libraries and tools. It is written in [TypeScript](https://www.typescriptlang.org/), which allows to write JavaScript with strong type annotations and enhanced editor tooling.

- **Why TypeScript:** in summary, to take advantage of editor autocompletions and catching typos in the editor, rather than eventually seeing them in the browser's dev tools. These two advantages allow to prototype fast and without fear.

- **The JavaScript version of this codebase can be produced the `transpile` package script.** The JavaScript output is nearly similar to the TypeScript version, and is clearly readable.

- No CSS framework is used, and the styling is mostly custom. [Tailwind CSS](https://tailwindcss.com/) is used to write styles using utility classes, enabling rapid protoyping. Some components are based on [Headless UI](https://headlessui.dev/), a collection of unstyled components. [Autoprefixer](https://github.com/postcss/autoprefixer) is automatically applied to all CSS.

- Many components display skeletons while their data is being fetched, using [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton#readme). As [suggested in its documentation](https://github.com/dvtng/react-loading-skeleton#dont-make-dedicated-skeleton-screens), skeletons are integrated directly inside components, instead of opting for separate "skeleton screen" components.

- The image carousel is implemented using [Swiper](https://swiperjs.com/). Compared to the original carousel library (Glide), Swiper allows zooming in and seamless looping.

- Icons are supplied by [Heroicons](https://heroicons.com/).

## Choosing which product page to render

The web app shows the product page for product ID 1006 (_"Mary MacLeod's 3 Quart Shortbread Jar"_) by default. When manually testing the app, you can check the page for different products using the `productId` URL search parameter. For example:

```http
# Assuming web app running at localhost:3000
# Shows "The Right Hand Gal Solid Gold Initial Necklace"
http://localhost:3000/?productId=4487
```

All information is pulled from the live production server API.

## Known issues / todos

- Choosing product sizes and styles is not supported.

- Product description box does not support collapsing.

- Site is built for desktop widths only, currently does not fully rearrange for smaller viewport sizes.

- Clicking on a related product triggers a full browser navigation, instead of single-page-app-like navigation

- Several unit tests are currently missing.

- Linting is not set up yet.
