<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>财务管理</el-breadcrumb-item>
      <el-breadcrumb-item>提现明细</el-breadcrumb-item>
    </el-breadcrumb>
    <p style="margin-top: 20px;">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple-dark">
            账户累计提现跨港宝个数: <span v-text="withdrawalsTotal"></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-dark">
            提现成功: <span v-text="withdrawalsSuccess"></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-dark">
            提现审核中: <span v-text="withdrawalsIng"></span>
          </div>
        </el-col>
      </el-row>

    </p>
    <template>
      <el-table
        :data="tableData3"
        height="550"
        border
        style="width: 100%;">
        <el-table-column align="center" prop="index" label="序号" width="180"></el-table-column>
        <el-table-column align="center" prop="withdrawalsKgb" label="提现跨港宝个数" width="180"></el-table-column>
        <el-table-column align="center" prop="withdrawalsMoney" label="提现金额"></el-table-column>
        <el-table-column align="center" prop="withdrawalsServiceCharge" label="提现手续费"></el-table-column>
        <el-table-column align="center" prop="actualAccount" label="实际到账金额"></el-table-column>
        <el-table-column align="center" prop="shoppingPoints" label="购物积分"></el-table-column>
        <el-table-column align="center" prop="gameCoin" label="游戏币"></el-table-column>
        <el-table-column align="center" prop="withdrawalsTime" label="提现时间"></el-table-column>
        <el-table-column align="center" prop="withdrawalsStatus" label="提现状态"></el-table-column>
      </el-table>
    </template>
    <pagination @size-change="pagesizeChange" @current-change="currentPageChage"
                :current-page="page.currentPage" :page-size="page.pageSize" :total="page.total"
                :page-sizes="[10, 20, 50, 100]"></pagination>
  </div>
</template>
<script>
  import pagination from 'components/pagination/pagination'

  export default {
    data() {
      return {
        withdrawalsTotal: 10,
        withdrawalsSuccess: 8,
        withdrawalsIng: 2,
        page: {
          currentPage: 1,
          pageSize: 10,
          total: 30
        },
        tableData3: [{
          index: '1',
          withdrawalsKgb: 100,
          withdrawalsMoney: 10000,
          withdrawalsServiceCharge: '5%',
          actualAccount: 10000*0.95,
          shoppingPoints: 100,
          gameCoin: 100,
          withdrawalsTime: '2017-12-15',
          withdrawalsStatus: '成功',
        }]
      }
    },
    methods: {
      pagesizeChange() {
        alert('pagesizeChange')
      },
      currentPageChage() {
        alert('currentPageChage')
      }
    },
    components: {
      pagination
    }
  }
</script>
<style lang=scss  type=text/scss  scope>
  .el-table {
    margin-top: 40px;
    .el-table__body-wrapper {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
