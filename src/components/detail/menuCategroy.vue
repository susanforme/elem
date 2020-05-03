<template>
  <div class="category">
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
</template>

<script>
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
  },
  methods: {
    goOther(id) {
      this.id = id;
    },
  },
};
</script>

<style lang="less" scoped>
.category {
  font-size: 12px;
  height: 100vh;
  flex: 1;
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
</style>
