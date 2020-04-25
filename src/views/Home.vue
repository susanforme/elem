<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import home from '@/pages/home';
import { createNamespacedHelpers } from 'vuex';
const { mapMutations } = createNamespacedHelpers('home');
export default {
  components: {
    home,
  },
  destroyed() {
    this.changeMaskStatus(false);
  },
  methods: {
    ...mapMutations(['changeMaskStatus']),
  },
};
</script>

<style lang="less" scoped></style>
