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
      <button class="login-button" @click="login">登录</button>
      <p class="about">关于我们</p>
    </div>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import customInput from '@/components/customInput';
import axios from '@/api';
import { mapActions } from 'vuex';
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
  methods: {
    ...mapActions(['loginMsg']),
    login() {
      const _this = this;
      axios
        .post('/login', { user: this.user, password: this.password })
        .then((res) => {
          const data = res.data;
          if (data.status === 'ok') {
            _this.loginMsg(data.data);
          } else {
            alert('账号或者密码错误');
          }
        });
    },
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
    height: 55vh;
    > * {
      flex: 1;
    }
    .img {
      width: 45%;
      margin-bottom: 5%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tips {
      color: #797979;
      font-size: 0.6933333333333334rem;
      margin-bottom: 5%;
      span {
        color: #0089dc;
      }
    }
    .login-button {
      width: 100%;
      border: none;
      padding: 2% 0;
      line-height: 100%;
      color: white;
      background: #4cd96f;
      border-radius: 0.21333333333333335rem;
      margin: 5% 0;
      font-size: 0.8533333333333334rem;
    }
    .about {
      color: #797979;
      font-size: 0.6933333333333334rem;
    }
  }
}
</style>
