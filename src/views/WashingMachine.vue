<template>
  <div class="WashingMachines">
  <h1>Washing Machines</h1>
  <ul v-for="WashingMachine in WMGet" v-bind:key="WashingMachine">
      <span>{{WashingMachine.name}} ${{WashingMachine.price}}</span>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    WMGet() {
      return this.$store.state.WashingMachines
    }
  }
}
</script>

<style>
.WashingMachines {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.WashingMachines h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 10%;
}

.WashingMachines ul {
  align-items: center;
  display: flex;
  height: 100px;
}
.WashingMachines ul span {
  display: block;
}
</style>