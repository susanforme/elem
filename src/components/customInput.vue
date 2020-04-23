<template>
  <input type="text" :placeholder="placeholder" class="input" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索',
    },
  },
};
</script>

<style lang="less" scoped>
input {
  width: 100%;
  box-sizing: border-box;
  height: 2.1333333333333333rem;
  border: none;
  background-color: white;
  outline: none;
  border: 0.10666666666666667rem;
  text-align: center;
  &:disabled {
    background-color: white;
  }
}
</style>
