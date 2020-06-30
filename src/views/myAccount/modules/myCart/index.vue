<template>
  <div class='my_cart'>
    <!-- 表头 -->
    <div class='table_head'>
      <div class='col_goods'>
         <el-checkbox v-model="isCheckAll" @change="handleCheckAll"></el-checkbox>
         <span>商品</span>
      </div>
      <span>单价</span>
      <span>剩余</span>
      <span>预定数量</span>
      <span>小计</span>
      <!-- <span>手续费</span> -->
      <span>操作</span>
    </div>
    <!--  -->
    <div v-if='false'>你的购物车空空如也。快去买点东西吧</div>
    <!-- 订单列表 -->
    <div class='my_order_list' ref='oderList' v-for='(item, index) in goodsList' :key='index'>
      <div class='seller'>
        <el-checkbox v-model='item.checked' @change='checkAllMerchants(item)'></el-checkbox>
        <span>{{item.merchant_name}}</span>
      </div>
      <!-- 商品卡片 -->
      <div class='my_order_item' :style="{background: goods.checked ? '#FFFAE8' : '#E6E6E6'}" v-for='(goods, i) in item.products' :key='i'>
          <div class='row1'>
            <div class='goods_title_img'>
              <el-checkbox v-model='goods.checked' @change="checkSingleProduct(item.products, index)"></el-checkbox>
              <img :src="goods.main_picture" width="80px" height="80px">
              <p>{{goods.product_name}}</p>
            </div>
            <p class='goods_price'>{{goods.supply_and_marketing_price}}</p>
            <p class='goods_remaining'>{{goods.available_inventory}}</p>
            <el-input-number size='small' class='input_number' v-model="goods.quantity" @change="handleChange"  label="描述文字"></el-input-number>
            <p class='price_total'>{{goods.supply_and_marketing_price * goods.quantity}}</p>
            <!-- <p class='service_charge'>{{goods.charge}}</p> -->
            <p class='operate' @click='handleDeleteGoodsInCart(goods.product_id)'>删除</p>
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
            <span @click='handleChooseDeposit(goods, 1000)'  :class='{active: goods.downpayment === 1000}'>1000</span>
            <span @click='handleChooseDeposit(goods, 5000)'  :class='{active: goods.downpayment === 5000}'>5000</span>
            <span @click='handleChooseDeposit(goods, 10000)' :class='{active: goods.downpayment === 10000}' >10000</span>
            <p>其他金额</p>
            <input type="text" placeholder="输入金额" v-model.number='goods.downpayment'>
          </div>
      </div>
    </div>
    <!-- 结算条 -->
    <div class='settlement' ref='settlement'>
      <div class='choose_all'>
        <el-checkbox @change='handleCheckAll' v-model='isCheckAll'></el-checkbox>
        <span>全选</span>
      </div>
      <p class='delete' @click='handleDeleteCheckedGoods'>删除</p>
      <p class='chosen_goods'>已选商品<span stlye='color:##FF4400'>{{totalCheckedGoodsNum}}</span>件</p>
      <!-- <p class='goods_charge'>手续费<span>{{180.00}}</span></p> -->
      <p class='price_total'>合计<span>{{totalPrice}}</span></p>
      <p class='settle_button' @click='goToOrderDetail'>结算</p>
    </div>
  </div>
</template>

<script>
import qs from 'querystring'
export default {
  data () {
    return {
      isCheckAll: false,
      deposit: 5000,
      arr: [],
      goodsList: [],
      num: 1
    }
  },
  created () {
    this.$store.commit('changeLeftSideTabIndex', 1)
    this.getMyCartList()
  },
  mounted () {
    
    console.log('goodslist:', this.goodsList)
  },
  methods: {
    setCheckedArtibutes () {
      this.goodsList.forEach((item) => {
        this.$set(item, 'checked', false)
        if(item.products) {
          item.products.forEach(j => {
            //  设置是否被选中属性
            this.$set(j, 'checked', false)
            // 设置默认商品数量为1
            this.$set(j, 'quantity', 1)
            // 设置用户选择的定金金额
            this.$set(j, 'downpayment', '')
          })
        }
      })
      console.log('goodsList', this.goodsList)
    },
    handleCheckAll (value) {
      console.log('checkall:', value)
      this.isCheckAll = value
      this.checkAllGoods()
    },
    //  全选所有商品
    checkAllGoods () {
      console.log('ckeckAllGoods', this.goodsList)
      this.goodsList.forEach(item => {
        item.checked = this.isCheckAll
        if(item.products && item.products.length >= 1) {
          item.products.forEach(item1 => {
            item1.checked = this.isCheckAll
          })
        }
      })
      console.log('ckeckAllGoods', this.goodsList)
    },
    //  全选当前商家下所有商品
    checkAllMerchants (val) {
        if(val.products && val.products.length >= 1) {
          val.products.forEach(item => {
            item.checked = val.checked
          })
        }
        if(this.goodsList.every(item => item.checked)) {
          this.isCheckAll = true
        } else {
          this.isCheckAll = false
        }
        
      // val.goodsList.forEach(item => {
      //           item.checked = val.checked;
      //       });
      //       if (this.data.every(item => item.checked)) {
      //           this.checkedAll = true;
      //       } else {
      //           this.checkedAll = false;
      //       }
    },
    // 选中单个商品
    checkSingleProduct (products, i) {
      if(products.every(item => item.checked)) {
        this.goodsList[i].checked = true
      } else {
        this.goodsList[i].checked = false
      }
       if(this.goodsList.every(item => item.checked)) {
          this.isCheckAll = true
        } else {
          this.isCheckAll = false
        }
    },
    getMyCartList () {
      this.http.get('/api/cart/getMemberCart').then(res => {
        console.log('购物车列表', res)
        if(res.data.code === 200) {
          this.goodsList = res.data.result
          this.setCheckedArtibutes()
        }
      })
    },
    chooseAllGoods () {

    },
    chooseCurrentGoods () {

    },
    // 删除单个商品
    handleDeleteGoodsInCart (product_id) {
      this.http.post('/api/cart/deleteCart', qs.stringify({product_ids: product_id}), {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(res => {
        if(res.data.code === 200) {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
        this.getMyCartList()
      })
    },
    // 删除选中商品
    handleDeleteCheckedGoods () {
      let checkedAllGoods = []
      this.goodsList.forEach(item => {
        if(item.products) {
         item.products.forEach((item1) => {
           if(item1.checked) {
             checkedAllGoods.push(item1)
           }
         })
        }
      })
      let product_ids = checkedAllGoods.map(item => {
        return item.product_id
      }).join(',')
      this.http({
        url: '/api/cart/deleteCart',
        method: 'post',
        data: qs.stringify({
          product_ids
        }),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(res => {
        if(res.data.code === 200) {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
        this.getMyCartList()
      })
    },
    handleChange () {

    },
    handleChooseDeposit (goods, value) {
     goods.downpayment = value
    },
    goToOrderDetail () {
      // 所有选中商品列表
      let checkedAllGoods = []
      this.goodsList.forEach(item => {
        if(item.products) {
          item.products.forEach(item1 => {
            if(item1.checked) {
              checkedAllGoods.push(item1)
            }
          })
        }
      })
      let isNotChooseDeposit = checkedAllGoods.some(item => {
        return item.downpayment <= 0 || item.downpayment === ''
      })
      // 判断是否有选中商品
      if(checkedAllGoods.length === 0) {
          this.$message({
            type: 'warning',
            message: '您还没有选择结算的商品, 请选择后提交'
          })
          return
      }

      if(isNotChooseDeposit) {
        this.$message({
          type: 'warning',
          message: '请选择定金金额(且金额大于0)'
        })
        return
      }
      this.$router.push({
        name: 'orderDetail',
        query: {
          status: 1
        }
      })
    }
  },
  computed: {
    totalGoodsNum () {
     return 123
    },
    totalCheckedGoodsNum () {
      let i = 0
      this.goodsList.forEach(item => {
        if(item.products && item.products.length >=1) {
          item.products.forEach(goods => {
            if(goods.checked) {
              i++
            }
          })
        }
      })
      return i 
    },
    totalPrice () {
      let arr = []
      this.goodsList.forEach(item => {
        if(item.products) {
          item.products.forEach(goods => {
            if(goods.checked) {
              arr.push(goods)
            }
          })
        }
      })
      let ammount = 0 
      arr.forEach(item => {
        ammount += (item.supply_and_marketing_price * item.quantity + item.downpayment*1)
      })
      return ammount
    }
  }
}
</script>

<style lang='less' scoped>
.my_cart {
  width: 966px;
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
      display: flex;
      padding-left: 16px;
      justify-content: flex-start;
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
          cursor: pointer;
        }
        span.active {
          background-color: #FFC733;
        }
        input {
          width: 180px;
          margin-left: 21px;
          padding-left: 10px;
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
      cursor: pointer;
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
