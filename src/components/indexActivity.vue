<template>
  <div class="activity">
    <div class="box">
      <div class="content child">
        <h1>{{ activity.title }}</h1>
        <p>{{ activity.description }}</p>
        <span>立即抢购></span>
      </div>
      <img :src="activity.imgSrc" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity: {
        title: '品质套餐',
        description: '搭配齐全吃得好',
        imgSrc:
          'https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed',
      },
    };
  },
};
</script>

<style lang="less" scoped>
.activity {
  padding: 0 @padding;
  padding-top: 2vw;
  width: 100vw-@padding*2;
  height: 30vw;
  background-color: white;
  overflow: hidden;
  .box {
    background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
    width: 90%;
    height: 24vw;
    padding: 3vw 5%;
    display: flex;
    .child {
      width: 60%;
      h1 {
        font-size: 0.96rem;
        color: rgba(71, 70, 70, 0.979);
        margin-bottom: 0.26666666666666666rem;
      }
      p {
        font-size: 0.64rem;
        color: rgba(119, 113, 113, 0.897);
      }
      span {
        font-size: 0.64rem;
        color: #af8260;
        font-weight: 700;
      }
    }
    img {
      width: 40%;
    }
  }
}
</style>
