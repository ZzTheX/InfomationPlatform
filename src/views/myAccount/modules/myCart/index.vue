<template>
  <div class='my_cart'>
    <div class='table_head'>
      <el-checkbox></el-checkbox>
      <span>商品</span>
      <span>单价</span>
      <span>剩余</span>
      <span>预定数量</span>
      <span>小计</span>
      <span>手续费</span>
      <span>操作</span>
    </div>
    <!--  -->
    <div v-if='false'>你的购物车空空如也。快去买点东西吧</div>
    <!-- 订单列表 -->
    <div class='my_order_list' ref='oderList' v-for='(item, index) in goodsData' :key='index'>
      <div class='seller'>
        <el-checkbox @changae='chooseAllGoods'></el-checkbox>
        <span>{{item.name}}</span>
      </div>
      <!-- 商品卡片 -->
      <div class='my_order_item' v-for='(goods, i) in item.goodsList' :key='i'>
          <div class='row1'>
            <el-checkbox @change='chooseCurrentGoods'></el-checkbox>
            <img class='goods_img' :src="goods.src" alt="">
            <div class="goods_title">
              <p>{{goods.title}}</p>
              <span>拼</span>
            </div>
            <p class='price'>{{goods.price}}</p>
            <p class='remaining'>{{goods.remaining}}</p>
            <el-input-number
              size='mini'
              v-model="num"
              @change="handleChange"
              :min="1"
              :max="10" l></el-input-number>
            <p class='service_charge'>{{goods.charge}}</p>
            <p class='operate' @click='handleDelete'>删除</p>
          </div>
          <div class='row2'>
            <p>交易日期</p>
             <el-date-picker
                size="mini"
                v-model="value1"
                type="date"
                placeholder="选择日期">
             </el-date-picker>
          </div>
          <div class='row3'>
            <p>定金金额</p>
            <span></span>
            <span></span>
            <span></span>
            <p>其他金额</p>
            <input type="text">
          </div>
      </div>
    </div>
    <!-- 结算条 -->
    <div class='settlement'>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodsData: [
        {
          name: '商家名称',
          goodsList: [
            {
              imgSrc: require('../../../../assets/goods1.png'),
              title: '商品名称商品名称称商品名称商品名称',
              price: '￥199.00',
              remainnig: 600,
              num: 100,
              total: '￥199.00',
              charge: '￥20.00'
            },

          ]
        }
        // {

        // },
        // {

        // },
        // {

        // }
      ],
      num: 1
    }
  },
  methods: {
    chooseAllGoods () {

    },
    chooseCurrentGoods () {

    },
    handleDelete () {

    },
    handleChange () {

    }
  }
}
</script>

<style lang='less' scoped>
.my_cart {
  width: 966px;
  min-height: 1240px;
  padding-top: 13px;
  padding-left: 17px;
  padding-right: 21px;
  position: relative;
  font-size: 16px;
  color: #333;
  .table_head{
    width: 100%;
    height: 30px;
    font-size: 16px;
    color: #333;
    display: flex;
    border-bottom: 1px solid #E6E6E6;
    margin-bottom: 28px;
    span:nth-child(2) {
      margin-right: 325px;
    }
    span:nth-child(3) {
      margin-right: 55px;
    }
    span:nth-child(4) {
      margin-right: 57px;
    }
    span:nth-child(5) {
      margin-right: 66px;
    }
    span:nth-child(6) {
      margin-right: 50px;
    }
    span:nth-child(7) {
      margin-right: 34px;
    }
  }
  .my_order_list {
    .seller {
      padding-left: 17px;
    }
    .my_order_item {
      height: 252px;
      background-color: #FFFAE8;
      padding-left: 15px;
      .row1 {
        display: flex;
        img {
          width: 80px;
          height: 80px;
          margin-left: 12px;
          margin-right: 15px;
        }
        .goods_title {
          p {
            width: 218px;
            // text-overflow: wrap;
            // word-break: break-all;
          }
        }
        .price {
          // margin-right: 27px;
        }
        .remaining {
          margin-right: 27px;
        }
      }
      .row2 {
        display: flex;
      }
      .row3 {
        display: flex;
      }
    }
  }
  .settlement {
    // position: absolute;
    // top: 1000px;
    width: 100%;
    height: 60px;
    background-color: #E5E5E5;
  }
}
</style>
