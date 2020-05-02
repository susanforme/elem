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
  border-bottom: 0.05333333333333334rem solid rgba(179, 179, 179, 0.267);
  > .child {
    flex: 1;
    text-align: center;
    font-size: 0.8533333333333334rem;
    font-weight: 500;
    color: rgba(99, 99, 99, 0.938);
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
  font-weight: 600;
}
</style>
