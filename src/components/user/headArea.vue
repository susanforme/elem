<template>
  <div class="head">
    <img src="~@/assets/img/defaultHeadImg.png" alt="" class="default" />
    <div class="login">
      <p>登录注册</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style lang="less" scoped>
@height: 16vw;
.head {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  height: @height;
  padding: (30vw-@height)/2 2.1 * @padding;
  display: flex;
  > .default {
    width: @height;
    height: @height;
    border-radius: 50%;
  }
}
</style>
