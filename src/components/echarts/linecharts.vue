
//在Echarts.vue文件中
<template>
  <div class="LineEcharts">
    <div id="linemain" style="width: 500px;height: 320px;"></div>
  </div>
</template>

<script>
export default {
  name: 'LineEcharts',
  props: {
    xAxis: {
      type: Array
    },
    series: {
      type: Array
    }
  },
  created () {
    console.log(this.xAxis);
  },
  methods: {
    myEcharts () {
      const myChart = this.$echarts.init(document.getElementById('linemain'));
      // 配置图表
      const option = {
        title: {
          text: '销售额趋势图',
        },
        color: ['#ff5757'],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          }
        ]
      };
      myChart.setOption(option);
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
}
</style>
