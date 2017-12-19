<template>
    <div class="slefInfoLeft">
      <div class="slefInfoLeft-top">
        <p class="title">我的资料</p>
        <p class="accountBox"><img class="account" :src="imgUrl" alt=""></p>
        <p class="memberId">会员ID：<span v-text="memberId"></span></p>
        <p class="phoneBind">绑定手机号：<span v-text="phoneBind"></span></p>
      </div>
      <div class="slefInfoLeft-btm">
        <p class="title">账户余额</p>
        <ul>
          <li>SK币: <span v-text=SK></span></li>
          <li>TK币: <span v-text=TK></span></li>
          <li>静态收益: <span v-text=staticIncome></span></li>
          <li>动态收益:  <span v-text=dynamicIncome></span></li>
          <li>跨港宝: <span v-text=kgb></span>个</li>
        </ul>
        <div style="text-align: center;">
          <el-button style="margin-right: 25px;" @click="goRecharge()" type="success">充值</el-button>&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button style="margin-left: 25px;" @click="goWithdrawals()" type="warning">提现</el-button>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513070216401&di=ffc4ca061d7eec2cb8498532371f4684&imgtype=0&src=http%3A%2F%2Fwayqq.cn%2Farticle%2FUploadPic%2F2010-4%2F201042522501448277.gif',
        SK:1000,
        TK:1000,
        staticIncome:1000,
        dynamicIncome:1000,
        kgb:1000,
        memberId:'sadasda',
        phoneBind:18244979393
      }
    },
    methods: {
      goRecharge(){
        this.$router.push({path:'/recharge'})
      },
      goWithdrawals(){
        this.$router.push({path:'/withdrawals'})
      }
    }
  }
</script>
<style lang=scss  type=text/scss>
  .slefInfoLeft {
    width:342px;
    .slefInfoLeft-top {
      width: 342px;
      height: 360px;
      border-radius: 4px;
      background-color: #282f35;
      box-shadow: 3px 3px 5px 5px #323d4d;
      .title {
        font-weight: 700;
        font-size: 14px;
        height: 65px;
        color: white;
        background-color: #21252a;
        line-height:65px;
        padding-left:35px;
      }
      p{
        color: #00d2ff;
      }
      .accountBox {
        text-align: center;
        margin-top:35px;
        margin-bottom:30px;
        .account {
          width: 120px;
          height: 120px;
          border: 3px solid #ccc;
          border-radius: 50%;
        }
      }
      .memberId,.phoneBind {
        padding: 10px 0 10px 10px;
        text-align: center;
      }
    }
    .slefInfoLeft-btm {
      width: 342px;
      height:425px;
      border-radius: 4px;
      background-color: #282f35;
      box-shadow: 3px 3px 5px 5px #323d4d;
      margin-top:40px;
      .title {
        font-weight: 700;
        font-size: 14px;
        color: white;
        height:65px;
        line-height: 65px;
        padding-left:35px;
        background-color: #21252a;
      }
      ul {
        padding-top: 40px;
        li {
          height:45px;
          margin-left: 35px;
          color: #00d2ff;
        }
      }
    }
  }
</style>
