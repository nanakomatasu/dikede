<template>
    <div class="main">
       <el-card class="top">
        <div class="number">
          工单编号:
          <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>
        </div>
        <div class="status">
          工单状态:
          <el-select v-model="value" placeholder="请选择" class="selectput">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-button type="primary" icon="el-icon-search">查询</el-button>
        </div>
       </el-card>
       <MyTable :tableData="tableData" :totalpage="totalpage" :total="total" :index="index" :data="data">
        <template #title>
          <div class="title">
          <el-button class="first" icon="el-icon-circle-plus-outline">新建</el-button>
          <el-button class="second">工单配置</el-button>
        </div>
        </template>
      </MyTable>
      <div class="m-footer">
           <p style="color:#dbdfe5!important;">共{{ total }}条记录&nbsp;&nbsp;当前{{ index }}/{{ totalpage }}页</p>
           <div class="changepage">
            <el-button type="primary" icon="el-icon-arrow-left" :disabled=isFlag @click="toback(index)">上一页</el-button>
  <el-button type="primary" @click="tonext(index)">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
           </div>
          </div>
    </div>
</template>

<script>
import { businessApi } from '@/api/tablelist';
export default {
  props: {

  },
  data () {
    return {
      input: '',
      options: [{
        value: '1',
        label: '待办'
      }, {
        value: '2',
        label: '取消'
      }, {
        value: '3',
        label: '进行'
      }, {
        value: '4',
        label: '完成'
      }],
      value: '',
      tableData: [],
      index: 1,
      total: '',
      totalpage: '',
      isFlag: true,
      data: [
        { prop: 'taskCode', label: '工单编号', width: '200' },
        { prop: 'innerCode', label: '设备编号', width: '200' },
        { prop: 'taskType', label: '工单类型', method: (i) => { return i ? i.typeName : '暂无' }, width: '100' },
        { prop: 'createType', label: '工单方式', method: (i) => { return i === 0 ? '自动' : '手动' }, width: '150' },
        { prop: 'taskStatusTypeEntity', label: '工单状态', method: (i) => { return i ? i.statusName : '暂无' }, width: '70' },
        { prop: 'userName', label: '运营人员', width: '70' },
        { prop: 'createTime', label: '创建日期', width: '150', method: (i) => { return i ? i.replace('T', ' ') : '' } },
        { label: '操作', target: '查看详情', target1: '修改', target2: '删除' }
      ]
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(() => { this.gettablelist(1) })
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    async gettablelist (i) {
      try {
        const res = await businessApi(i)
        this.totalpage = res.data.totalPage
        this.total = res.data.totalCount
        this.tableData = res.data.currentPageRecords
      } catch (err) {
        console.log(err);
      }
    },
    async tonext () {
      this.index++;
      await this.gettablelist(this.index)
      this.isFlag = false
    },
    async toback () {
      if (this.index <= 2) {
        this.isFlag = true;
        this.index = 1
        await this.gettablelist(this.index)
      } else {
        this.index--;
        await this.gettablelist(this.index)
      }
    },

  },
  components: {
  },
};
</script>

<style scoped lang="less">
.main {
  padding: 10px;

.top {
  .el-input {
    width: 205px;
    margin-left: 15px;
  }

  .selectput {
    width: 205px;
    margin: 0 15px;
  }
  /deep/.el-card__body {
    width: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;

  .number {
    width: 400px;
    display:flex ;
    justify-content: center;
    align-items: center;
  }
  }
}
}
.title {
       text-align: left;
       margin-bottom: 20px;

       .first {
        background: linear-gradient(135deg,#ff9743,#ff5e20)!important;
        color: #fff;
        border: 0;
       }

       .second {
        background-color: #fbf4f0!important;
        border: 0;
       }
  }

    .m-footer {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        margin-left: 15px;
      }
    }

</style>
