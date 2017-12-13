<template>
  <div>
    <Mheader></Mheader>
    <personalInformation class="personalInformation"></personalInformation>
    <router-view v-loading="loading" style="position: absolute;top:110px;left: 385px;" :style="'width:' + bodyWidth + '%'"></router-view>
  </div>
</template>
<script>
  import Mheader from "components/common/header"
  import personalInformation from "components/common/personalInformation"
  export default {
    data () {
        return {
          bodyWidth: 0,
          loading:true
        }
    },
    created() {
      this.loadingFalse()
    },
    mounted() {
      this.initWidth()
    },
    methods: {
      initWidth() {
        let bodyWidth = document.documentElement.clientWidth
        this.bodyWidth = (bodyWidth - 400) / bodyWidth * 100
      },
      loadingFalse() {
        setTimeout( () =>{
          this.loading=false;
        }, 500)
      },
      changeRoute(){
        this.loading=true
        setTimeout( () =>{
          this.loading=false;
        }, 500)
      }
    },
    watch:{
      "$route":'changeRoute'
    },
    components: {
      Mheader,
      personalInformation
    }
  }
</script>
<style lang="scss" type=text/scss scope>

</style>
