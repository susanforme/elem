<template>
  <div class="profile">
    <back-navigation :customStyle="{ padding: '0 2vw' }"></back-navigation>
    <div class="head-img">
      <span class="title">头像</span>
      <div class="right">
        <img src="~@/assets/img/defaultHeadImg.png" alt="" />
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
    <div class="user">
      <span class="title">
        用户名
      </span>
      <div class="right">
        xxxxx
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
    <p class="user-bind p">账号绑定</p>
    <div class="phone">
      <span class="title">手机</span>
      <div class="right">
        xxxxx
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
    <p class="security p">安全设置</p>
    <div class="password">
      <span class="title">登录密码</span>
      <div class="right">
        设置
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
    <div class="log-out">退出登录</div>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';

export default {
  components: {
    backNavigation,
  },
};
</script>

<style lang="less" scoped>
.profile {
}
</style>
