<template>
  <div id="app">
    <Mheader></Mheader>
    <personalInformation class="personalInformation"></personalInformation>
  </div>
</template>

<script>
  import Mheader from "components/common/header"
  import personalInformation from "components/common/personalInformation"
export default {
  name: 'app',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  },
  components: {
    Mheader,
    personalInformation
  }
}
</script>

<style lang="scss" type=text/scss scope>
  .personalInformation {
    margin-left: 30px;
    position: fixed;
    top:135px;
  }
</style>
