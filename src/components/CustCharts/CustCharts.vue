
//在Echarts.vue文件中
<template>
    <div class="LineEcharts">
    <div ref="linemain" style="width: 500px;height: 320px;"></div>
  </div>
</template>

<script>
import request from '@/utils/request';

export default {
  name: 'LineEcharts',
  props: {
  },
  data () {
    return {
      friendlist: JSON.parse(localStorage.getItem('flist'))
    }
  },
  created () {
    this.$nextTick(() => {
      this.getfriend()
    })
  },
  methods: {
    myEcharts () {
      const myChart = this.$echarts.init(this.$refs.linemain);
      // 配置图表
      const option = {
        toolbox: {
          show: true,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '合作商TOP5',
            type: 'pie',
            radius: [55, 100],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 0
            },
            data: this.friendlist
          }
        ]
      };
      myChart.setOption(option);
    },
    async getfriend () {
      const res = await request({
        method: 'get',
        url: '/vm-service/node/nodeCollect'
      })
      console.log(res.data);
      localStorage.setItem('flist', JSON.stringify(res.data))
    }
  },
  mounted () {
    this.myEcharts();
  },

}
</script>

<style lang="less">
.Echarts {
  padding: 0;
}
</style>
