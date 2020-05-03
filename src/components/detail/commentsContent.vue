<template>
  <div class="content">
    <div class="comment" v-for="(comment, index) in comments" :key="index">
      <img src="~@/assets/img/defaultHeadImg.png" alt="" class="headimg" />
      <div class="content">
        <p class="username">{{ comment.username }}</p>
        <p class="score">分数星星{{ comment.rating }}</p>
        <p class="detail">
          {{ comment.rating_text }}
        </p>
        <p class="img"><img src="" alt="" /><img src="" alt="" /></p>
      </div>
    </div>
    <div class="nomore">
      没有更多了哦~
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: white;
  padding: 2 * @padding;
}
</style>
