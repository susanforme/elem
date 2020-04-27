<template>
  <div class="list">
    <filter-head :isOtherPage="true" :otherPageClass="'search'"></filter-head>
    <shop-lists :lists="searchList"></shop-lists>
  </div>
</template>

<script>
import filterHead from '@/components/filterHead';
import shopLists from '@/components/shopLists';
export default {
  components: {
    shopLists,
    filterHead,
  },
  props: {
    searchList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped></style>
