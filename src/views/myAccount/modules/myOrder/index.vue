<template>
  <div class='my_order'>
      <!-- 状态筛选 -->
      <div class='order_nav'>
          <p 
          v-for='(item, index) in navList'
          :key='index'
          :class='{active: navTabIndex === index}' 
          @click='handleClick(index)'>{{item.title}}</p>
          <el-select v-model="value1" @change='handleSaleTypeChange'>
              <el-option
                v-for="(item, index) in options1"
                :key="index"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
          <el-select v-model="value2" @change='handleOrderTypeChange'>
            <el-option
                v-for="(item, index) in options2"
                :key="index"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
      </div>
      <!-- 订单表头 -->
      <div class='order_head'>
          <div class='order_head_left'>
              商品
          </div>
          <div class='order_head_right'>
              <span>单价</span>
              <span>定金</span>
              <span>小计</span>
              <span>状态</span>
              <span>操作</span>
          </div>
      </div>
    <!-- 订单列表 -->
      <div class='order_list_wrap'>
          <!-- 单个订单组件 -->
          <div class='order_item' v-for='(item, index) in orderList' :key='index'>
            <div class='order_item_head'>
                <p>订单编号: <span>{{item.orderNum}}</span></p>
                <p>联系卖家</p>
            </div>
            <div class="order_item_body">
                <div class='item_body_left'>
                    <img class='goods_img' :src="require('../../../../assets/goods.png')">
                    <div class='goods_text'>
                        <p class='goods_text_name'>{{'商品名'.repeat(5) + ''}}</p>
                        <p class='goods_text_num'>购买数量： 12</p>
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
                    <span v-show='item.status === 1'>待付款</span>
                    <span v-show='item.status === 2'>待确认</span>
                    <span v-show='item.status === 3'>待发货</span>
                    <span v-show='item.status === 4'>待收货</span>
                    <span v-show='item.status === 5'>待评价</span>
                    <span v-show='item.status === 6'>交易完成</span>
                    <div class='operate_bar'>
                        <span @click='goToOrderDetail(item.status)'>查看</span>
                        <span @click='modifyOrder' v-show='item.status === 1'>订单修改</span>
                        <span @click='toPlaceOrder(item.status)' v-show='item.status === 1'>提交订单</span>
                        <span v-show='item.status ===1 || item.status === 2 || item.status === 3 || item.status ===4'>取消订单</span>
                        <span v-show='item.status ===5 && item.isReview === false'>去评价</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <!-- 订单列表页修改订单弹窗 -->
      <div class='modify_order' v-show='isModifyVisible'>
          <div>
              <p>原有信息</p>
              <p>购买数量: <span>10个</span></p>
              <p>商品价格: <span>999</span></p>
              <p>交易日期: <span>2020-05-29</span></p>
              <div class='modify_to'>
                  <p>修改为</p>
                  <el-form label-position="left" label-width="80px">
                      <el-form-item label="购买数量">
                          <el-input></el-input>
                      </el-form-item>
                      <el-form-item label="商品价格">
                          <el-input></el-input>
                      </el-form-item>
                      <el-form-item label="交易日期">
                        <el-date-picker
                          v-model="value1"
                          type="date"
                          toPlaceOrder="选择日期">
                          </el-date-picker>
                      </el-form-item>
                  </el-form>
              </div>
              <div class='buttons'>
                  <div @click='handleCancel'>取消</div>
                  <div @click='handleModifyOrder'>提交</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            sale_type: 1,
            isModifyVisible: false,
            value: 0,
            value1: '',
            value2: '',
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
            ],
            orderList: [
                {
                    isReview: false,
                    status: 1
                },
                {
                    isReview: false,
                    status: 2
                },
                {
                    isReview: false,
                    status: 3
                },
                {
                    isReview: false,
                    status: 4
                },
                {
                    isReview: false,
                    status: 5
                },
                {
                    isReview: true,
                    status: 6
                }

            ],
            orderList2: [
                {
                    isReview: false,
                    status: 6
                },
                {
                    isReview: false,
                    status: 1
                },
                {
                    isReview: false,
                    status: 2
                },
                {
                    isReview: false,
                    status: 4
                },
                {
                    isReview: false,
                    status: 5
                },
                {
                    isReview: true,
                    status: 3
                }

            ],
            options1: [
                {
                    value: '我购买的',
                    label:' 我购买的'
                },
                {
                    value: '我卖出的',
                    label:' 我卖出的'
                }
            ],
            options2: [
                {
                    value: '拼购',
                    label: '拼购'
                },
                {
                    value: '立即下单',
                    label: '立即下单'
                }
            ]
        }
    },
    created () {
        this.http.get('/api/order/getMemberOrderPage').then(res => {
            console.log(res)
        })
    },
    filters: {

    },
    computed: {
    },
    methods: {
        handleClick (index) {
            this.navTabIndex = index
        },
        goToOrderDetail (status) {
            this.$router.push({
                name: 'orderDetail',
                query: {
                    status
                }
            })
        },
        handleCancel () {
            this.isModifyVisible = false
        },
        modifyOrder () {
            this.isModifyVisible = true
        },
        handleModifyOrder () {
            this.isModifyVisible = false
        },
        handleSaleTypeChange (value) {
            if(value === '我卖出的') {
                this.orderList = this.orderList2
            } else {
                this.orderList = this.orderList
            }
        },
        handleOrderTypeChange (value) {
            console.log(value)
        },
        toPlaceOrder (status) {
            this.$router.push({
                path: 'order-detail',
                query: {
                    status
                }
            })
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
        .el-select {
            width: 200px;
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
                        .goods_text_name {
                            font-size: 15px;
                            margin-bottom: 5px;
                            padding-right: 44px;
                        }
                        .goods_text_num {
                            font-size: 14px;
                            margin-bottom: 5px;
                            margin-bottom: 14px;
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
                        // justify-content: space-around;
                        >span {
                            color: #3F99F4;
                            cursor: pointer;
                            text-decoration: underline;
                        } 
                    }
                }
            }
        }
    }
    .modify_order {
       position: fixed;
       top: 0;
       right: 0;
       left:0;
       bottom: 0;
       background-color: rgba(0, 0, 0, 0.4);
       >div {
            padding-left: 140px;
           margin: 50px auto;
           width: 600px;
           height: 615px;
           background-color: #fff;
           padding-top: 57px;
           color: #333;
           >p:first-child {
               font-weight: 600;
               color: #000;
           }
           >p {
               margin-bottom: 22px;
           }
           .modify_to {
               margin-top: 50px;
              >p:first-child {
                  font-weight: 600;
                  margin-bottom: 26px;
              }
              .el-form-item {
                  /deep/ .el-input {
                      width: 270px;
                  }
              }
           }
           .buttons {
               display: flex;
               >div {
                   text-align: center;
                   width: 170px;
                   height: 48px;
                   line-height: 48px;
                   background-color: #FFC90F;
                   margin-right: 20px;
                   cursor: pointer;
               }  
               >div:first-child {
                   background-color: #D9D9D9;
               }
           }
       }
    }
   
}
</style>