<template>
<div class="informationDetails">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>个人资料</el-breadcrumb-item>
    <el-breadcrumb-item>资料详情</el-breadcrumb-item>
  </el-breadcrumb>
  <ul>
    <li>会员ID: <span v-text="memberId"></span></li>
    <li>会员等级: <span v-text="memberLevel"></span></li>
    <li>绑定手机号码: <span v-text="phoneBind"></span></li>
    <li>绑定邮箱: <span v-text='memberEmail'></span></li>
  </ul>
  <h3>交易密码修改</h3>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="ruleForm">
    <el-form-item label="初始密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="修改密码" prop="age">
      <el-input v-model.number="ruleForm2.age"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
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
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        memberId:'sadasda',
        memberLevel:'至尊',
        phoneBind:18244979393,
        memberEmail:'734376XXX@qq.com'
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
<style lang=scss type=text/scss scope>
  .el-breadcrumb {
    border-bottom: 1px solid #d5d5d5;
    font-size:14px;
    padding-bottom:8px;
  }
  .ruleForm {
    width:460px;
  }
  .informationDetails {
    h3 {
      font-size:16px;
      font-weight:700;
      border-bottom: 1px solid #d5d5d5;
      padding-bottom:10px;
      margin:40px 0 20px 0;
    }
  }
  ul {
    li {
      margin:25px 0;
    }
  }
</style>
