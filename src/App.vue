<template>
  <div id="app">
    <ToDo></ToDo>
  </div>
</template>

<script>
import ToDo from "./components/ToDo";
import store from './store'

export default {
  name: 'App',
  store,
  components: {
    ToDo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  body {
    padding: 0;
    margin: 0;
  }
</style>
