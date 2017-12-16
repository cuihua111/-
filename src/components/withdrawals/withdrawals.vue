<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>提现</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="ruleForm">
      <p>会员ID: <span v-text="memberId"></span></p>
      <p>跨港宝: <span v-text="kgb"></span></p>
      <h3>提现信息</h3>
      <el-form-item label="提现银行卡号" prop="bankCardID">
        <el-input label-width="400px" type="text" v-model="ruleForm2.bankCardID" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="提现人姓名" prop="withdrawalsName">
        <el-input label-width="400px"  type="text" v-model="ruleForm2.withdrawalsName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="提现跨港宝个数" prop="withdrawalsKgb">
        <el-input label-width="400px"  type="text" v-model="ruleForm2.withdrawalsKgb" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="提现金额:" prop="withdrawalsMoney">
        <span v-text=ruleForm2.withdrawalsMoney></span>
      </el-form-item>
      <el-form-item label="实际到账金额:" prop="arrivalMoney">
        <span v-text=ruleForm2.arrivalMoney></span>
        <span style="margin-left: 30px;">其中手续费扣除{{this.ruleForm2.serviceCharge}}元</span>
      </el-form-item>
      <el-form-item label="购物积分:" prop="shoppingPoint">
        <span v-text=ruleForm2.shoppingPoint></span>
      </el-form-item>
      <el-form-item label="游戏币:" prop="gameCoin">
        <span v-text=ruleForm2.gameCoin></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入汇款银行'));
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入汇款人'));
        }
      };
      return {
        ruleForm2: {
          bankCardID: '1231231',
          withdrawalsName: '张三',
          withdrawalsMoney: '1000',
          arrivalMoney:'995',
          withdrawalsKgb: '2',
          shoppingPoint:'2',
          gameCoin:'2',
          serviceCharge:'5'
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        },
        radio:1,
        memberId:'sadasda',
        kgb:1000
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang=scss  type=text/scss  scope>
  .el-breadcrumb {
    border-bottom: 1px solid #d5d5d5;
    font-size:14px;
    padding-bottom:8px;
  }
  .ruleForm {
    h3 {
      font-size:16px;
      font-weight:700;
      margin: 40px 0 20px 0 ;
    }
    p {
      font-size:16px;
      margin: 20px 0;
    }
    width:460px;
  }
</style>
