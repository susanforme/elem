<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="animated zoomInUp"
      leave-active-class="animated zoomOutUp"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'homeView',
};
</script>

<style lang="less" scoped></style>
