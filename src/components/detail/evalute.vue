<template>
  <div class="evalute">
    <score-rank :rating="comments.rating"></score-rank>
  </div>
</template>

<script>
import scoreRank from './scoreRank';
export default {
  props: {
    comments: {
      type: Object,
    },
  },
  components: {
    scoreRank,
  },
};
</script>

<style lang="less" scoped></style>
