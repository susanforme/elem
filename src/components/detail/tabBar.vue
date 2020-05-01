<template>
  <div class="tabbar">
    <div class="child"><span>点餐</span></div>
    <div class="child"><span>评价</span></div>
    <div class="child"><span>商家</span></div>
  </div>
</template>

<script>
export default {};
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
    font-size: 16px;
    font-weight: 700;
    color: rgb(99, 99, 99);
    span {
      display: inline-block;
      height: 100%;
    }
  }
}
</style>
