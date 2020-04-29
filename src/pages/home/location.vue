<template>
  <div class="location">
    <back-navigation
      :customStyle="{
        backgroundImage: 'linear-gradient(90deg,#0af,#0085ff)',
        padding: '0 2vw',
        color: 'white',
      }"
    >
      <template #title>
        选择收货地址
      </template>
    </back-navigation>
  </div>
</template>

<script>
import backNavigation from '@/components/backNavigation';
import axios from '@/api';
import { mapActions } from 'vuex';
export default {
  name: 'location',
  components: {
    backNavigation,
  },
  created() {
    const _this = this;
    axios.get('/location').then((res) => {
      const data = res.data;
      _this.initLocaionList(data);
      _this.changeStatus(200);
    });
  },
  methods: {
    ...mapActions('home/location', ['initLocaionList', 'changeStatus']),
  },
};
</script>

<style lang="less" scoped>
.location {
  background-color: white;
}
</style>
