<template>
  <div class="my_post">
    <div class='head'>
      <el-select placeholder="供应信息" v-model="value">
        <el-option 
          v-for='(item, index) in options' :key='index'
          :label="item.label"
          :value="item.value"></el-option>
      </el-select>
    </div>
    <div class='prod_card_list'>
      <goodsCard v-for='i in 8' :key='i'></goodsCard>
    </div>
  </div>
</template>

<script>
import goodsCard from '../../components/goodsComponents/mini-goods-card'
export default {
  data () {
    return {
      value: '',
      options: [
        {
          label: '供应信息',
          value: '供应信息'
        },
        {
          label: '采购信息',
          value: '采购信息'
        },
        {
          label: '全部',
          value: '全部'
        }
      ]
    }
  },
  components: {
    goodsCard
  },
  methods: {
    getProductList () {
      let paramas = {
        
      }
      this.http({
        url: '/api/product/getMemberProductList',
        method: 'get',
        paramas
      }).then(res => {
        console.log('发布的产品', res)
      })
    }
  }
}
</script>

<style lang='less' scoped>
.my_post {
  .head {
    height: 52px;
    border-bottom: 1px solid #F0F0F0FF;
    /deep/ .el-select {
      float: right;
      width: 140px;
      .el-input__inner {
        border: none;
      }
    }
  }
  .prod_card_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    padding: 17px 18px 17px 18px;
  }
}
</style>
