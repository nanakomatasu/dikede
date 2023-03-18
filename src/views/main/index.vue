<template>
    <div class="main">
      <el-scrollbar>
      <div class="top">
        <div class="left">
          <div class="title">
            <el-card class="box-card first">
              <div class="f-title">工单统计<span>
2023.03.01 ~ 2023.03.13</span></div>
              <StatsTotal />
          <img src="https://likede2-admin.itheima.net/img/task.66b715b7.png" alt="">
</el-card>
<el-card class="box-card second">
  <div class="f-title">销售统计<span>
2023.03.01 ~ 2023.03.13</span></div>
<OrderTotal />
<img src="https://likede2-admin.itheima.net/img/sale.606b0d8c.png" alt="">
</el-card>
          </div>
      <el-card class="box-card third">
        <div class="t-title">
          <p>销售数据<span>{{text}}</span></p>
          <div class="btnchange">
            <button @click="getGroup(1, '2023-03-06', '2023-03-11','周')">按周</button>
            <button @click="getGroup(1, '2023-03-01', '2023-03-11','月')">按月</button>
            <button @click="getGroup(2, '2023-01-01', '2023-03-11','年')">按年</button>
          </div>
        </div>
        <div class="charts">
          <LineEcharts :lineseries="lineseries" :linexAxis="linexAxis" :label="label"/>
          <BarEcharts :barseries="barseries" :barxAxis="barxAxis" :label="label"/>
        </div>

</el-card>
        </div>
        <div class="right">
          <el-card class="ranking">
            <div class="r-title">销售统计<span>
2023.03.01 ~ 2023.03.13</span></div>
            <MyRanking />
          </el-card>
        </div>
      </div>
      <div class="footer">
        <el-card class="f-left">
          <div class="fl-title">
            合作商点位数TOP5
          </div>
          <CustEcharts/>
             <el-card class="total">
              <p>16
                <span>点位数</span>
              </p>
              <p>5
                <span>合作商数</span>
              </p>
             </el-card>
        </el-card>
        <el-card class="f-right">
         <div class="fr-title">
           异常数据监控
         </div>
         <img src="https://likede2-admin.itheima.net/img/empty.87c4f71b.png" alt="">
         <p>暂无异常</p>
        </el-card>
      </div>
    </el-scrollbar>
    </div>
</template>

<script>
import { barApi, lineApi } from '@/api/echarts';
export default {
  data () {
    return {
      text: '2023.03.06 ~ 2023.03.12',
      lineseries: [],
      linexAxis: [],
      barseries: [],
      barxAxis: [],
      label: '周'
    };
  },
  computed: {

  },
  created () {
    Promise.all([this.getlinelist(1, '2023-03-06', '2023-03-11'), this.getbarlist('2023-03-06', '2023-03-11')])
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    async getbarlist (start, end) {
      const res = await barApi(start, end)
      this.barseries = res.data.series.map(item => {
        return item / 1000
      })
      this.barxAxis = res.data.xAxis
    },
    async getlinelist (id, start, end) {
      const res = await lineApi(id, start, end)
      this.lineseries = res.data.series.map(item => {
        return item / 1000
      })
      this.linexAxis = res.data.xAxis
    },
    getGroup (id, start, end, date) {
      Promise.all([this.getbarlist(start, end), this.getlinelist(id, start, end)])
      this.text = `${start} ~ ${end}`
      this.label = date
    }
  },
  components: {
  },
};
</script>

<style scoped lang="less">
  .main {
    padding: 10px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    .el-card__body {
      padding: 0;
      width: 100%;
      height: 100%;
    }
    .left {
      width: 75%;
        .title {
          height: 166px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          .first {
            position: relative;
            height: 100%;
        width: 528px;
        background-color: #e9f3ff;
        .f-title{
              height: 20px;
              line-height: 20px;
              text-align: left;
              margin-bottom: 10px;
              font-weight: 700;
              p {
                font-size: 16px;

              }
              span {
                  margin-left: 10px;
                  font-size: 12px;
                  color: #ccc;
                }
        }
        img {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }

      .second {
        position: relative;
        height: 100%;
       width: 443px;
       background-color: #fbefe8;
       .f-title{
              height: 20px;
              line-height: 20px;
              text-align: left;
              margin-bottom: 10px;
              font-weight: 700;
              p {
                font-size: 16px;

              }
              span {
                  margin-left: 10px;
                  font-size: 12px;
                  color: #ccc;
                }
        }
       img {
        position: absolute;
        right: 0;
        bottom: 0;
       }
      }
        }

        .third {
          position: relative;
          height: 352px;
          display: flex;
          /deep/.el-card__body {
            padding: 0;
            width: 1012px;
            height: 352px;
             .t-title{
              display: flex;
              justify-content: space-between;
              height: 30px;
              line-height: 30px;
              padding: 10px 10px;
              p {
                font-size: 16px;
                font-weight: 700;
                span {
                  margin-left: 10px;
                  font-size: 12px;
                  color: #ccc;
                }
              }

              button {
                border: 0;
                padding: 5px 10px;
                margin-left: 5px;
                border-radius: 5px;
              }
             }
            .charts {
              padding: 0;
              margin-top: 20px;
              height: 300px;
              width: 100%;
              display: flex;
              justify-content: space-between;
            }
          }
         }

    }

    .right {
      .r-title{
              height: 20px;
              line-height: 20px;
              text-align: left;
              margin-bottom: 20px;
              font-weight: 700;
              p {
                font-size: 16px;

              }
              span {
                  margin-left: 10px;
                  font-size: 12px;
                  color: #ccc;
                }
        }
      .ranking {
        width: 317px;
      height: 538px;
      }

    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .f-left {
      width: 767px;
      height: 353px;
      position: relative;
      .el-card__body {

        width:  767px;
        height: 353px;

        .fl-title {
          font-weight: 700;
          text-align: left;
          padding: 0;
        }

        .total {
          box-sizing: border-box;
          width: 188px;
          height: 230px;
          background-color: #f8f8f9;
          border-radius: 0 30px 0 30px;
          position: absolute;
          right: 50px;
          bottom: 50px;
          padding: 30px 0 0 30px;
          p {
            text-align: left;
            font-size: 25px;
            font-weight: 700;
            display: flex;
            color: #072074;
            flex-direction: column;
            margin-bottom: 20px;
            span {
              font-weight: 400;
              font-size: 10px;
              color: #333;
             margin-top: 5px;
            }
          }
        }
      }
    }

    .f-right {
      width: 542px;
      height: 353px;
       .el-card__body{
        width: 542px;
        height: 353px;
        .fr-title {
         text-align: left;
         font-weight: 700;
      }

      img {
         margin-top: 100px;
      }

      p {
        margin-left: 20px;
        margin-top: 20px;
        font-weight: 700;
      }
       }

    }
  }

.text {
    font-size: 14px;
  }
</style>
