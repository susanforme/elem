<template>
  <div class="user">
    <head-area v-bind="{ isLogin, userName, phoneNum }"></head-area>
    <main-tab-bar></main-tab-bar>
    <div class="height"></div>
  </div>
</template>

<script>
import mainTabBar from '@/components/mainTabBar';
import headArea from '@/components/user/headArea';
import { mapState } from 'vuex';

export default {
  components: {
    mainTabBar,
    headArea,
  },
  computed: {
    ...mapState(['isLogin', 'userName', 'phoneNum']),
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
