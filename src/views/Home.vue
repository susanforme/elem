<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import axios from '@/api';

const { mapMutations, mapState, mapActions } = createNamespacedHelpers('home');
export default {
  name: 'homeView',

  destroyed() {
    this.changeMaskStatus(false);
    document.documentElement.style.overflow = '';
  },
  methods: {
    ...mapMutations(['changeMaskStatus']),
    ...mapActions([
      'changeDataStatus',
      'initFoodtrys',
      'initactivity',
      'pushShopList',
    ]),
  },
  created() {
    const _this = this;
    if (this.status !== 200) {
      Promise.all([axios.get('/home'), axios.get('/shopping')]).then(
        ([res1, res2]) => {
          const homeData = res1.data;
          const shopData = res2.data;
          //处理首页推荐图片之类的...
          _this.initFoodtrys(homeData.foodtrys);
          _this.initactivity(homeData.activity);
          //处理首页列表
          _this.pushShopList(shopData.shopList);
          //改变状态加载完成
          _this.changeDataStatus(200);
        }
      );
    }
  },
  computed: {
    ...mapState(['homeData', 'location', 'status']),
  },
};
</script>

<style lang="less" scoped></style>
