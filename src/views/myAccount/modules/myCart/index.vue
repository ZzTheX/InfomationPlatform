<template>
  <div class='my_cart'>
    <!-- 表头 -->
    <div class='table_head'>
      <div class='col_goods'>
         <el-checkbox></el-checkbox>
         <span>商品</span>
      </div>
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
            <!-- <el-checkbox @change='chooseCurrentGoods'></el-checkbox>
            <img class='goods_img' :src="goods.src" alt="">
            <div class="goods_title">
              <p>{{goods.title}}</p>
              <span>拼</span>
            </div> -->
            <div class='goods_title_img'>
              <el-checkbox></el-checkbox>
              <img :src="goods.imgSrc" width="80px" height="80px">
              <p>{{goods.title}}</p>
            </div>
            <p class='goods_price'>{{goods.price}}</p>
            <p class='goods_remaining'>{{goods.remaining}}</p>
            <div class='input_number'></div>
            <p class='price_total'></p>
            <p class='service_charge'>{{goods.charge}}</p>
            <p class='operate' @click='handleDelete'>删除</p>
          </div>
          <div class='row2'>
            <p class='trans_date'>交易日期</p>
             <el-date-picker
                size="mini"
                v-model="value1"
                type="date"
                placeholder="选择日期">
             </el-date-picker>
          </div>
          <div class='row3'>
            <p class='deposit_choose'>定金金额</p>
            <span @click='handleChooseDeposit(1000)'  :class='{active: deposit === 1000}'>1000</span>
            <span @click='handleChooseDeposit(5000)'  :class='{active: deposit === 5000}'>5000</span>
            <span @click='handleChooseDeposit(10000)' :class='{active: deposit === 10000}' >10000</span>
            <p>其他金额</p>
            <input type="text" placeholder="输入">
          </div>
      </div>
    </div>
    <!-- 结算条 -->
    <div class='settlement' ref='settlement'>
      <div class='choose_all'>
        <el-checkbox></el-checkbox>
        <span>全选</span>
      </div>
      <p class='delete'>删除</p>
      <p class='chosen_goods'>已选商品<span stlye='color:##FF4400'>{{goodsNum}}</span>件</p>
      <p class='goods_charge'>手续费<span>{{180.00}}</span></p>
      <p class='price_total'>合计<span>1900.00</span></p>
      <p class='settle_button'>结算</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deposit: 5000,
      goodsNum: 3,
      goodsData: [
        {
          name: '商家名称',
          goodsList: [
            {
              imgSrc: require('../../../../assets/goods1.png'),
              title: '商品名称商品名称称商品名称商品名称称商品名称称商品',
              price: '￥199.00',
              remaining: 6000,
              num: 100,
              total: '￥199.00',
              charge: '￥20.00'
            }
          ]
        },
        {
          name: '商家名称',
          goodsList: [
            {
              imgSrc: require('../../../../assets/goods1.png'),
              title: '商品名称商品名称称商品名称商品名称称商品名称称商品',
              price: '￥199.00',
              remaining: 6000,
              num: 100,
              total: '￥199.00',
              charge: '￥20.00'
            },
             {
              imgSrc: require('../../../../assets/goods1.png'),
              title: '商品名称商品名称称商品名称商品名称称商品名称称商品',
              price: '￥199.00',
              remaining: 6000,
              num: 100,
              total: '￥199.00',
              charge: '￥20.00'
            }
          ]
        }
      ],
      num: 1
    }
  },
  mounted () {
    // let dom = this.$refs.settlement
    // let offsetTop = dom.offsetTop
    // // 当结算条出现在浏览器视图之外时， 固定到下方
    // if (offsetTop > 1191) {
    //   dom.style.position = 'absolute'
    //   dom.style.top = '1190px'
    // }
  },
  methods: {
    chooseAllGoods () {

    },
    chooseCurrentGoods () {

    },
    handleDelete () {

    },
    handleChange () {

    },
    handleChooseDeposit (value) {
      this.deposit = value
    }
  }
}
</script>

<style lang='less' scoped>
.my_cart {
  width: 966px;
  height: 1240px;
  padding-top: 13px;
  padding-left: 17px;
  padding-right: 21px;
  position: relative;
  font-size: 16px;
  color: #333;
  // overflow: hidden;
  .table_head{
    width: 100%;
    height: 30px;
    font-size: 16px;
    color: #333;
    display: flex;
    border-bottom: 1px solid #E6E6E6;
    margin-bottom: 28px;
    text-align: center;
    .col_goods {
      width: 378px;
    }
    span:nth-child(2) {
      width: 95px;
    }
    span:nth-child(3) {
      width: 87px;
    }
    span:nth-child(4) {
      width: 127px;
    }
    span:nth-child(5) {
      width: 100px;
    }
    span:nth-child(6) {
      width: 83px;
    }
    span:nth-child(7) {
      width: 47px;
    }
  }
  .my_order_list {
    font-size: 16px;
    color: #333;
    margin-bottom: 25px;
    .seller {
      padding-left: 17px;
    }
    .my_order_item {
      height: 252px;
      background-color: #FFFAE8;
      padding-top: 24px;
      padding-left: 15px;
      margin-bottom: 10px;
      .row1 {
        display: flex;
        text-align: center;
        .goods_title_img {
          width: 378px;
          display: flex;
          img {
            margin-right: 15px;
          }
          p {
            text-align: left;
          }
        }
        .goods_price {
          width: 95px;
        }
        .goods_remaining {
          width: 87px;
        }
        .input_number {
          width: 127px;
        }
        .price_total {
          width: 100px;
        }
        .service_charge {
          width: 83px;
        }
        .operate {
          width: 47px;
          cursor: pointer;
        }

      }
      .row2 {
        display: flex;
        height: 40px;
        line-height: 40px;
        padding-left: 110px;
        margin-bottom: 22px;
        .trans_date {
          margin-right: 14px;
        }
      }
      .row3 {
        display: flex;
        padding-left: 110px;
        height: 40px;
        line-height: 40px;
        .deposit_choose {
          margin-right: 12px;
        }
        span {
          width: 96px;
          height: 40px;
          background-color: #fff;
          text-align: center;
          margin-right: 16px;
        }
        span.active {
          background-color: #FFC733;
        }
        input {
          margin-left: 21px;
          padding-left: 5px;
        }
      }
    }
  }
  .settlement {
    // position: absolute;
    // top: 1000px;
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #E5E5E5;
    padding-left: 17px;
    .choose_all {
      width: 68px;
      margin-right: 66px;
      span {
        padding-left: 19px;
        cursor: pointer;
      }
    }
    .delete {
      width: 110px;
      text-align: left;
    }
    .chosen_goods {
      text-align: right;
      width: 180px;
      margin-right: 17px;
    }
    .goods_charge {
      width: 157px;
      margin-right: 18px;
      text-align: center;
    }
    .price_total {
      margin-right: 22px;
      span {
        font-size: 26px;
        color: #f40;
        font-weight: bold;
      }
    }
    .settle_button {
      flex-grow: 1;
      font-size: 24px;
      text-align: center;
      background-color: #FFC733;
      cursor: pointer;
    }
  }
}
</style>
