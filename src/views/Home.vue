<template>
  <div class="home">
    <head-area :data="{ placeholder }" :jump="jump"></head-area>
    <recom-food></recom-food>
    <index-activity></index-activity>
    <member-ad></member-ad>
    <div class="test" style="height:200vw"></div>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from '@/components/mainTabBar';
import headArea from '@/components/headArea';
import recomFood from '@/components/recomFood';
import indexActivity from '@/components/indexActivity';
import memberAd from '@/components/memberAd';
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
    indexActivity,
    memberAd,
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
