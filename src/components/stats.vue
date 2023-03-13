<template>
    <div class="main">
       <div class="tcount count"><p>24</p>工单总数（个）</div>
       <div class="scount count"><p>0</p>完成工单（个）</div>
       <div class="qcount count"><p>0</p>进行工单（个）</div>
       <div class="qcount count"><p>24</p>取消工单（个）</div>
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
