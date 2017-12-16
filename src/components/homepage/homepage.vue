<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <p>
      SK币: <span v-text="SK"></span>
      TK币: <span v-text="TK"></span>
    </p>
     <el-row :gutter="20">
       <el-col :span="8" v-for="item in this.product" :key="item.id">
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
</template>
<script>
  import {apiHost} from "common/js/host.js"

  export default {
    data() {
      return {
        SK: 1000,
        TK: 1000,
        product: [],
        rowsNum:0
      }
    },
    created() {
      this.getProduct()
    },
    methods: {
      getProduct() {
        const url = `${apiHost}/user/product-list`
        this.$http.get(url).then((res) => {
          this.product=res.data.data
          this.rowsNum=res.data.data.length
        })
      }
    }
  }
</script>
<style lang=scss        type=text/scss        scope>
  .el-breadcrumb {
    border-bottom: 1px solid #d5d5d5;
    font-size: 14px;
    padding-bottom: 8px;
  }

  p {
    padding: 20px 0 0 0;
  }

  .el-row {
    margin: 20px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      position: relative;
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
</style>
