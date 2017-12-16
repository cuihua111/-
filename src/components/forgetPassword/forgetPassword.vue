<template>
  <div class="login">
    <div class="title">
      <span>忘记密码</span>
      <span class="toRegister">
      <router-link to="login">立即登录</router-link>
    </span>
    </div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="ruleForm">
      <el-form-item label="用户ID" prop="userId">
        <el-input type="text" v-model="ruleForm2.userId" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="绑定手机号码">
        <el-input style="width: 130px" type="text" v-model="ruleForm2.phoneBind" auto-complete="off"></el-input>
        <el-button style="float: right;" type="primary" @click="getVeriCode()">获取验证码</el-button>
      </el-form-item>
      <el-form-item label="验证码" prop="yzCode">
        <el-input type="text" v-model="ruleForm2.yzCode" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="loginPass">
        <el-input type="password" v-model="ruleForm2.loginPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkLoginPass">
        <el-input type="password" v-model="ruleForm2.checkLoginPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item class="btnBox">
        <el-button type="primary" @click="submitForm('ruleForm2')">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {apiHost} from 'common/js/host.js'

  export default {
    data() {
      //登录密码
      var validateLoginPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入登录密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkLoginPass');
          }
          callback();
        }
      };
      //验证登录密码
      var validateLoginPass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入登录密码'));
        } else if (value !== this.ruleForm2.loginPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      //验证码
      var validateYzCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          loginPass: '',
          checkLoginPass: '',
          yzCode: '',
          userId: '',
          phoneBind: ''
        },
        rules2: {
          loginPass: [
            {validator: validateLoginPass, trigger: 'blur'}
          ],
          checkLoginPass: [
            {validator: validateLoginPass2, trigger: 'blur'}
          ],
          yzCode: [
            {validator: validateYzCode, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const url = `${apiHost}/user/forget-pwd`
            let params = new URLSearchParams(),_this=this
            params.append('userName','' + _this.ruleForm2.userId + '')
            params.append('phone','' + _this.ruleForm2.phoneBind + '')
            params.append('veriCode','' + _this.ruleForm2.yzCode + '')
            params.append('pwd','' + _this.ruleForm2.loginPass + '')
            this.$http.post(url,params).then((res)=>{
              console.log(res)
              if(res.data.code==0){
                this.$message.success('密码找回成功')
                setTimeout(()=>{
                  this.$router.push({path: '/login'})
                },1000)
              }else {
                this.$message.error('密码找回失败')
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      getVeriCode() {
        const url = `${apiHost}/user/veri-code/${this.ruleForm2.phoneBind}/1`
        if (this.ruleForm2.phoneBind == '') {
          this.$message.error('手机号码为空')
          return
        }
        if (!(/^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/.test(this.registerInfo.phoneBind))) {
          this.$message.error('手机号码有误')
          return
        }
        this.$http.get(url).then((res) => {
          console.log(res)
          if (res.data.code == 0) {
            this.$message.success('验证码为666666')
          }
        })
      }
    }
  }
</script>
<style lang="scss" type=text/scss   scope>
  .login {
    width: 500px;
    border: 1px solid #d9d9d9;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 50px;
    .title {
      height: 50px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      line-height: 50px;
      border-bottom: 1px solid #d9d9d9;
      position: relative;
      .toRegister {
        position: absolute;
        right: 20px;
        top: 0px;
        a {
          font-size: 14px;
          color: #000;
        }
      }
    }
    .ruleForm {
      width: 350px;
      margin: 40px auto 0 auto;
      .btnBox {
        .el-form-item__content {
          text-align: center;
          margin-left: 0 !important;
        }
      }
    }
  }

</style>
