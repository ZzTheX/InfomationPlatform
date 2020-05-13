<template>
  <div class='my_order'>
      <div class='order_nav'>
          <p 
          v-for='(item, index) in navList'
          :key='index'
          :class='{active: navTabIndex === index}' 
          @click='handleClick(index)'>{{item.title}}</p>
          <el-select></el-select>
          <el-select></el-select>
      </div>
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

      <div class='order_list_wrap'>
          <div class='order_item'>
            <div class='order_item_head'>
                <p>订单编号: <span>{{"item.orderNum"}}</span></p>
                <p>联系卖家</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            navTabIndex: 0,
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
        }
    }
   
}
</style>