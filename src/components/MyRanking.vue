<template>
    <div>
     <ul >
      <li><span class="top1">{{ +ranklist[0].skuId+1 }}</span><p>{{ ranklist[0].skuName }}</p><span>{{ ranklist[0].count }}</span></li>
      <li><span class="top2">{{ +ranklist[1].skuId+2 }}</span><p>{{ ranklist[1].skuName }}</p><span>{{ ranklist[1].count }}</span></li>
      <li><span class="top3">{{ +ranklist[2].skuId+3 }}</span><p>{{ ranklist[2].skuName }}</p><span>{{ ranklist[2].count }}</span></li>
      <li v-for="(item,index) in footlist" :key="index"><span class="rank">{{ index+4 }}</span><p>{{ item.skuName == '泡面1' ? '泡面' : item.skuName}}</p><span class="count">{{ item.count }}</span></li>
     </ul>
    </div>
</template>

<script>
import { rankApi } from '@/api/rank';

export default {
  props: {

  },
  data () {
    return {
      ranklist: [],
      toplist: [],
      footlist: []
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(() => {
      this.gettop()
    })
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    async gettop () {
      const res = await rankApi();
      this.ranklist = res.data;
      this.footlist = this.ranklist.splice(3, 11)
      console.log(this.footlist);
    }
  },
  components: {

  },
};
</script>

<style scoped lang="less">
 li {
  list-style: none;
text-align: left;
margin-top: 28px;
display: flex;
justify-content: space-between;
font-size: 14px;
p {
  text-align: left;
}
.rank {
  display: block;
  text-align: center;
  color: #e9b499;
  display: block;
    width: 21px;
    height: 20px;
    background: url('~@/assets/top.png');
    text-align: center;
}

  .top1 {
    display: block;
    width: 21px;
    height: 20px;
    background: url('~@/assets/top1.png');
    text-align: center;
}
.top2 {
  display: block;
    width: 21px;
    height: 20px;
    background: url('~@/assets/top2.png');
    text-align: center;
}
.top3 {
  display: block;
    width: 21px;
    height: 20px;
    background: url('~@/assets/top3.png');
    text-align: center;
}
  }

</style>
