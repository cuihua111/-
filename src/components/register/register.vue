<template>
  <div class="registerBox">
    <div class="title">
      <span>注册</span>
      <span class="toLogin">
        <router-link to="login">已有账号,立即登录</router-link>
      </span>
    </div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="ruleForm">
      <el-form-item label="用户ID" prop="userId">
        <el-input type="text" v-model="ruleForm2.userId" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="绑定手机号码" prop="phoneBind">
        <el-input type="text" v-model="ruleForm2.phoneBind" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="yzCode">
        <el-input style="width: 155px" type="text" v-model="ruleForm2.yzCode" auto-complete="off"></el-input>
        <el-button type="primary">点击获取验证码</el-button>
      </el-form-item>
      <el-form-item label="推荐人ID" prop="recommendId">
        <el-input type="text" v-model="ruleForm2.recommendId" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="loginPass">
        <el-input type="password" v-model="ruleForm2.loginPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkLoginPass">
        <el-input type="password" v-model="ruleForm2.checkLoginPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="交易密码" prop="dealPass">
        <el-input type="password" v-model="ruleForm2.dealPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认交易密码" prop="checkDealPass">
        <el-input type="password" v-model="ruleForm2.checkDealPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      //用户id校验
      var validateUserId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户Id'));
        } else {
          if (this.ruleForm2.userId.length >20) {
            callback(new Error('请输入20位以内的用户ID'));
          }
          callback();
        }
      };
      //手机号
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          if(!(/^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/.test(this.ruleForm2.phoneBind))){
            callback(new Error('手机号码有误'))
          }
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
      //推荐人id校验
      var validateRecommendId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入推荐人Id'));
        } else {
          if (this.ruleForm2.recommendId.length >20) {
            callback(new Error('请输入20位以内的推荐人ID'));
          }
          callback();
        }
      };
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
      //交易密码
      var validateDealPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入交易密码'));
        } else {
          if (this.ruleForm2.dealPass !== '') {
            this.$refs.ruleForm2.validateField('checkDealPass');
          }
          callback();
        }
      };
      //验证交易密码
      var validateDealPass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入交易密码'));
        } else if (value !== this.ruleForm2.dealPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          userId:'',
          yzCode:'',
          phoneBind:'',
          recommendId:'',
          loginPass: '',
          checkLoginPass: '',
          dealPass: '',
          checkDealPass: '',
        },
        rules2: {
          loginPass: [
            {validator: validateLoginPass, trigger: 'blur'}
          ],
          checkLoginPass: [
            {validator: validateLoginPass2, trigger: 'blur'}
          ],
          userId: [
            {validator :validateUserId,trigger:'blur'}
          ],
          yzCode:[
            {validator :validateYzCode,trigger:'blur'}
          ],
          phoneBind:[
            {validator :validatePhone,trigger:'blur'}
          ],
          recommendId:[
            {validator :validateRecommendId,trigger:'blur'}
          ],
          dealPass:[
            {validator :validateDealPass,trigger:'blur'}
          ],
          checkDealPass:[
            {validator :validateDealPass2,trigger:'blur'}
          ]
        }
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
<style lang="scss" type=text/scss  scope>
  .registerBox {
    width: 600px;
    padding-bottom: 50px;
    border: 1px solid #e3e3e3;
    position: absolute;
    top:100px;
    left:50%;
    transform: translateX(-50%);
    .ruleForm {
      width:400px;
      margin: 50px auto 0 auto;
    }
    .title {
      height:50px;
      font-size:16px;
      font-weight:700;
      text-align: center;
      line-height:50px;
      border-bottom: 1px solid #e3e3e3;
      position: relative;
      .toLogin {
        position: absolute;
        right: 20px;
        top:0px;
        a {
          font-size:14px;
          color: #000;
        }
      }
    }
  }

</style>
