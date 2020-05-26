<template>
  <div class='groupon'>
      <div class='groupon_table_head'>
          <div class='head_left'>商品</div>
          <div class='head_right'>
              <p>单价</p>
              <p>数量</p>
              <p>小计</p>
              <p>状态</p>
              <p>操作</p>
          </div>
      </div>
      <div class='groupon_main_content'>
          <div class='order_item' v-for='item in 6' :key='item'>
              <div class='order_item_head'>
                  <p class='groupon_detail'>已拼团300000kg，还差<span style='color:#DD3232FF'>30000kg</span></p>
                  <p class='contact'>联系买家</p>
              </div>
              <div class='order_item_body'
                   @click='goToGrouponDetail()'>
                    <div class='order_item_body_left'>
                        <img :src="goodsImg" alt="">
                        <div class='goods_intro'>
                            <p>{{'商品名称'.repeat(6)}}</p>
                            <p>可售时间段: 2020-05-22至2020-06-20</p>
                        </div>
                    </div>
                    <div class='order_item_body_right'>
                        <div class='order_detail'>
                            <span>¥199.00</span>
                            <span>999个</span>
                            <span>¥199.00</span>
                            <span>待成团</span>
                            <span>已支付</span>
                        </div>
                        <p>最晚成团日期：2020-02-13</p>
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
            goodsImg: require('../../../../assets/goods.png')
        }
    },
    methods: {
      goToGrouponDetail () {
        this.$router.push()
      }
    }
}
</script>

<style lang='less' scoped>
.groupon {
    .groupon_table_head {
        display: flex;
        height: 50px;
        padding-left: 17px;
        padding-right: 21px;
        border-bottom: 1px solid #E6E6E6FF;
        color: #333333FF;
        line-height: 50px;
        .head_left {
            width: 404px;
            padding-left: 23px;
        }
        .head_right {
            flex-grow: 1;
            display: flex;
            justify-content: space-evenly;
            padding-left: 5px;
        }
    }
    .groupon_main_content {
        padding: 26px 21px 0 17px;
        .order_item {
            background:rgba(234,248,255,1);
            line-height: 42px;
            margin-bottom: 25px;
            .order_item_head {
                display: flex;
                justify-content: space-between;
                padding-right: 25px;
                .groupon_detail {
                    padding-left: 53px;
                    background-image: url('../../../../assets/fire.png');
                    background-repeat: no-repeat;
                    background-size: 20px 24px;
                    background-position: 24px 10px;
                }
                .contact {
                    padding-left: 24px;
                    color: #3F99F4FF;
                    background-image: url('../../../../assets/message.png');
                    background-repeat: no-repeat;
                    background-size: 18px 17px;
                    background-position: 0px 13px;
                    cursor: pointer;
                }
            }
            .order_item_body {
                display: flex;
                height: 140px;
                padding-top: 32px;
                padding-bottom: 29px;
                border: 1px solid #EAF8FFFF;
                background-color: #fff;
                .order_item_body_left {
                    display: flex;
                    width: 404px;
                    height: 80px;
                    padding-left: 23px;
                    color: #000000FF;
                    img {
                        width: 80px;
                        height: 80px;
                    }
                    .goods_intro {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding-left: 17px;
                        line-height: 24px;
                        p:first-child {
                            padding-right: 56px;
                        }
                    }
                }
                .order_item_body_right {
                    flex-grow: 1;
                    .order_detail {
                        display: flex;
                        justify-content: space-evenly;
                    }
                    p {
                        padding-left: 170px;
                    }

                }
            }

        }
    }
}
</style>
