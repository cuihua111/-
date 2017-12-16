<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>财务管理</el-breadcrumb-item>
      <el-breadcrumb-item>币种收支明细</el-breadcrumb-item>
    </el-breadcrumb>
    <p style="margin-top: 20px;">
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple-dark">
            TK币总数: <span v-text="TKTotal"></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-dark">
            SK币总数: <span v-text="SKTotal"></span>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-dark">
            跨港宝总数: <span v-text="KgbTotal"></span>
          </div>
        </el-col>
        <el-col :span="1.5">
          <div class="grid-content bg-purple-dark">
            币种选择
          </div>
        </el-col>
        <el-col :span="3">
          <template>
            <el-select v-model="value" placeholder="请选择币种" style="display: inline-block">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
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
        <el-table-column align="center" prop="type" label="币种" width="180"></el-table-column>
        <el-table-column align="center" prop="num" label="数量"></el-table-column>
        <el-table-column align="center" prop="source" label="来源"></el-table-column>
        <el-table-column align="center" prop="date" label="时间"></el-table-column>
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
        TKTotal: 10000,
        SKTotal: 10000,
        KgbTotal: 0,
        page: {
          currentPage: 1,
          pageSize: 10,
          total: 30
        },
        tableData3: [
          {
            index: '1',
            type: 'TK',
            num: 1111,
            source: '充值',
            date: '2016-05-03'
          },
          {
            index: '2',
            type: 'SK',
            num: 1111,
            source: '投资',
            date: '2016-05-03'
          },
          {
            index: '3',
            type: '跨港宝',
            num: 1111,
            source: '收益',
            date: '2016-05-03'
          }],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
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
<style lang=scss     type=text/scss     scope>
  .el-table {
    margin-top: 40px;
    .el-table__body-wrapper {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
  .el-row {
    line-height:40px;
  }
</style>
