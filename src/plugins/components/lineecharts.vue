
//在Echarts.vue文件中
<template>
  <div class="LineEcharts">
    <div ref="linemain" style="width: 500px;height: 320px;"></div>
  </div>
</template>

<script>

export default {
  name: 'LineEcharts',
  props: {
    lineseries: {
      type: Array
    },
    linexAxis: {
      type: Array
    },
    interval: {
      type: Number
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
    this.$nextTick(this.$forceUpdate())
  },
  methods: {
    myEcharts () {
      const myChart = this.$echarts.init(this.$refs.linemain);

      // 配置图表
      const option = {
        title: {
          text: `销售额趋势图 / ${this.label}`,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}元'
        },
        color: ['#ff5757'],
        xAxis: {
          type: 'category',
          data: this.linexAxis,
          axisLabel: {
            interval: this.label === '月' ? 1 : 0,
            fontSize: 10
          },
          axisTick: {
            show: true
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          containLabel: true,
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.lineseries,
            type: 'line',
            smooth: true,
            areaStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: "#dc3881" // 0% 处的颜色
                  }, {
                    offset: 0.7,
                    color: "rgba(220,56,129,0)" // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            },
          }
        ]
      };
      myChart.setOption(option);
    },

  },
  mounted () {
    this.myEcharts();
  },
  watch: {
    lineseries () {
      this.myEcharts()
    },
    linexAxis () {
      this.myEcharts()
    }
  }

}
</script>

<style lang="less">
.Echarts {
  padding: 0;
}
</style>
