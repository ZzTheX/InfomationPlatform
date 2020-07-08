<template>
  <div class='record'>
    <!-- <div class='record_list' v-for='i in browsingList' :key='i'> -->
      <!-- <p class='date'>{{i}}</p> -->
      <div class='goods_card_list'>
        <mini-goods-card v-for='(item, index) in browsingList' :key='index' :prodData='item'></mini-goods-card>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import miniGoodsCard from '../../../../components/goodsComponents/mini-goods-card'
export default {
  data () {
    return {
      browsingList: []
    }
  },
  created () {
      this.$store.commit('changeLeftSideTabIndex', 4)
      this.getBrowsingHistory()
  },
  methods: {
    getBrowsingHistory () {
      let data = {
        page_no: this.page_no,
        page_num: this.page_num
      }
      this.http.get('/api/member/history/getMemberBrowsingHistory').then(res => {
        console.log('浏览记录', res)
        if(res.data.code === 200) {
          this.browsingList = res.data.result.rows
        }
      })
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
