<template>
  <input type="text" :placeholder="placeholder" @input="model" class="input" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索',
    },
  },
  model: {
    event: 'model',
    prop: 'text',
  },
  methods: {
    model(e) {
      this.$emit('model', e.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
input {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  line-height: 100%;
  border: none;
  background-color: white;
  outline: none;
  border: 0.10666666666666667rem;
  padding: 3%;
  color: rgb(121, 121, 121);
  &:disabled {
    background-color: white;
  }
}
</style>
