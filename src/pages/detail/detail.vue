<template>
  <div class="detail">
    <nav-area :imgSrc="rst['image_path']"></nav-area>
  </div>
</template>

<script>
import navArea from '@/components/detail/navArea';
import axios from '@/api';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    navArea,
  },
  computed: {
    ...mapState('detail', ['menu', 'rst']),
  },
  methods: {
    ...mapActions('detail', ['initMenu', 'initRst', 'changeStatus']),
  },
  created() {
    const id = this.$route.query.id;
    const _this = this;
    if (!id) {
      this.$router.push('/');
    } else {
      axios.get(`detail?id=${id}`).then((res) => {
        const data = res.data;
        _this.initMenu(data.menu);
        _this.initRst(data.rst);
        _this.changeStatus(200);
      });
    }
  },
};
</script>

<style lang="less" scoped></style>
