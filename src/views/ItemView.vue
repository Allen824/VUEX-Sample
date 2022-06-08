<template>
  <div class="items">
    <ul v-for="item in itemGet" v-bind:key="item">
      <router-link :to="'/Items/' + item.type" v-on:click="incrementOther()">
        <span>{{item.type}}</span>
      </router-link>
    </ul>
  </div>
  <router-view/>
</template>

<script>

export default {
  computed: {
    itemGet() {
      return this.$store.state.items
    }
  },
  methods: {
    incrementOther: function() {
      this.$store.commit('incrementCount', 'Other')
    }
  }
}

</script>

<style>

.items {
  display: flex;
  flex-direction: row;
  align-items: center;
  
}

.items ul {
  width: 50%;
  border: 3px solid black;
  padding: 10px;
  text-align: center;
  background-color: rgb(197, 196, 196);
}
.items ul span {
  width: 100%;
  color: black;
}


</style>
