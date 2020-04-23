<template>
  <div class="head">
    <div class="top">
      <font-awesome-icon icon="map-marker-alt" />
      {{ location }}
    </div>
    <div class="btn-father" style="position:fixed;top:0">
      <div class="btn" @click="jump">{{ data.placeholder }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {},
  props: {
    data: {
      type: Object,
    },
    jump: {
      type: Function,
    },
  },
  computed: {
    ...mapState(['location']),
  },
};
</script>

<style lang="less" scoped>
.head {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  height: 23vw;
  width: 92vw;
  padding: 1.5vw 4vw;
  .top {
    width: 90vw;
    color: white;
    font-weight: 700;
    height: 10vw;
    line-height: 10vw;
    font-size: 0.96rem;
    padding-top: 2vw;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    padding: 1vw;
  }
  .btn-father {
    width: 100%;
    position: relative;
    top: 2.3vw;
    .btn {
      height: 10vw;
      line-height: 10vw;
      width: 100%;
      box-sizing: border-box;
      border: none;
      background-color: white;
      outline: none;
      border: 0.10666666666666667rem;
      text-align: center;
      color: rgba(0, 0, 0, 0.212);
      font-size: 0.8533333333333334rem;
    }
  }
}
</style>
