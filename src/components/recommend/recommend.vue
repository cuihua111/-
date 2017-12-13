<template>
  <div class="recommend">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我的推荐</el-breadcrumb-item>
    </el-breadcrumb>
    <template>
      <el-table
        :data="tableData3"
        height="550"
        border
        style="width: 100%;">
        <el-table-column align="center" prop="date" label="序号" width="180"></el-table-column>
        <el-table-column align="center" prop="name" label="会员ID" width="180"></el-table-column>
        <el-table-column align="center" prop="phoneBind" label="绑定手机号"></el-table-column>
        <el-table-column align="center" prop="memLevle" label="会员等级"></el-table-column>
        <el-table-column align="center" prop="ljtz" label="累计投资"></el-table-column>
        <el-table-column align="center" prop="time" label="注册时间"></el-table-column>
        <el-table-column align="center" prop="status" label="账号状态"></el-table-column>
      </el-table>
    </template>
    <pagination  @size-change="pagesizeChange" @current-change="currentPageChage"
                 :current-page="page.currentPage" :page-size="page.pageSize" :total="page.total" :page-sizes="[10, 20, 50, 100]"></pagination>
  </div>
</template>
<script>
  import pagination from 'components/pagination/pagination'
  export default {
    data() {
      return {
        page:{
          currentPage:1,
          pageSize:10,
          total:30
        }
        ,
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
    methods:{
      pagesizeChange(){
        alert('pagesizeChange')
      },
      currentPageChage(){
        alert('currentPageChage')
      }
    },
    components: {
      pagination
    }
  }
</script>
<style lang=scss type=text/scss scope>
.el-table {
  margin-top:40px;
  .el-table__body-wrapper {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
