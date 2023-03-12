<template>
    <div class="main">
      <el-scrollbar>
      <div class="top">
        <div class="left">
          <div class="title">
            <el-card class="box-card first">
          <img src="https://likede2-admin.itheima.net/img/task.66b715b7.png" alt="">
</el-card>
<el-card class="box-card second">
<img src="https://likede2-admin.itheima.net/img/sale.606b0d8c.png" alt="">
</el-card>
          </div>
      <el-card class="box-card third">
        <div class="t-title">
          <p>销售数据<span>{{text}}</span></p>
          <div class="btnchange">
            <button @click="getsalelist(1)">按周</button>
            <button @click="getsalelist(1, '2023-03-01', '2023-03-11') ">按月</button>
            <button>按年</button>
          </div>
        </div>
        <div class="charts">
          <YearCh />
        </div>

</el-card>
        </div>
        <div class="right">
          <el-card class="ranking">
            榜单
          </el-card>
        </div>
      </div>
      <div class="footer">
        <el-card class="f-left">
          左边
        </el-card>
        <el-card class="f-right">
          右边
        </el-card>
      </div>
    </el-scrollbar>
    </div>
</template>

<script>
import YearCh from '@/components/yearcharts/YearCh.vue';

export default {
  props: {

  },
  data () {
    return {
    };
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {
    YearCh
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
    }

    .f-right {
      width: 542px;
      height: 353px;
    }
  }

.text {
    font-size: 14px;
  }
</style>
