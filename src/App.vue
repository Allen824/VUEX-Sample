<template>
  <nav>
    <router-link to="/" v-on:click="incrementPageCount('Home')"><h1>HOME </h1></router-link> 
    <router-link to="/Items" v-on:click="incrementPageCount('Items')"><h1>ITEMS</h1></router-link>
  </nav>  
  <div class="restore">
    <button v-on:click="restorePage(); routeHome()">RESET COUNT</button>
      <h2>PAGE VISIT COUNT:</h2>
      <ul v-for="page in pageCount" v-bind:key="page">
        <span>{{page.name}} {{page.count}}</span> 
      </ul>
  </div>
  <router-view/>
</template>
<script>


export default { 
  computed: {
    pageCount() {
      return this.$store.state.pages
    }
  },
  methods: {
    incrementPageCount: function(pageName) {
      this.$store.commit('incrementCount', pageName)
    },

    restorePage: function() {
      this.$store.commit('zeroCount')
    },

    routeHome() {
        this.$router.push('/')
    }

  },
  name: 'app',
  data() {
    return {
    }
  }

}

</script>

<style>
* {
  font-family: 'Fira Sans', sans-serif;
  margin: 0px;
  padding: 0px;
  color: black;

}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  background-color: rgb(38, 121, 228);
  padding-right: 70%;
  padding-left: 3%;
  height: 50px;
  
}

nav h1 {
  padding: 8px;
}


.restore {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(202, 202, 240);
  padding-right: 70%;
  padding-left: 3%;
  height: 40px;

}

.restore h2 {
  padding-left: 10px;
  padding-top: 5px;
  font-size: small;
}

.restore button {
  background-color: rgb(235, 234, 234);
  color: black;
  width: 110px;
}

.restore button:hover {
  background-color: lightgray;
}

.restore button:active {
  background-color: grey; 
}

</style>
