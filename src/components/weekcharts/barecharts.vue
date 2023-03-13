//在Echarts.vue文件中
<template>
  <div class="Echarts">
    <div id="main" style="width: 500px;height: 320px;"></div>
  </div>
</template>

<script>
import request from '@/utils/request';
export default {
  name: 'BarEcharts',
  data () {
    return {
      series: JSON.parse(localStorage.getItem('wbxAxis')),
      xAxis: JSON.parse(localStorage.getItem('wbseries')),
    }
  },
  created () {
    this.$nextTick(() => {})
    this.getsalelist()
  },
  methods: {
    myEcharts () {
      const myChart = this.$echarts.init(document.getElementById('main'));
      // 配置图表
      const option = {
        title: {
          text: '销售额分布图',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}元'
        },
        xAxis: {
          data: this.series,
        },
        grid: {
          left: "3%",
          right: "4%",
          containLabel: true,
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.xAxis,
          barWidth: 20,
        }]
      };
      myChart.setOption(option);
    },
    async getsalelist () {
      const res = await request({
        method: 'get',
        url: 'order-service/report/regionCollect/2023-03-06/2023-03-12'
      })
      console.log(res.data);
      localStorage.setItem('wbxAxis', JSON.stringify(res.data.xAxis))
      localStorage.setItem('wbseries', JSON.stringify(res.data.series))
    }
  },
  mounted () {
    this.myEcharts();
  }
}
</script>

<style lang="less">
.Echarts {
  padding: 0;
  height: 100%;
}
</style>
