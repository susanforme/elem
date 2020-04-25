<template>
  <div class="home">
    <head-area :data="{ placeholder }" :jump="jump"></head-area>
    <recom-food></recom-food>
    <index-activity></index-activity>
    <member-ad></member-ad>
    <recom-business></recom-business>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="mask" v-if="isShowMask" @click="changeMask"></div>
    </transition>
    <shop-lists></shop-lists>
    <div class="test" style="height:1000vw"></div>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from '@/components/mainTabBar';
import headArea from '@/components/headArea';
import recomFood from '@/components/recomFood';
import indexActivity from '@/components/indexActivity';
import memberAd from '@/components/memberAd';
import recomBusiness from '@/components/recomBusiness';
import shopLists from '@/components/shopLists';
import { createNamespacedHelpers } from 'vuex';
const { mapMutations, mapState } = createNamespacedHelpers('home');

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
    recomBusiness,
    shopLists,
  },
  methods: {
    jump() {
      //跳转另一个页面
      console.log('我等会在跳转');
    },
    ...mapMutations(['changeMaskStatus']),
    changeMask() {
      this.changeMaskStatus(false);
      document.documentElement.style.overflow = '';
    },
  },
  computed: {
    ...mapState(['isShowMask']),
  },
};
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(0.133333rem);
  -webkit-backdrop-filter: blur(1.333333vw);
  backdrop-filter: blur(0.133333rem);
  backdrop-filter: blur(1.333333vw);
}
</style>
