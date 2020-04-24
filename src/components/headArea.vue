<template>
  <div class="head">
    <div class="top">
      <font-awesome-icon icon="map-marker-alt" />
      {{ location }}
    </div>
    <div class="btn-father" :class="{ fixed: isFixed }">
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
    isFixed() {
      console.log();
      if (
        this.currentPosition >
        (document.documentElement.clientWidth / 100) * 11.5
      ) {
        return true;
      }
      return false;
    },
    ...mapState(['location', 'currentPosition']),
  },
};
</script>

<style lang="less" scoped>
.head {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  height: 23vw;
  width: 100%;
  .top {
    color: white;
    font-weight: 700;
    height: 8vw;
    line-height: 8vw;
    font-size: 0.96rem;
    padding: 1.5vw 5%;
    padding-top: 2vw;
    width: 90%;
  }
  .btn-father {
    width: 90%;
    position: relative;
    height: 12vw;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    padding: 1.5vw 5%;
    padding-bottom: 0.1vw;
    .btn {
      height: 10vw;
      line-height: 10vw;
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
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>
