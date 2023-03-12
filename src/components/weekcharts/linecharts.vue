
//在Echarts.vue文件中
<template>
  <div class="LineEcharts">
    <div ref="linemain" style="width: 520px;height: 320px;"></div>
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
      series: JSON.parse(localStorage.getItem('series')),
      xAxis: JSON.parse(localStorage.getItem('xAxis'))
    }
  },
  created () {
    this.$nextTick(() => { this.getsalelist(1, '2023-03-06', '2023-03-11') })
  },
  methods: {
    myEcharts () {
      const myChart = this.$echarts.init(this.$refs.linemain);
      // 配置图表
      const option = {
        title: {
          text: '销售额趋势图',
        },
        color: ['#ff5757'],
        xAxis: {
          type: 'category',
          data: this.xAxis,
          axisLabel: {
            interval: 0,
            fontSize: 10
          },
          axisTick: {
            show: true
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.series,
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
    async getsalelist (id, start, end) {
      const res = await request({
        method: 'get',
        url: `/order-service/report/amountCollect/${id}/${start}/${end}`,
      })
      // console.log(res.data.xAxis);
      // console.log(res.data.series);
      localStorage.setItem('series', JSON.stringify(res.data.series));
      localStorage.setItem('xAxis', JSON.stringify(res.data.xAxis))
      this.text = '2023.03.06~2023.03.11'
      this.$forceUpdate()
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
