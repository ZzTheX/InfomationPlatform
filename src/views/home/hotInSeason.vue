<template>
  <div class='best_in_season'>
    <h2>hot in season</h2>
    <!-- <productCard v-for='item in 15' :key='item'></productCard> -->
  </div>
</template>
<script>
// import productCard from './productCard.vue'
export default {
  data () {
    return {}
  },
  components: {
    // productCard
  }
};
</script>
<style lang="less" scoped>
  .best_in_season {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }
</style>
