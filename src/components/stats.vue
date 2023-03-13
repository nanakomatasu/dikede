<template>
    <div class="main">
       <div class="tcount count"><p>{{ all }}</p>工单总数（个）</div>
       <div class="scount count"><p>{{ complete }}</p>完成工单（个）</div>
       <div class="qcount count"><p>0</p>进行工单（个）</div>
       <div class="qcount count"><p>{{ cancel }}</p>取消工单（个）</div>
    </div>
</template>

<script>
import { statsApi } from '@/api/total';
export default {
  name: 'StatsTotal',
  props: {

  },
  data () {
    return {
      all: '',
      cancel: '',
      complete: ''
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(this.getnum)
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    async getnum () {
      const res = await statsApi()
      console.log(res.data);
      this.all = res.data.reduce((total, item) => {
        return total + item.total
      }, 0)
      this.cancel = res.data.reduce((total, item) => {
        return total + item.cancelTotal
      }, 0)
      this.complete = res.data.reduce((total, item) => {
        return total + item.completedTotal
      }, 0)
    }

  },
  components: {

  },
};
</script>

<style scoped lang="less">
 .main {
  display: flex;
  justify-content: space-between;
    .count {
     text-align: left;
     font-size: 12px;
     color: #91a7dc;
     z-index: 999;
     p {
      text-shadow: 2px 4px 7px rgba(85,132,255,.5);
      color: #072074;
      font-size: 36px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    line-height: 50px;
     }
    }
 }
</style>
