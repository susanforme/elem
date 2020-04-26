<template>
  <div>
    <transition
      enter-active-class="animated zoomInDown"
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
