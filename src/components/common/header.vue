<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" router mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3>尊敬的会员xxx,欢迎加入xxx</h3>
        <el-menu-item index="home">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">个人资料</template>
          <el-menu-item index="informationDetails">资料详情</el-menu-item>
        </el-submenu>
        <!--<el-menu-item index="3"><a href="" target="_blank">订单管理</a></el-menu-item>-->
        <el-submenu index="3">
          <template slot="title">我的推荐</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">推荐拓扑图</template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">TK币交易</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">财务明细</template>
          <el-menu-item index="6-1">选项1</el-menu-item>
          <el-menu-item index="6-2">选项2</el-menu-item>
          <el-menu-item index="6-3">选项3</el-menu-item>
        </el-submenu>
        <el-button type="danger">退出</el-button>
      </el-menu>
    </el-header>
    <el-main style="position: relative;top:56px;left: 290px;" :style="'width:' + bodyWidth + '%'">
      <router-view  v-loading="loading"></router-view>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: 'home',
        bodyWidth: 0,
        loading: true
      };
    },
    created() {
      this.loadingFalse()
    },
    mounted () {
      this.initWidth()
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      initWidth() {
        let bodyWidth =document.documentElement.clientWidth
        this.bodyWidth=(bodyWidth-300)/bodyWidth*100
      },
      loadingFalse () {
        let _this = this
        setTimeout(function () {
          _this.loading = false
        },1500)
      }
    }
  }
</script>
<style lang="scss" type=text/scss>
  .el-header {
    padding: 0;
    h3 {
      float: left;
      width: 50%;
      font-size:18px;
      color: #fff;
      height: 60px;
      line-height: 60px;
      padding-left:40px;
    }
    .el-button {
      margin-top: 10px;
      margin-left:50px;
    }
  }
</style>
