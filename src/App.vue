<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { debounceFactory } from './tools';

export default {
  created() {
    const debounce = debounceFactory(100);
    console.log(window.devicePixelRatio);
    window.addEventListener('resize', () => {
      debounce(() => {
        document.documentElement.style.fontSize =
          document.documentElement.clientWidth / 20 + 'px';
      });
    });
  },
};
</script>

<style lang="less" scoped></style>

<style lang="less">
@import url('~@/assets/base.less');
</style>
