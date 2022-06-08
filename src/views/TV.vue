<template>
  <div class="TVs">
  <h1>TVs</h1>
  <ul v-for="TV in TVGet" v-bind:key="TV">
      <span>{{TV.name}} ${{TV.price}}</span>
  </ul>
</div>
</template>
<script>
export default {
  computed: {
    TVGet() {
      return this.$store.state.TVs
    }
  }

}
</script>

<style>
.TVs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.TVs h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 10%;
}

.TVs ul {
  align-items: center;
  display: flex;
  height: 100px;
}
.TVs ul span {
  display: block;
}
</style>