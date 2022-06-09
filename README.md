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

This is a sample electronics store site where items and item categories can be dynamically added to the page using the vuex store feature. It also makes use of the vue-router for simple navigation by using dynamic routing. 

VUEX: 

There are multiple object arrays stored in the state section of vuex and are used throughout the site. The first one includes the page array that includes the name home, items, and then other and has a counter attached to each. This count can be reset using the "RESET COUNT" button located in the top left. There are also 4 other object arrays the store information for item categories and the items within those categories. There are two mutation methods that allow for a page count to be incremented (based on the passed name value) and the page counter to be reset (after reset button is pushed).

Vue-Router:

Vue Router allows for the easy implementation of routing between pages. The first two routes are "Home" (or "/") which is the main page and "Item" (or "/Items) which leads to the item category selection page. Items also has three child pages which can be accessed through the category selection and do not take away the item page content upon selection since it is the parent page. The links that lead to the child pages are dynamically created using a forEach loop based on the number of objects that are in the store array it is retrieving from.

There are currently 5 pages and a counter in the navigation bar that tracks how many times each page was visited. The count can be reset by pressing the "RESET COUNT" button in the top left which will also return you to the home page. 

In this sample site there are items and categories for those items. Either can be added by simply adding a new object to the state (see store index.js). The objects are then put through a for each loop and printed onto the page.
