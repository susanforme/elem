<template>
  <div class="search-area">
    <div class="fa">
      <custom-input v-model="text" :placeholder="'输入商家名称'"></custom-input
      ><span>搜索</span>
    </div>
  </div>
</template>

<script>
import customInput from '@/components/customInput';

export default {
  data() {
    return {
      text: '',
    };
  },
  components: {
    customInput,
  },
};
</script>

<style lang="less" scoped>
.search-area {
  margin-top: 3vw;
  .fa {
    .input {
      height: 8vw;
      font-size: 14px;
      background-color: #f5f5f5;
      width: 88%;
      border-radius: 5%;
    }
    span {
      width: 12%;
      text-align: right;
      display: inline-block;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
