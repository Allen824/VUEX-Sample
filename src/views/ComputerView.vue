<template>
  <div class="Computers">
  <h1>Computers</h1>
  <ul v-for="Computer in ComputerGet" v-bind:key="Computer">
      <span>{{Computer.name}} ${{Computer.price}}</span>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    ComputerGet() {
      return this.$store.state.Computers
    }
  }
}
</script>

<style>
.Computers {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Computers h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 10%;
}

.Computers ul {
  align-items: center;
  display: flex;
  height: 100px;
}
.Computers ul span {
  display: block;
}
</style>