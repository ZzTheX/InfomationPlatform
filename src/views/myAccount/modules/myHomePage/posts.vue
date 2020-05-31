<template>
  <div class='my_posts'>
    <div class='supply_info'>
     <el-select v-model="value" placeholder="供应信息">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
     </el-select>
    </div>
    <div class='goods_card_list'>
      <goods-card v-for='i in 24' :key='i'></goods-card>
    </div>
  </div>
</template>

<script>
import goodsCard from '../../../../components/goodsComponents/mini-goods-card'
export default {
  data () {
    return {
      value: '供应信息',
      options: [
        {value: '供应信息', label: '供应信息'},
        {value: '需求信息', label: '需求信息'}
      ],
      prodData: []
    }
  },
  created () {
    let haha = this
    this.http.get('/prodData').then(function(res){
      let { data } = res.data
      console.log('posts组件返回数据: ' , data)
      haha.prodData = data

    })
  },
  components: {
    'goods-card': goodsCard
  }
}
</script>

<style lang='less'>
.my_posts {
  width: 100%;
  background-color: #fff;
  .supply_info {
    display: flex;
    flex-direction: row-reverse;
    height: 46px;
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;
    .el-select {
      width: 120px;
      border-color: #fff;
    }
    .el-input .el-input--suffix {
      border-color: #fff;
    }
    .el-select .el-input__inner {
      border-color: #fff;
    }
    .el-select .el-input__inner:focus {
      border-color: #fff;
    }
    .el-select-dropdown__item.selected {
      color: #333333;
    }
  }
  .goods_card_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    width: 100%;
    padding: 17px 0 26px 17px;
  }
}
</style>
