<template>
  <div>
    <single-shop-container v-bind="data"></single-shop-container>
  </div>
</template>

<script>
import singleShopContainer from './singleShopContainer';
export default {
  components: {
    singleShopContainer,
  },
  data() {
    return {
      data: {
        title: '喜心肥肠血旺(龙湖北城天街店)',
        score: 5,
        sales: 57,
        lowestPrice: 15,
        deliveryFee: 1,
        imgSrc:
          'https://cube.elemecdn.com/a/73/0ce0793eda313c62417b29450884bjpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed',
        distance: 52,
        wasteTime: 30,
        id: 1,
        description: '川湘菜',
        activities: [[35, 12], 3],
      },
    };
  },
};
</script>

<style lang="less" scoped></style>
