# Reddit Client

Small Reddit client that allows the user to visualize `r/pics` subreddit and save images, the application comunicates with a small backend server written in node [here](https://github.com/YofretRios/reddit-api) that uses a mongo db to store any relevant data, both production codes are deployed in heroku.

### Live site

This site is currently deployed using heorku cloud, checkout the live Demo [here](https://reddit-tops.herokuapp.com/).

<p align="center">
    <img src="https://github.com/YofretRios/assets/blob/master/test-recording-2.gif">
</p>

## Features
- Get all current Top Post from `r/pics`
- Global Application Store
- Save pictures into the image gallery
- Mark post as read when clicked to see details
- Dismiss post from the list (will re-appear on reload)
- Dismiss All post from the list (will re-appear on reload)
- Responsive layout

## Installing
Using npm:

```bash
$ npm install
```

Using yarn:

```bash
$ yarn add
```

### Compiles and hot-reloads for development
```bash
$ yarn serve
```

### Compiles and minifies for production
```bash
$ yarn build
```

### Lints and fixes files
```bash
$ yarn lint
```

## Leverage
For this project I've used the following libraries to solve common problems

- [axios](https://github.com/axios/axios) ^0.19.2
- [lodash](https://lodash.com/) ^4.17.15
- [moment](https://momentjs.com/) ^2.27.0
- [numeral](http://numeraljs.com/) ^2.0.6
- [tailwindcss](https://tailwindcss.com/) ^1.4.6
- [vue](https://vuejs.org/) ^2.6.11
- [vue-gallery](https://github.com/RobinCK/vue-gallery) ^2.0.1
- [vue-router](https://router.vuejs.org/) ^3.3.4
- [vue-toasted](https://github.com/shakee93/vue-toasted#readme) ^1.1.28
- [vuex](https://vuex.vuejs.org/) ^3.4.0
