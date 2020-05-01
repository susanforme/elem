<template>
  <div class="detail">
    <back-navigation
      :customStyle="{
        backgroundColor: 'transparent ',
        position: 'absolute',
        color: 'white',
      }"
    ></back-navigation>
    <nav-area></nav-area>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import navArea from '@/components/detail/navArea';
import axios from '@/api';

export default {
  components: {
    backNavigation,
    navArea,
  },
  created() {
    const id = this.$route.query.id;
    if (!id) {
      this.$router.push('/');
    } else {
      axios.get(`detail?id=${id}`).then((res) => {
        console.log(res.data);
      });
    }
  },
};
</script>

<style lang="less" scoped>
.detail {
  padding: 0 @padding;
}
</style>
