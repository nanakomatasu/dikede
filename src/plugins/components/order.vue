<template>
  <div class="main">
     <div class="tcount count"><p>{{ count }}</p>订单量（个）</div>
     <div class="qcount count"><p>{{ amount }}</p>销售额（万元）</div>
  </div>
</template>

<script>
import { orderCountApi, orderAmountApi } from '@/api/total';
export default {
  name: 'OrderTotal',
  props: {

  },
  data () {
    return {
      count: '',
      amount: ''
    };
  },
  computed: {

  },
  created () {
    Promise.all([this.getcount(), this.getamount()])
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    async getcount () {
      const res = await orderCountApi()
      this.count = res.data
      // console.log(res.data);
    },
    async getamount () {
      const res = await orderAmountApi()
      this.amount = (res.data / 1000000).toFixed(2);
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
