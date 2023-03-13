<template>
    <div>
      <p>404 NOT FOUND</p>
        <img src="https://likede2-admin.itheima.net/img/empty.87c4f71b.png" alt="">
    </div>
</template>

<script>
export default {
  props: {

  },
  data () {
  },
  computed: {

  },
  created () {
    this.$nextTick(() => {
      this.toback()
    })
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    toback () {
      setTimeout(() => {
        this.$router.push('/');
      }, 5000)
    }
  },
  components: {

  },
};
</script>

<style scoped lang="less">
p {
  font-size: 40px;
  margin-top: 100px;
}
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
