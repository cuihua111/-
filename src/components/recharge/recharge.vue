<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>充值</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="ruleForm">
      <h3>收款信息</h3>
      <el-form-item label="收款账户">
        <el-radio-group v-model="radio">
            <el-radio @change="setRechargeType(item.id,item.type,item.cardNum)" v-for="item in rechargeMode" :key="item.id" :label="item.bankName+item.cardNum"></el-radio>
        </el-radio-group>
      </el-form-item>
      <h3>汇款信息</h3>
      <el-form-item label="汇款银行" prop="remittanceBank">
        <el-input label-width="400px" type="text" placeholder="中国工商银行海岸城支行" v-model="ruleForm2.remittanceBank" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="汇款人" prop="remittancePerson">
        <el-input label-width="400px" type="text" placeholder="张三" v-model="ruleForm2.remittancePerson" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="汇款日期" prop="date">
        <!--<el-input label-width="400px" type="text" v-model="ruleForm2.date" auto-complete="off"></el-input>-->
        <el-date-picker
          v-model="ruleForm2.date"
          type="datetime"
          placeholder="选择日期时间"
          @change="changeTime"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="汇款金额" prop="money">
        <el-input label-width="400px" v-model.number="ruleForm2.money"></el-input>
      </el-form-item>
      <el-form-item>
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
  import {apiHost} from 'common/js/host.js'

  export default {
    data() {
      let _this=this
      var checkMoney = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入汇款金额'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入正确汇款金额'));
          }else{
            callback()
          }
        }, 500);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入汇款银行'));
        }else{
          callback()
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入汇款人'));
        }else{
          callback()
        }
      };
      var dateChoice = (rule, value, callback) => {
        if (_this.ruleForm2.date === 'Invalid date') {
          callback(new Error('请输入汇款日期'));
        }else{
          callback()
        }
      };
      return {
        ruleForm2: {
          remittanceBank: '',
          remittancePerson: '',
          money: '',
          date: '',
          rechargeType: 1,
          bankId:'',
          cardNum:''
        },
        rules2: {
          remittanceBank: [
            {validator: validatePass, trigger: 'blur'}
          ],
          remittancePerson: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          money: [
            {validator: checkMoney, trigger: 'blur'}
          ],
          date: [
            {validator: dateChoice, trigger: 'blur'}
          ]
        },
        rechargeMode: [],
        radio: "",
      };
    },
    created() {
      this.getCompanyAccount()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const url=`${apiHost}/user/rechange`
            let params =new URLSearchParams()
            params.append('type',''+this.ruleForm2.rechargeType+'')
            params.append('cashBank',''+this.ruleForm2.cardNum+'')
            params.append('cashId',''+this.ruleForm2.bankId+'')
            params.append('remittanceBank',''+this.ruleForm2.remittanceBank+'')
            params.append('remittanceUser',''+this.ruleForm2.remittancePerson+'')
            params.append('remittanceTime',''+this.ruleForm2.date+'')
            params.append('remittanceMoney',''+this.ruleForm2.money+'')
            this.$http.post(url,params).then((res)=>{
              console.log(res)
              if(res.data.code==0){
                this.$message.success('充值成功')
              }else{
                this.$message.error('充值失败')
              }
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      setRechargeType(setId,setType,cardNum) {
        this.ruleForm2.bankId=setId
        this.ruleForm2.rechargeType=setType
        this.ruleForm2.cardNum=cardNum
//        console.log(setId,setType,cardNum)
      },
      getCompanyAccount() {
        const url = `${apiHost}/user/paltform-account-ifno`
        this.$http.get(url).then((res) => {
          console.log(res)
          this.rechargeMode = res.data.data
          this.radio=res.data.data[0].bankName+res.data.data[0].cardNum
          this.ruleForm2.bankId=res.data.data[0].id
          this.ruleForm2.cardNum=res.data.data[0].cardNum
        })
      },
      changeTime(val){
        let moment = require('moment');
        let timeEnd=moment(val).format('YYYY-MM-DD HH:mm:ss')
        this.ruleForm2.date=timeEnd
        console.log(timeEnd)
      }
    }
  }
</script>
<style lang=scss    type=text/scss    scope>
  .el-breadcrumb {
    border-bottom: 1px solid #d5d5d5;
    font-size: 14px;
    padding-bottom: 8px;
  }

  .ruleForm {
    h3 {
      font-size: 16px;
      font-weight: 700;
      margin: 20px 0;
    }
    width: 460px;
  }
</style>
