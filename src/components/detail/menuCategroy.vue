<template>
  <div class="fa">
    <div class="category" ref="menuCategroy" :class="{ fixed: isFixed }">
      <a
        :href="'#' + item.id"
        class="go"
        v-for="(item, index) in category"
        :key="index"
        :class="{ active: item.id === trueId }"
        @click="goOther(item.id)"
        >{{ item.name }}</a
      >
    </div>
    <div class="position" v-show="isFixed"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
//在isfixed为true的时候用个data缓存true
export default {
  props: {
    category: {
      type: Array,
      default() {
        return [{}];
      },
    },
  },
  data() {
    return {
      id: 0,
      top: 0,
      wasItRight: false,
    };
  },
  computed: {
    trueId() {
      if (this.id) {
        return this.id;
      }
      if (this.category <= 1) {
        return 0;
      }
      return this.category[0].id;
    },
    ...mapState('home', ['currentPosition']),
    isFixed() {
      if (this.top !== 0 && this.currentPosition > this.top) {
        return true;
      }
      return false;
    },
  },
  methods: {
    goOther(id) {
      this.id = id;
    },
  },
  mounted() {
    this.top =
      this.$refs['menuCategroy'].offsetTop -
      0.14 * document.documentElement.clientWidth;
  },
  watch: {
    isFixed() {
      if (this.isFixed) {
        this.wasItRight = true;
      }
    },
    immediate: true,
  },
};
</script>

<style lang="less" scoped>
.fa {
  flex: 1;
}
.category {
  font-size: 12px;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  @height: 4vh;
  .go {
    padding: 1.5 * @padding;
    padding-right: @padding;
    text-decoration: none;
    outline: none;
    display: block;
    height: @height;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(107, 106, 106);
    &:active {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
  }

  > .active {
    background-color: white;
    > .go {
      color: black;
      font-weight: 550;
    }
  }
}
.fixed {
  .category();
  position: fixed;
  top: 14vw;
  z-index: 3;
  width: 22%;
}
.position {
  .category();
}
</style>
