<template>
  <div class="main-menu">
    <menu-category :category="category"></menu-category>
    <scroll-menu></scroll-menu>
  </div>
</template>

<script>
import menuCategory from './menuCategroy';
import scrollMenu from './scrollMenu';
export default {
  props: {
    menu: {
      type: Array,
      default() {
        return [{}];
      },
    },
  },
  components: {
    menuCategory,
    scrollMenu,
  },
  computed: {
    category() {
      if (this.menu.length <= 1) {
        return this.menu;
      }
      return this.menu.slice(1).map((v) => {
        const { id, name } = v;
        return { id, name };
      });
    },
  },
};
</script>

<style lang="less" scoped>
.main-menu {
  display: flex;
}
</style>
