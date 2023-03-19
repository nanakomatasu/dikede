//在Echarts.vue文件中
<template>
  <div class="Echarts">
    <div id="main" style="width: 500px;height: 320px;"></div>
  </div>
</template>

<script>

export default {
  name: 'BarEcharts',
  props: {
    barseries: {
      type: Array
    },
    barxAxis: {
      type: Array
    },
    label: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    myEcharts () {
      const myChart = this.$echarts.init(document.getElementById('main'));
      // 配置图表
      const option = {
        title: {
          text: `销售额分布图 / ${this.label}`,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}万元'
        },
        xAxis: {
          data: this.barxAxis,
        },
        grid: {
          left: "3%",
          right: "4%",
          containLabel: true,
        },
        yAxis: {
          type: 'value',
          axisLabel: { formatter: '{value} 万元' },
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: this.barseries,
          barWidth: 20,
        }]
      };
      myChart.setOption(option);
    },
  },
  mounted () {
    this.myEcharts();
  },
  watch: {
    barseries () {
      this.myEcharts()
    },
    barxAxis () {
      this.myEcharts()
    }
  }
}
</script>

<style lang="less">
.Echarts {
  padding: 0;
  height: 100%;
}
</style>
