<template>
  <div>
    <el-breadcrumb separator="-">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>提现</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="formBox">
      <p>会员ID: <span v-text="memberId"></span></p>
      <p>跨港宝: <span v-text="kgb"></span></p>
      <h3>提现信息</h3>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="ruleForm">
        <el-form-item label="提现银行" prop="bankName">
          <el-input label-width="400px" type="text" placeholder="例:中国工商银行海岸城支行" v-model="ruleForm2.bankName"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="提现银行卡号" prop="bankCardID">
          <el-input label-width="400px" type="text" v-model="ruleForm2.bankCardID" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="提现人姓名" prop="withdrawalsName">
          <el-input label-width="400px" type="text" v-model="ruleForm2.withdrawalsName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="提现跨港宝个数" prop="withdrawalsKgb">
          <el-input label-width="400px" type="text" v-model="ruleForm2.withdrawalsKgb" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="提现金额:" prop="withdrawalsMoney">
          <span v-text=ruleForm2.withdrawalsMoney></span>
        </el-form-item>
        <el-form-item label="实际到账金额:" prop="arrivalMoney">
          <span v-text=ruleForm2.arrivalMoney></span>
          <span style="margin-left: 30px;">其中手续费扣除{{this.ruleForm2.serviceCharge}}元</span>
        </el-form-item>
        <el-form-item label="商城积分:" prop="shoppingPoint">
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
  </div>
</template>
<script>
  import {apiHost} from 'common/js/host.js'

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
          bankName: '',
          bankCardID: '',
          withdrawalsName: '',
          withdrawalsKgb: 0,
          withdrawalsMoney: 0,
          arrivalMoney: 0,
          shoppingPoint: 0,
          gameCoin: 0,
          serviceCharge: 0,
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        },
        radio: 1,
        memberId: 'sadasda',
        kgb: 1000
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const url = `${apiHost}/user/withdrawal`
            let params = new URLSearchParams()
            //提现规则，假设一个跨港宝为100元，提现2个跨港宝，提现金额为2*100元，到账金额70%，商城积分20%，游戏币10%,  到账金额为200*70%*提现手续费
            params.append('bankName', '' + this.ruleForm2.bankName + '')
            params.append('bankCard', '' + this.ruleForm2.bankCardID + '')
            params.append('name', '' + this.ruleForm2.withdrawalsName + '')
            params.append('kgb', '' + this.ruleForm2.withdrawalsKgb + '')
            this.$http.post(url, params, {headers: {'token': sessionStorage.getItem('token')}}).then((res) => {
              console.log(res)
              if (res.data.code == 0) {
                this.$message.success('提现成功')
              } else {
                this.$message.error(res.data.msg)
              }
            })
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
<style lang=scss    type=text/scss    scoped>
  .el-breadcrumb {
    border-bottom: 1px solid #d5d5d5;
    font-size: 14px;
    padding-bottom: 8px;
  }

  .formBox {
    padding-top: 1px;
    background-color: #282f35;
    box-shadow: 3px 3px 5px 5px #323d4d;
    width: 1150px;
    height: 740px;
    .ruleForm {
      width: 500px;
      margin: 50px auto;
      .el-form-item el-form-item--feedback {
        .el-form-item__content {
          width: 390px;
        }
      }
    }

    h3 {
      font-size: 16px;
      color: white;
      margin: 40px 0 20px 0;
      text-align: center;
    }

    p {
      font-size: 16px;
      margin: 20px 0 20px 35px;
      overflow: hidden;
      color: #00d2ff;
    }
  }

</style>
