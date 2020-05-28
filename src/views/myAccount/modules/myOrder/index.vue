<template>
  <div class='my_order'>
      <!-- 状态筛选 -->
      <div class='order_nav'>
          <p 
          v-for='(item, index) in navList'
          :key='index'
          :class='{active: navTabIndex === index}' 
          @click='handleClick(index)'>{{item.title}}</p>
          <el-select></el-select>
          <el-select></el-select>
      </div>
      <!-- 订单表头 -->
      <div class='order_head'>
          <div class='order_head_left'>
              商品
          </div>
          <div class='order_head_right'>
              <span>单价</span>
              <span>剩余</span>
              <span>小计</span>
              <span>状态</span>
              <span>操作</span>
          </div>
      </div>
    <!-- 订单列表 -->
      <div class='order_list_wrap'>
          <!-- 单个订单组件 -->
          <div class='order_item' v-for='i in 10' :key='i'>
            <div class='order_item_head'>
                <p>订单编号: <span>{{item.orderNum}}</span></p>
                <p>联系卖家</p>
            </div>
            <div class="order_item_body">
                <div class='item_body_left'>
                    <img class='goods_img' :src="require('../../../../assets/goods.png')">
                    <div class='goods_text'>
                        <p>{{'商品名称'.repeat(5)}}</p>
                        <p>
                            <span>拼</span>
                            <span>可售时间段{{20180912}}至{{20190603}}</span>
                        </p>
                    </div>
                </div>
                <div class="item_body_right">
                    <span>19999.00</span>
                    <span>99999</span>
                    <span>17450.00</span>
                    <span>待付款</span>
                    <div class='operate_bar'>
                        <span>查看</span>
                        <span>订单修改</span>
                        <span>立即付款</span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            value: 0,
            navTabIndex: 0,
            item: {
                orderNum:195458495669
            },
            navList: [
                {title: '全部订单'},
                {title: '待付款'},
                {title: '待发货'},
                {title: '待收货'},
                {title: '待评价'}
            ]
        }
    },
    methods: {
        handleClick (index) {
            this.navTabIndex = index
        }
    }
}
</script>

<style lang='less' scoped>
.my_order {
    .order_nav {
        display: flex;
        justify-content: space-between;
        height: 49px;
        font-size: 18px;
        line-height: 49px;
        padding-left: 32px;
        padding-right: 21px;
        p {
            padding-bottom: 13px;
            border-bottom: 2px solid #fff;
            cursor: pointer;
            font-weight: 500;
        }
        p.active {
            color: #FFC90FFF;
            border-bottom: 2px solid #FFC90FFF;
        }
    }
    .order_head {
        height: 50px;
        background-color: #F5F5F5FF;
        font-size: 16px;
        color: #333333FF;
        display: flex;
        line-height: 50px;
        padding-right: 65px;
        margin-bottom: 27px;
        .order_head_left {
            padding-left: 40px;
            width: 410px;
        }
        .order_head_right {
            display: flex;
            justify-content: space-between;
            flex-grow: 1;
        }
    }
    .order_list_wrap {
        padding-left: 17px;
        padding-right: 21px;
        .order_item {
            height: 180px;
            border: 1px solid #EAF8FF;
            margin-bottom: 12px;
            .order_item_head {
                display: flex;
                justify-content: space-between;
                height: 40px;
                padding-left: 23px;
                padding-right: 27px;
                line-height: 40px;
                background-color: #EAF8FFFF;
                p:last-child {
                    padding-left: 24px;
                    color: #3F99F4FF;
                    background-image: url('../../../../../src/assets/message.png');
                    background-repeat: no-repeat;
                    background-size: 18px 17px;
                    background-position: 0 12px;
                    cursor: pointer;
                }
            }
            .order_item_body {
                display: flex;
                height: 140px;
                color: #333;
                .item_body_left {
                    display: flex;
                    width: 393px;
                    height: 140px;
                    padding-top: 29px;
                    padding-left: 23px;
                    .goods_img {
                        width: 80px;
                        height: 80px;
                        margin-right: 16px;
                    }
                    .goods_text {
                        flex: 1;
                        >p:first-child {
                            font-size: 16px;
                            margin-bottom: 20px;
                            padding-right: 44px;
                        }
                        >p:last-child {
                            font-size: 14px;
                            >span:first-child {
                                background-color: #FFC90F;
                                color: #fff;
                                padding: 2px;
                                border-radius: 2px;
                                margin-right: 8px;
                            }
                        }
                    }
                }
                .item_body_right {
                    padding-top: 30px;
                    text-align: center;
                    display: flex;
                    justify-content: space-between;
                    width: 491px;
                    height: 140px;
                    .operate_bar {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        >span {
                            color: #3F99F4;
                            cursor: pointer;
                        } 
                    }
                }
            }
        }
    }
   
}
</style>