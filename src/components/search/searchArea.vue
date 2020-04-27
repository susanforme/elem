<template>
  <div class="search-area">
    <div class="fa">
      <custom-input v-model="text" :placeholder="'输入商家名称'"></custom-input
      ><span>搜索</span>
    </div>
    <hot-search v-if="!isLoading"></hot-search>
  </div>
</template>

<script>
import customInput from '@/components/customInput';
import hotSearch from '@/components/search/hotSearch';

export default {
  data() {
    return {
      text: '',
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    customInput,
    hotSearch,
  },
};
</script>

<style lang="less" scoped>
.search-area {
  margin-top: 3vw;
  .fa {
    .input {
      height: 8vw;
      font-size: 0.7466666666666667rem;
      background-color: #f5f5f5;
      width: 88%;
      border-radius: 5%;
    }
    span {
      width: 12%;
      text-align: right;
      display: inline-block;
      font-size: 0.8533333333333334rem;
      font-weight: 700;
    }
  }
}
</style>
