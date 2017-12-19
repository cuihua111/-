<template>
  <div>
    <div class="registerBox">
      <div class="title">
        <span>注册</span>
        <span class="toLogin">
        <router-link to="login">已有账号,立即登录</router-link>
      </span>
      </div>
      <el-form :model="registerInfo" status-icon :rules="rules2" ref="registerInfo" label-width="100px"
               class="ruleForm">
        <el-form-item label="用户ID" prop="userId">
          <el-input type="text" v-model="registerInfo.userId" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="绑定手机号码" prop="phoneBind">
          <el-input type="text" v-model="registerInfo.phoneBind" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="yzCode">
          <el-input style="width: 155px" type="text" v-model="registerInfo.yzCode" auto-complete="off"></el-input>
          <!--<el-button @click="imgYzcodeInfo.dialogFormVisible=true" type="primary">点击获取验证码</el-button>-->
          <el-button @click="getVeriCode()" type="primary">点击获取验证码</el-button>
        </el-form-item>
        <el-form-item label="推荐人ID" prop="recommendId">
          <el-input type="text" v-model="registerInfo.recommendId" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="loginPass">
          <el-input type="password" v-model="registerInfo.loginPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkLoginPass">
          <el-input type="password" v-model="registerInfo.checkLoginPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="交易密码" prop="dealPass">
          <el-input type="password" v-model="registerInfo.dealPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认交易密码" prop="checkDealPass">
          <el-input type="password" v-model="registerInfo.checkDealPass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerInfo')">注册</el-button>
          <el-button @click="resetForm('registerInfo')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <!--图形验证码-->
      <el-dialog title="图形验证码" :modal-append-to-body="false" :visible.sync="imgYzcodeInfo.dialogFormVisible">
        <el-form :model="imgYzcodeInfo">
          <el-form-item label="图片验证码" :label-width="imgYzcodeInfo.formLabelWidth">
            <img class="yzCode" :src="imgYzcodeInfo.imgYzcodeUrl" alt="">
          </el-form-item>
          <el-form-item label="验证码" :label-width="imgYzcodeInfo.formLabelWidth">
            <el-input v-model="imgYzcodeInfo.inputContent" placeholder="请输入图形验证码"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="imgYzcodeInfo.dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="imgYzcodeInfo.dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import {apiHost} from 'common/js/host.js'

  export default {
    data() {
      //用户id校验
      var validateUserId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户Id'));
        } else {
          if (this.registerInfo.userId.length > 20) {
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
          if (!(/^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/.test(this.registerInfo.phoneBind))) {
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
          if (this.registerInfo.recommendId.length > 20) {
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
          if (this.registerInfo.checkPass !== '') {
            this.$refs.registerInfo.validateField('checkLoginPass');
          }
          callback();
        }
      };
      //验证登录密码
      var validateLoginPass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入登录密码'));
        } else if (value !== this.registerInfo.loginPass) {
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
          if (this.registerInfo.dealPass !== '') {
            this.$refs.registerInfo.validateField('checkDealPass');
          }
          callback();
        }
      };
      //验证交易密码
      var validateDealPass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入交易密码'));
        } else if (value !== this.registerInfo.dealPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        imgYzcodeInfo: {
          formLabelWidth: '120px',
          inputContent: '',
          dialogFormVisible: false,
          imgYzcodeUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513070216401&di=ffc4ca061d7eec2cb8498532371f4684&imgtype=0&src=http%3A%2F%2Fwayqq.cn%2Farticle%2FUploadPic%2F2010-4%2F201042522501448277.gif',
        },
        registerInfo: {
          userId: '',
          yzCode: '',
          phoneBind: '',
          recommendId: '',
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
            {validator: validateUserId, trigger: 'blur'}
          ],
          yzCode: [
            {validator: validateYzCode, trigger: 'blur'}
          ],
          phoneBind: [
            {validator: validatePhone, trigger: 'blur'}
          ],
          recommendId: [
            {validator: validateRecommendId, trigger: 'blur'}
          ],
          dealPass: [
            {validator: validateDealPass, trigger: 'blur'}
          ],
          checkDealPass: [
            {validator: validateDealPass2, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const url = `${apiHost}/user/register`
            let _this = this
            let crypto = require('crypto.js')
            var params = new URLSearchParams()
            console.log(params)
            params.append('userName', '' + _this.registerInfo.userId + '')
            params.append('veriCode', '' + _this.registerInfo.yzCode + '')
            params.append('phone', '' + _this.registerInfo.phoneBind + '')
            params.append('referee', '' + _this.registerInfo.recommendId + '')
            params.append('pwd', '' + crypto.md5(_this.registerInfo.loginPass) + '')
            params.append('ppwd', '' + crypto.md5(_this.registerInfo.dealPass) + '')
            this.$http.post(url, params).then((res) => {
              console.log(res)
              if (res.data.code == 0) {
                this.$message.success('注册成功')
                setTimeout((a) => {
                  _this.$router.push({path: '/login'})
                }, 3000)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getVeriCode() {
        const url = `${apiHost}/user/veri-code/${this.registerInfo.phoneBind}/0`
        if (this.registerInfo.phoneBind == '') {
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
<style lang="scss" type=text/scss    scoped>
  .registerBox {
    width: 600px;
    padding-bottom: 50px;
    border: 1px solid #e3e3e3;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    .ruleForm {
      width: 400px;
      margin: 50px auto 0 auto;
    }
    .title {
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      line-height: 50px;
      border-bottom: 1px solid #e3e3e3;
      position: relative;
      .toLogin {
        position: absolute;
        right: 20px;
        top: 0px;
        a {
          font-size: 14px;
          color: #000;
        }
      }
    }
  }

  .yzCode {
    width: 80px;
    height: 40px;
  }

</style>
