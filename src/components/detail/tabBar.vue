<template>
  <div class="tabbar">
    <div
      class="child"
      v-for="(btn, index) in btns"
      :key="index"
      @click="changeBorder(index)"
    >
      <span :class="{ active: index === id }">{{ btn }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btns: ['点餐', '评价', '商家'],
      id: 0,
    };
  },
  methods: {
    changeBorder(index) {
      this.id = index;
      this.$emit('changeBorder', index);
    },
  },
  props: {
    test: {
      type: Boolean,
    },
  },
};
</script>

<style lang="less" scoped>
.tabbar {
  background-color: #fff;
  padding-top: 5vw;
  display: flex;
  width: 100%;
  height: 9vw;
  > .child {
    flex: 1;
    text-align: center;
    font-size: 0.8533333333333334rem;
    font-weight: 600;
    color: rgba(133, 133, 133, 0.671);
    span {
      display: inline-block;
      height: 100%;
    }
  }
}
.active {
  border-bottom: 0.16rem solid rgb(35, 149, 255);
  box-sizing: border-box;
  color: black;
}
</style>
