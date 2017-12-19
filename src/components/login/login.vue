<template>
  <div class="login">
    <div class="title">
      <span>登录</span>
      <span class="toRegister">
      <router-link to="register">立即注册</router-link>
    </span>
    </div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="70px" class="ruleForm">
      <el-form-item label="用户ID" prop="userId">
        <el-input type="text" v-model="ruleForm2.userId" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <span style="float: right;">
        <router-link to="forgetPasswordSingle">忘记密码？</router-link>
        </span>
      </el-form-item>
      <el-form-item class="btnBox">
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {apiHost} from 'common/js/host.js'

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.userId !== '') {
            this.$refs.ruleForm2.validateField('userId');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户ID'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          userId: '',
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          userId: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const url = `${apiHost}/user/login`
            let _this = this
            var params = new URLSearchParams()
            let crypto = require('crypto.js')
            params.append('userName', '' + _this.ruleForm2.userId + '')
            params.append('pwd', '' + crypto.md5(_this.ruleForm2.pass) + '')
            this.$http.post(url, params).then((res) => {
              console.log(res)
              if (res.data.code == 0) {
                sessionStorage.setItem('token',res.data.data.token)
                this.$router.push({path: '/homepage'})
              }
              if (res.data.code == 1) {
                this.$message.error(res.data.msg)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss" type=text/scss   scope>
  .login {
    width: 500px;
    height: 400px;
    border: 1px solid #d9d9d9;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
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
      margin: 80px auto 0 auto;
      .btnBox {
        .el-form-item__content {
          text-align: center;
          margin-left: 0 !important;
        }
      }
    }
  }

</style>
