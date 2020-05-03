<template>
  <div class="evalute">
    <score-rank :rating="comments.rating"></score-rank>
    <comments-tags :tags="comments.tags"></comments-tags>
  </div>
</template>

<script>
import scoreRank from './scoreRank';
import commentsTags from './commentsTags';
export default {
  props: {
    comments: {
      type: Object,
    },
  },
  components: {
    scoreRank,
    commentsTags,
  },
};
</script>

<style lang="less" scoped></style>
