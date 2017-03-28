<template>
  <div id="app">
    <loading-with-out-vuex></loading-with-out-vuex>
    <loading-with-vuex></loading-with-vuex>
  </div>
</template>

<script>
  import loadingWithOutVuex from './components/loadingWithOutVuex'
  import loadingWithVuex from './components/loadingWithVuex'
  export default {
    name: 'app',
    components: {
      loadingWithOutVuex,
      loadingWithVuex
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
