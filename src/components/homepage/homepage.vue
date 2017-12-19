<template>
  <div>
    <div class="homeTitle" :style="'width:' + bodyWidth + '%'">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
      <p>
        SK币: <span v-text="SK"></span>
        TK币: <span v-text="TK"></span>
      </p>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="12" v-for="item in this.product" :key="item.id">
            <div class="grid-content">
              <p v-text=item.prodcutName></p>
              <p>投资金额: <span v-text="item.investAmount"></span></p>
              <p>
                投资扣除: SK币:<span v-text="item.sk"></span>
                KT币:<span v-text="item.tk"></span>
              </p>
              <el-button type="primary">确认投资</el-button>
            </div>
          </el-col>
          <el-col :span="12" v-for="item in this.product" :key="item.id">
            <div class="grid-content">
              <p v-text=item.prodcutName></p>
              <p>投资金额: <span v-text="item.investAmount"></span></p>
              <p>
                投资扣除: SK币:<span v-text="item.sk"></span>
                KT币:<span v-text="item.tk"></span>
              </p>
              <el-button type="primary">确认投资</el-button>
            </div>
          </el-col>
          <el-col :span="12" v-for="item in this.product" :key="item.id">
            <div class="grid-content">
              <p v-text=item.prodcutName></p>
              <p>投资金额: <span v-text="item.investAmount"></span></p>
              <p>
                投资扣除: SK币:<span v-text="item.sk"></span>
                KT币:<span v-text="item.tk"></span>
              </p>
              <el-button type="primary">确认投资</el-button>
            </div>
          </el-col>
          <el-col :span="12" v-for="item in this.product" :key="item.id">
            <div class="grid-content">
              <p v-text=item.prodcutName></p>
              <p>投资金额: <span v-text="item.investAmount"></span></p>
              <p>
                投资扣除: SK币:<span v-text="item.sk"></span>
                KT币:<span v-text="item.tk"></span>
              </p>
              <el-button type="primary">确认投资</el-button>
            </div>
          </el-col>
          <el-col :span="12" v-for="item in this.product" :key="item.id">
            <div class="grid-content">
              <p v-text=item.prodcutName></p>
              <p>投资金额: <span v-text="item.investAmount"></span></p>
              <p>
                投资扣除: SK币:<span v-text="item.sk"></span>
                KT币:<span v-text="item.tk"></span>
              </p>
              <el-button type="primary">确认投资</el-button>
            </div>
          </el-col>
          <el-col :span="12" v-for="item in this.product" :key="item.id">
            <div class="grid-content">
              <p v-text=item.prodcutName></p>
              <p>投资金额: <span v-text="item.investAmount"></span></p>
              <p>
                投资扣除: SK币:<span v-text="item.sk"></span>
                KT币:<span v-text="item.tk"></span>
              </p>
              <el-button type="primary">确认投资</el-button>
            </div>
          </el-col>
          <el-col :span="12" v-for="item in this.product" :key="item.id">
            <div class="grid-content">
              <p v-text=item.prodcutName></p>
              <p>投资金额: <span v-text="item.investAmount"></span></p>
              <p>
                投资扣除: SK币:<span v-text="item.sk"></span>
                KT币:<span v-text="item.tk"></span>
              </p>
              <el-button type="primary">确认投资</el-button>
            </div>
          </el-col>
          <el-col :span="12" v-for="item in this.product" :key="item.id">
            <div class="grid-content">
              <p v-text=item.prodcutName></p>
              <p>投资金额: <span v-text="item.investAmount"></span></p>
              <p>
                投资扣除: SK币:<span v-text="item.sk"></span>
                KT币:<span v-text="item.tk"></span>
              </p>
              <el-button type="primary">确认投资</el-button>
            </div>
          </el-col>


        </el-row>
      </div>
      <!-- you can put some other DOMs here, it won't affect the scrolling -->
    </div>
  </div>
</template>
<script>
  import {apiHost} from "common/js/host.js"
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        SK: 1000,
        TK: 1000,
        product: [],
        rowsNum: 0,
        bodyWidth: 0,
      }
    },
    created() {
      this.getProduct()
      this.initWidth()
//      this._initScroll()
    },
    methods: {
      getProduct() {
        const url = `${apiHost}/user/product-list`
        let _this=this
        this.$http.get(url,{headers:{'token':sessionStorage.getItem('token')}}).then((res) => {
          this.product = res.data.data
          _this._initScroll()
        })
      },
      initWidth() {
        let bodyWidth = document.documentElement.clientWidth
        this.bodyWidth = (bodyWidth - 400) / bodyWidth * 100
      },
      _initScroll() {
        console.log(this.$refs.wrapper)
        let sc = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          disableMouse:false
        })
      }
    }
  }
</script>
<style lang=scss   type=text/scss           scope>
  .wrapper {
    width: 60%;
    height: 700px;
    position: relative;
    overflow: hidden;
    top: 60px;
    .content {
      width: 100%;
      /*height: 700px;*/
      .el-row {
        margin: 20px 0;
        &:last-child {
          margin-bottom: 0;
        }
        .el-col {
          position: relative;
          margin-top: 20px;
          .grid-content {
            height: 150px;
            background-color: hotpink;
            border-radius: 5px;
            padding: 0 10px;
            .el-button {
              position: absolute;
              right: 20px;
              bottom: 10px;
            }
          }
        }
      }
    }
  }

  .homeTitle {
    position: fixed;
    left: 385px;
    padding: 0;
    width: 100%;
    margin-bottom: 60px;
    z-index: 1;
    background-color: #fff;
  }

  .el-breadcrumb {
    border-bottom: 1px solid #d5d5d5;
    font-size: 14px;
    padding-bottom: 8px;
  }

  p {
    padding: 20px 0 0 0;
  }
</style>
