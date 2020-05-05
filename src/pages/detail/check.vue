<template>
  <div class="check">
    <back-navigation
      :customStyle="{
        color: 'white',
        backgroundImage: 'linear-gradient(90deg,#0af,#0085ff)',
        padding: '0 2vw',
        fontWeight: 700,
      }"
    >
      <template #title>
        确认订单
      </template>
    </back-navigation>
    <check-msg v-bind="{ address, phoneNum, name }"></check-msg>
  </div>
</template>

<script>
//检测购物车是否为空,为空返回首页
import backNavigation from '@/components/backNavigation';
import checkMsg from '@/components/detail/check/checkMsg';
import { mapState } from 'vuex';
export default {
  components: {
    backNavigation,
    checkMsg,
  },
  computed: {
    ...mapState(['address', 'phoneNum', 'name']),
  },
};
</script>

<style lang="less" scoped></style>
