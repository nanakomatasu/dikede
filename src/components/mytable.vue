<template>
   <el-card class="footer">
    <slot name="title">

    </slot>
          <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column label="序号" width="70" align="left" :index="index*10-9" type="index"></el-table-column>
   <el-table-column
      v-for="item in data"
      :prop="item.prop"
      :label="item.label"
      :key="item.innerCode">
      <template slot-scope="scope">
       {{ item.method ? item.method(scope.row[item.prop]): scope.row[item.prop]}}
       <el-button @click="handleClick(scope.row)" type="text" size="small" v-show="item.target === '查看详情'? true : false">查看详情</el-button>
       <el-button @click="handleClick(scope.row)" type="text" size="small" v-show="item.target1 === '修改'? true : false">修改</el-button>
       <el-button @click="handleClick(scope.row)" type="text" size="small" v-show="item.target2 === '删除'? true : false"  class="remove">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
       </el-card>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    tableData: {
      type: Array
    },
    data: {
      type: Array
    },
    totalpage: {
      type: Number
    },
    total: {
      type: Number
    },
    index: {
      type: Number
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

.footer {
  margin-top: 20px;

  .main {
    .m-footer {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        margin-left: 15px;

      }
    }
  }
}
/deep/.remove {
          color:#ff5a5a ;
        }
</style>
