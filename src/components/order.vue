<template>
  <div class="main">
     <div class="tcount count"><p>6159</p>订单量（个）</div>
     <div class="qcount count"><p>4.17</p>销售额（万元）</div>
  </div>
</template>

<script>
import { statsApi } from '@/api/total';
export default {
  name: 'OrderTotal',
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
justify-content: space-around;
  .count {
   text-align: left;
   font-size: 12px;
   color: #de9690;
   z-index: 999;
   p {
    text-shadow: 2px 4px 7px rgba(255,99,85,.5);
    color: #ff5757;
    font-size: 36px;
  font-family: PingFangSC-Semibold,PingFang SC;
  font-weight: 600;
  line-height: 50px;
   }
  }
}
</style>
