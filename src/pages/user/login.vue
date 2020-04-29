<template>
  <div class="fa">
    <div class="nav"><back-navigation></back-navigation></div>
    <div class="login">
      <div class="img"><img src="~@/assets/img/loginMainImg.png" alt="" /></div>
      <custom-input
        placeholder="账号"
        v-model="user"
        :isFocusAnima="true"
        :isLogin="true"
      ></custom-input>
      <custom-input
        placeholder="密码"
        v-model="password"
        type="password"
        :isFocusAnima="true"
        :isLogin="true"
      ></custom-input>
      <p class="tips">
        新用户登录即自动注册，并表示已同意
        <span>《用户服务协议》</span>
        和
        <span>《隐私权政策》</span>
      </p>
      <button class="login">登录</button>
      <p class="about">关于我们</p>
    </div>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import customInput from '@/components/customInput';
export default {
  components: {
    customInput,
    backNavigation,
  },
  data() {
    return {
      user: '',
      password: '',
    };
  },
};
</script>

<style lang="less" scoped>
.fa {
  background-color: white;
  height: 100vh;
  .nav {
    padding: 0 @padding;
  }
  .login {
    padding: 2 * @padding 4 * @padding;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vw;
    .img {
      width: 45%;
      margin-bottom: 5%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
