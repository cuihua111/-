<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>充值</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="ruleForm">
      <h3>收款信息</h3>
      <el-form-item label="支付方式">
        <el-radio-group v-model="radio" @change="setRechargeType(radio)">
          <el-radio label="银行卡"></el-radio>
          <el-radio label="支付宝"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="this.radio=='银行卡'" label="银行卡号" prop="pass">
        <el-input label-width="400px" type="text" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item v-if="this.radio=='支付宝'" label="支付宝账号" prop="pass">
        <el-input label-width="400px" type="text" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <h3>汇款信息</h3>
      <el-form-item label="汇款银行" prop="pass">
        <el-input label-width="400px" type="text" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="汇款人" prop="checkPass">
        <el-input label-width="400px"  type="text" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="汇款日期" prop="date">
        <el-input label-width="400px"  type="text" v-model="ruleForm2.date" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="汇款金额" prop="money">
        <el-input label-width="400px"  v-model.number="ruleForm2.money"></el-input>
      </el-form-item>
      <el-form-item prop="money">
        <span>充值成功后，直接显示在SK币中</span>
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
      var checkMoney = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入汇款金额'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入正确汇款金额'));
          }
        }, 500);
      };
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
      var dateChoice = (rule, value, callback)=> {
        if (value === '') {
          callback(new Error('请输入汇款日期'));
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          money: '',
          date:''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          money: [
            {validator: checkMoney, trigger: 'blur'}
          ],
          date: [
            {validator: dateChoice, trigger: 'blur'}
          ]
        },
        radio:"",
        rechargeType:0
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
      },
      setRechargeType(value){
        if(value=='银行卡'){
          this.rechargeType=1
        }else{
          this.rechargeType=2
        }
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
    margin: 20px 0;
  }
  width:460px;
}
</style>
