## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

DESCRIPTION:

This is a sample electronics store where items and item categories can be dynamically added to the page using the vuex store feature. It also makes use of the vue-router for simple navigation by using dynamic routing. 

There are currenty 5 pages and a counter in the navigation bar that tracks how many times each page was visited. The count can be reset by pressing the "RESET COUNT" button in the top left which will also return you to the home page. 

In this sample site there are items and categories for those items. Either can be added by simply adding a new object to the state (see store index.js). The objects are then put through a for each loop and printed onto the page.
