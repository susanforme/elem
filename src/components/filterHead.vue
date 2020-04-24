<template>
  <div class="filter" :class="{ fixed: isFixed }">
    <div @click="goDetail" :class="{ primary: isShowMask }">
      {{ sorts[index] }} <font-awesome-icon icon="angle-down" />
      <div class="list anima" :class="{ animation: isShowMask }">
        <ul>
          <li v-for="(sort, index) in sorts" :key="index">{{ sort }}</li>
        </ul>
      </div>
    </div>
    <div>距离最近</div>
    <div>销量最高</div>
    <div>筛选 <font-awesome-icon icon="filter" /></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      sorts: [
        '综合排序',
        '好评优先',
        '起送价最低',
        '配送最快',
        '配送费最低',
        '人均从低到高',
        '人均从高到低',
      ],
      index: 0,
    };
  },
  methods: {
    goDetail() {
      const height = 108 * (document.documentElement.clientWidth / 100);
      this.changeMaskStatus(true);
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo(0, height);
    },
    ...mapMutations(['changeMaskStatus']),
  },
  computed: {
    ...mapState(['currentPosition', 'isShowMask']),
    isFixed() {
      const height = 107.6 * (document.documentElement.clientWidth / 100);
      if (this.currentPosition >= height) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="less" scoped>
.filter {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.7466666666666667rem;
  height: 10vw;
  line-height: 10vw;
  z-index: 10;
  > div {
    flex: 1;
  }
  svg {
    color: rgba(0, 0, 0, 0.288);
  }
}
.fixed {
  position: fixed;
  top: 13.6vw;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0 @padding;
}
.list {
  position: fixed;
  top: 23.6vw;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0 2 * @padding;
  z-index: 10;
  overflow: hidden;
  height: 0;
  opacity: 0;
  text-align: left;
  border-top: 1px solid rgba(0, 0, 0, 0.082);
  color: black;
  ul {
    li {
      list-style-type: none;
      height: 10vw;
      line-height: 10vw;
    }
  }
}
.anima {
  transition: all 0.5s ease-in;
}
.animation {
  height: 70vw;
  opacity: 1;
}
.primary {
  color: @primary;
  > svg {
    color: @primary;
  }
}
</style>
