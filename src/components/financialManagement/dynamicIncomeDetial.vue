<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>财务管理</el-breadcrumb-item>
      <el-breadcrumb-item>动态收益明细</el-breadcrumb-item>
    </el-breadcrumb>
    <template>
      <el-table
        :data="tableData3"
        height="550"
        border
        style="width: 100%;">
        <el-table-column align="center" prop="date" label="序号" width="180"></el-table-column>
        <el-table-column align="center" prop="name" label="投资总额" width="180"></el-table-column>
        <el-table-column align="center" prop="phoneBind" label="直推新增跨港宝"></el-table-column>
        <el-table-column align="center" prop="memLevle" label="小区新增跨港宝"></el-table-column>
        <el-table-column align="center" prop="ljtz" label="每日小区限额跨港宝"></el-table-column>
        <el-table-column align="center" prop="time" label="每日动态收益跨港宝"></el-table-column>
        <el-table-column align="center" prop="status" label="动态收益跨港宝总和"></el-table-column>
        <el-table-column align="center" prop="status" label="结算时间"></el-table-column>
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
        rechargeTotal: 10000,
        rechargeSuccess: 10000,
        rechargeIng: 0,
        rechargeFail: 0,
        page: {
          currentPage: 1,
          pageSize: 10,
          total: 30
        },
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          phoneBind: '18244979393',
          memLevle: '至尊',
          ljtz: '10000亿',
          time: '公元2年',
          status: '正常'
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
