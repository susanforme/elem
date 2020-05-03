<template>
  <div class="fa">
    <div class="tags">
      <div
        class="tag"
        v-for="(tag, index) in tags"
        :key="index"
        :class="{ gray: tag.name === '差评' }"
      >
        {{ tag.name }} {{ tag.count | trueCount }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
    },
  },
  filters: {
    trueCount(value) {
      if (value > 0) {
        return value;
      }
      return '';
    },
  },
};
</script>

<style lang="less" scoped>
.fa {
  padding: 0 2 * @padding;
  background-color: white;
}
.tags {
  margin-top: 2vw;
  display: flex;
  height: 7vw;
  line-height: 7vw;
  padding: 2 * @padding 0;
  border-bottom: 1px solid @border;
  > .tag {
    box-sizing: border-box;
    font-size: 12px;
    padding: 0 3vw;
    margin-right: 2vw;
    background-color: #ebf5ff;
    border-radius: 3px;
    color: @gray;
  }
  > .tag:first-child {
    color: white;
    background-color: #0097ff;
  }
  > .gray {
    background-color: #f5f5f5;
  }
}
</style>
