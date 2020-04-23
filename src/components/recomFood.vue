<template>
  <div class="food">
    <min-foodtry
      v-for="(foodtry, index) in foodtrys"
      :key="index"
      :imgData="foodtry"
    ></min-foodtry>
  </div>
</template>

<script>
import minFoodtry from './minFoodtry';
export default {
  components: {
    minFoodtry,
  },
  data() {
    return {
      foodtrys: [
        {
          src:
            'https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '美食',
        },
        {
          src:
            'https://cube.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '晚餐',
        },
        {
          src:
            'https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '跑腿代购',
        },
        {
          src:
            'https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '汉堡披萨',
        },
        {
          src:
            'https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '甜品饮品',
        },
        {
          src:
            'https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '速食简餐',
        },
        {
          src:
            'https://cube.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '地方小吃',
        },
        {
          src:
            'https://cube.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '米粉面馆',
        },
        {
          src:
            'https://cube.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '包子粥店',
        },
        {
          src:
            'https://cube.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '炸鸡炸串',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.food {
  padding: 0 @padding;
  background: white;
  height: 45vw;
  display: flex;
  flex-wrap: wrap;
  width: 96vw;
  padding-top: 1vw;
}
</style>
