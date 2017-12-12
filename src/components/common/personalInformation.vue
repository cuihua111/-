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
          <li style="margin: 50px 0 0 35px;">
            <el-button @click="goRecharge()" type="success">充值</el-button>&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button @click="goWithdrawals()" type="warning">提现</el-button>
          </li>
        </ul>
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
    width:250px;
    .slefInfoLeft-top {
      width: 250px;
      height: 300px;
      border: 2px solid #ccc;
      border-radius: 4px;
      background-color: #e7e7e7;
      .title {
        font-weight: 700;
        font-size: 14px;
        margin: 10px 0 10px 10px;
      }
      .accountBox {
        text-align: center;
        margin-bottom:30px;
        .account {
          width: 80px;
          height: 80px;
          border: 3px solid #ccc;
          border-radius: 50%;
        }
      }
      .memberId {
        padding: 10px 0 20px 10px;
      }
      .phoneBind {
        margin:10px 0 10px 10px;
      }
    }
    .slefInfoLeft-btm {
      width: 250px;
      border: 2px solid #ccc;
      border-radius: 4px;
      background-color: #e7e7e7;
      margin-top:40px;
      padding-bottom:100px;
      .title {
        font-weight: 700;
        font-size: 14px;
        margin: 10px 0 10px 10px;
      }
      ul {
        li {
          margin: 15px 0 15px 10px;
        }
      }
    }
  }
</style>
