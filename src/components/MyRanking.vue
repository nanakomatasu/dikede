<template>
    <div>
     <ul>
      <li></li>
     </ul>
    </div>
</template>

<script>
import { rankApi } from '@/api/rank';

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
    this.$nextTick(() => {
      this.gettop()
    })
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    async gettop () {
      const res = await rankApi();
      console.log(res)
    }
  },
  components: {

  },
};
</script>

<style scoped lang="less">

</style>
