<template>
  <div class="detail">
    <nav-area :imgSrc="rst['image_path']"></nav-area>
    <head-area
      v-bind="{
        name: rst.name,
        rating: rst.rating,
        recent_order_num: rst.recent_order_num,
        order_lead_time: rst.order_lead_time,
        activities: rst.activities,
        img: rst.image_path,
      }"
    ></head-area>
    <tab-bar @changeBorder="changeBorder"></tab-bar>
    <keep-alive>
      <component
        :is="components[index]"
        v-bind="dynamicComponetData"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import navArea from '@/components/detail/navArea';
import headArea from '@/components/detail/headArea';
import tabBar from '@/components/detail/tabBar';
import orderEat from '@/components/detail/orderEat';
import evalute from '@/components/detail/evalute';
import business from '@/components/detail/business';

import axios from '@/api';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    navArea,
    headArea,
    orderEat,
    evalute,
    business,
    tabBar,
  },
  data() {
    return {
      components: ['orderEat', 'evalute', 'business'],
      index: 0,
    };
  },
  computed: {
    ...mapState('detail', ['menu', 'rst']),
    dynamicComponetData() {
      const {
        supports,
        opening_hours,
        flavors,
        albums,
        distance_text,
        order_lead_time,
        is_stock_empty,
      } = this.rst;
      return {
        supports,
        opening_hours,
        flavors,
        albums,
        distance_text,
        order_lead_time,
        is_stock_empty,
        //以上为商家组件所需数据
      };
    },
  },
  methods: {
    ...mapActions('detail', ['initMenu', 'initRst', 'changeStatus']),
    changeBorder(index) {
      this.index = index;
    },
  },
  created() {
    const id = this.$route.query.id;
    const _this = this;
    if (!id) {
      this.$router.push('/');
    } else {
      axios.get(`detail?id=${id}`).then((res) => {
        const data = res.data;
        _this.initMenu(data.menu);
        _this.initRst(data.rst);
        _this.changeStatus(200);
      });
    }
  },
};
</script>

<style lang="less" scoped></style>
