<template>
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      width="80">
    </el-table-column>

    <el-table-column
      prop="taskCode"
      label="工单编号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="innerCode"
      label="设备编号"
      width="200">
    </el-table-column>
    <el-table-column
    prop="taskType.typeName"
      label="工单类型"
      width="120">

    </el-table-column>
    <el-table-column
      label="工单方式"
      width="120">
      <template slot-scope="scope">
        {{ scope.row.createType ==1?'手动':'自动' }}
      </template>
    </el-table-column>
    <el-table-column
      prop="zip"
      label="工单状态"
      width="120">
      <template slot-scope="scope">
        {{ scope.row.taskStatus ==1?'待办':'' }}
        {{ scope.row.taskStatus ==2?'进行':'' }}
        {{ scope.row.taskStatus ==3?'取消':'' }}
        {{ scope.row.taskStatus ==4?'完成':'' }}
      </template>
    </el-table-column>
    <el-table-column
      prop="userName"
      label="运营人员"
      width="150">
    </el-table-column>
    <el-table-column
      label="创建日期"
      width="200">
      <template slot-scope="scope">
        {{ scope.row.createTime.replace(/T/g, ' ')}}

      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="80">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row.innerCode)" type="text" size="small">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    tableData: {
      type: Array
    }
  },
  data () {
    return {

    };
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  },
};
</script>

<style scoped lang="less">
/deep/.el-table__cell {
  text-align: center;
}
</style>
