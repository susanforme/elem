<template>
  <div class="user">
    <head-area></head-area>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from '@/components/mainTabBar';
import headArea from '@/components/user/headArea';
import axios from '@/api';

export default {
  components: {
    mainTabBar,
    headArea,
  },
  created() {
    axios.post('/login').then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style lang="less" scoped>
.user {
  background-color: white;
}
</style>
