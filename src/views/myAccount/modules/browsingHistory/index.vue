<template>
  <div class='record'>
    <div class='record_list' v-for='i in 3' :key='i'>
      <p class='date'>03.14</p>
      <div class='goods_card_list'>
        <mini-goods-card v-for='i in 5' :key='i'></mini-goods-card>
      </div>
    </div>
  </div>
</template>

<script>
import miniGoodsCard from '../../../../components/goodsComponents/mini-goods-card'
export default {
  data () {
    return {

    }
  },
  components: {
    miniGoodsCard
  }
}
</script>

<style lang='less' scoped>
.record {
  padding: 28px 20px 0 18px;
  .record_list {
    font-size: 30px;
    color: #333333;
    font-weight: 540;
    margin-bottom: 38px;
    .date {
      margin-bottom: 24px;
    }
    .goods_card_list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
