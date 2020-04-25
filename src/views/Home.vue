<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import home from '@/pages/home';
import { createNamespacedHelpers } from 'vuex';
import axios from '@/api';

const { mapMutations, mapState, mapActions } = createNamespacedHelpers('home');
export default {
  components: {
    home,
  },
  destroyed() {
    this.changeMaskStatus(false);
    document.documentElement.style.overflow = '';
  },
  methods: {
    ...mapMutations(['changeMaskStatus']),
    ...mapActions(['changeDataStatus', 'initFoodtrys', 'initActivities']),
  },
  created() {
    const _this = this;
    if (this.status !== 200) {
      axios.get('/home').then((res) => {
        const data = res.data;
        console.log(data);
        _this.initFoodtrys(data.foodtrys);
        _this.initActivities(data.activities);
        _this.changeDataStatus(200);
      });
    }
  },
  computed: {
    ...mapState(['data', 'status']),
  },
};
</script>

<style lang="less" scoped></style>
