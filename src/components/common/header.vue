<template>
  <el-container>
    <el-header>
      <el-menu :default-active="this.$route.path" class="el-menu-demo" router mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3>尊敬的会员xxx,欢迎加入跨港宝</h3>
        <el-menu-item index="/homepage">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">个人资料</template>
          <el-menu-item index="/informationDetails">资料详情</el-menu-item>
          <el-menu-item index="/forgetPassword">忘记密码</el-menu-item>
        </el-submenu>
        <!--<el-menu-item index="3"><a href="" target="_blank">订单管理</a></el-menu-item>-->
        <el-menu-item index="/recommend">我的推荐</el-menu-item>
        <el-menu-item index="3">推荐拓扑图</el-menu-item>
        <el-menu-item index="/TKTransaction">TK币交易</el-menu-item>
        <el-submenu index="6">
          <template slot="title">财务明细</template>
          <el-menu-item index="rechargeDetial">充值明细</el-menu-item>
          <el-menu-item index="withdrawalsDetial">提现明细</el-menu-item>
          <el-menu-item index="profitTotal">收益总明细</el-menu-item>
          <el-menu-item index="staticIncomeDetial">静态收益明细</el-menu-item>
          <el-menu-item index="dynamicIncomeDetial">动态收益明细</el-menu-item>
          <el-menu-item index="CurrencyREDetial">币种收支明细</el-menu-item>
        </el-submenu>
        <el-button type="danger" @click="logout">退出</el-button>
      </el-menu>
    </el-header>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        bodyWidth: 0,
        loading: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
//        console.log(key, keyPath);
        console.log(this.$route.path)
      },
      logout(){
        this.$confirm('确定退出登录？','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          //确定按钮
          this.$message.success('点击了确定按钮')
        }).catch(()=>{
          //取消按钮
          this.$message.error('点击了取消按钮')
        })
      }
    }
  }
</script>
<style lang="scss" type=text/scss>
  .el-header {
    height:70px;
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
  .el-submenu {
    margin: 0;
  }
  .el-menu--horizontal .el-menu-item {
    height:70px;
    line-height: 70px;
  }
  .el-submenu {
    height: 70px;
    line-height: 70px;
  }
  .el-menu--horizontal .el-submenu .el-submenu__title {
    height: 70px;
    line-height: 70px;
  }
</style>
