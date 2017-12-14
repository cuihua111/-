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
        <span v-text="userId"></span>
      </el-form-item>
      <el-form-item label="绑定手机号码">
       <span v-text=phoneBind></span>
        <el-button style="float: right;" type="primary">点击获取验证码</el-button>
      </el-form-item>
      <el-form-item label="验证码" prop="yzCode">
        <el-input type="password" v-model="ruleForm2.yzCode" auto-complete="off"></el-input>
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
          yzCode:''
        },
        rules2: {
          loginPass: [
            {validator: validateLoginPass, trigger: 'blur'}
          ],
          checkLoginPass: [
            {validator: validateLoginPass2, trigger: 'blur'}
          ],
          yzCode:[
            {validator: validateYzCode, trigger: 'blur'}
          ]
        },
        userId:1312313,
        phoneBind:''
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
//          if (valid) {
//            alert('submit!');
//          } else {
//            console.log('error submit!!');
//            return false;
//          }
          this.$router.push({path: '/home'})
        });
      }
    }
  }
</script>
<style lang="scss" type=text/scss  scope>
  .login {
    width: 500px;
    border: 1px solid #d9d9d9;
    position: absolute;
    top:100px;
    left:50%;
    transform: translateX(-50%);
    padding-bottom:50px;
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
        top:0px;
        a {
          font-size: 14px;
          color:#000;
        }
      }
    }
    .ruleForm {
      width:350px;
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
