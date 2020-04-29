<template>
  <div class="user">
    <head-area></head-area>
    <main-tab-bar></main-tab-bar>
    <div class="height"></div>
  </div>
</template>

<script>
import mainTabBar from '@/components/mainTabBar';
import headArea from '@/components/user/headArea';
export default {
  components: {
    mainTabBar,
    headArea,
  },
};
</script>

<style lang="less" scoped>
.user {
  background-color: white;
}
.height {
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
