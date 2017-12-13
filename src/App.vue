<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
  }
</script>

<style lang="scss" type=text/scss  scope>
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    .personalInformation {
      margin-left: 30px;
      position: fixed;
      top: 110px;
    }
  }
</style>
