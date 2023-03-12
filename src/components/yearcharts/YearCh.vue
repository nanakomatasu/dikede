<template>
  <div class="main">
    <linecharts />
   <barecharts />
  </div>
</template>

<script>
import barecharts from './barecharts.vue'
import linecharts from './linecharts'
export default {
  name: 'MonthCh',
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
    barecharts, linecharts
  },
};
</script>

<style scoped lang="less">
.main {
display: flex;
}
</style>
