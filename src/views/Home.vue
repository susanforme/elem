<template>
  <div class="home">
    <head-area :data="{ placeholder }" :jump="jump"></head-area>
    <recom-food></recom-food>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from '@/components/mainTabBar';
import headArea from '@/components/headArea';
import recomFood from '@/components/recomFood';
export default {
  name: 'home',
  data() {
    return {
      placeholder: '搜索饿了么商家,商品名称',
    };
  },
  components: {
    mainTabBar,
    headArea,
    recomFood,
  },
  methods: {
    jump() {
      //跳转另一个页面
      console.log('我等会在跳转');
    },
  },
};
</script>

<style lang="less" scoped></style>
