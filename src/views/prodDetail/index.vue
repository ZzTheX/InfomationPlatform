<template>
  <div class='wrap'>
    <div class='prod_detail'>
      <div class='prod_card'>
            <div class='prod_card_left'>
              <img src="../../assets/prod_detail.png" alt="">
              <div class='thumbnails'>
                  <img src='../../assets/prod_mini.png' v-for='i in 5' :key='i'>
              </div>
            </div>
            <!-- 此处商品详情需求描述与供应描述不一致 通过v-if切换 -->
            <!-- 供应描述 -->
            <div class="prod_card_right">
                <p class='prod_title'>OLAY熬夜黄金酵母面膜菁醇青春密集修护面膜女补水保湿滋润烟酰胺OLAY熬夜黄金酵母面膜菁醇</p>
                <div class='price_info'>
                    <p class='price'>预售价格<span>{{" ￥799.00"}}</span></p>
                    <p class='sell_time'>预售时间：2020-02-01至2020-3-12</p>
                    <p class='store_info'>
                      <span>剩余数量:999</span>
                      <span>已售数量：1000000</span>
                      <span>总数量：10000</span>
                    </p>
                    <p class='earnest_money'>
                      <span>最小起批数量：1</span>
                      <span>期望定金：￥5000</span>
                    </p>
                    <hr style='color:#E6E6E6;margin-bottom:20px'/>
                    <p class='groupon_info'>
                      <span>支持散装拼团</span>
                      <span>单人(地址)最小购买数量：2</span>
                      <span>最低成团数量：50000</span>
                    </p>
                    <hr style='color:#E6E6E6;margin-bottom:14px'>
                    <p>最晚成团日期：2020.02.02</p>
                    <div class='icons'>
                      <p>
                        <span>999人想要</span>
                        <span>超赞999</span>
                        <span>浏览563</span>
                        <span>关注</span>
                      </p>
                      <p>四川成都</p>
                    </div>
                </div>
                <div class="operation_bar">
                  <div class="lanch_groupon">发起拼购</div>
                  <div class='addto_cart'>加入购物车</div>
                  <div class="order_now">立即下单</div>
                </div>
            </div>
            <!-- 需求描述 -->
            <div class='prod_card_right' v-if='false'>
              <p class='prod_title'>OLAY熬夜黄金酵母面膜菁醇青春密集修护面膜女补水保湿滋润烟酰胺OLAY熬夜黄金酵母面膜菁醇</p>
                <div class='price_info'>
                    <p class='price'>预售价格<span>{{" ￥799.00"}}</span></p>
                    <p class='sell_time'>预售时间：2020-02-01至2020-3-12</p>
                    <p class='store_info'>
                      <span>剩余数量:999</span>
                      <span>已售数量：1000000</span>
                      <span>总数量：10000</span>
                    </p>
                    <p class='earnest_money'>
                      <span>最小起批数量：1</span>
                      <span>期望定金：￥5000</span>
                    </p>
                    <hr style='color:#E6E6E6;margin-bottom:20px'/>
                    <p class='groupon_info'>
                      <span>支持散装拼团</span>
                      <span>单人(地址)最小购买数量：2</span>
                      <span>最低成团数量：50000</span>
                    </p>
                    <hr style='color:#E6E6E6;margin-bottom:14px'>
                    <p>最晚成团日期：2020.02.02</p>
                    <div class='icons'>
                      <p>
                        <span>999人想要</span>
                        <span>超赞999</span>
                        <span>浏览563</span>
                        <span>关注</span>
                      </p>
                      <p>四川成都</p>
                    </div>
                </div>
            </div>
      </div>
      <div class='more_info'>
            <div class='company_card'>
              <div class='company_logo'>
                <img src="../../assets/company.png" width="80" height="80">
              </div>
              <div class='company_intro'>
                <p>北京字节跳动</p>
                <p>信誉等级：1</p>
                <p>商家描述：商家描述商家描述：商家描述商家描述：商家描述商家描述：商家描述商家描述：商家描述</p>
                <p>联系：<span class='contact'>和我联系</span></p>
                <p>实名认证: <span class='tag'>已认证</span> </p>
                <p>商家认证: <span class='tag'>已认证</span></p>
                <p>芝麻认证: <span class='tag'>已认证</span></p>
                <div class='button' @click='goToMerchantHome'>进入商家主页</div>
              </div>
            </div>
            <div class='prod_description'>
              <div class='description_head'>
                <span @click='toggle(0)' :class="{'active': num===0}">宝贝详情</span>
                <span @click='toggle(1)' :class="{'active': num===1}">宝贝留言</span>
              </div>
              <router-view></router-view>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      num: 0
    }
  },
  methods: {
    toggle (num) {
      this.num = num
      if ( num ) {
        this.$router.push({
          path: 'prod-comment'
        })
      } else {
        this.$router.push({
          path: 'prod-description'
        })
      }
    },
    //  路由跳转到商家主页
    goToMerchantHome () {
      this.$router.push({
        name: 'merchantHome'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.wrap {
  width: 100%;
  background-color: #F5F5F5;
  padding-top: 22px;
  .prod_detail {
      width: 1200px;
  height: 2000px;

      margin: auto;
      .prod_card {
          display: flex;
          height: 582px;
          padding: 32px 28px 0 18px;
          background-color: #fff;
          margin-bottom: 30px;
          .prod_card_left {
              height: 506px;
              display: flex;
              flex-direction: column;
              margin-right: 27px;
              > img:first-child {
                  width: 420px;
                  height: 420px;
                  margin-bottom: 16px;
              }
              .thumbnails {
                  img {
                      width: 70px;
                      height: 70px;
                      margin-right: 17px;
                      cursor: pointer;
                  }
                  img:last-child {
                      margin-right: 0;
                  }
              }
          }
          .prod_card_right {
              flex: 1;
              font-size: 16px;
              color: #666;
              .prod_title {
                  font-size: 24px;
                  color: #333;
              }
              .price_info {
                  margin-top: 24px;
                  height: 354px;
                  border: 1px dashed #DBDBDB;
                  padding: 20px 20px 22px 20px;
                  >p {
                    margin-bottom: 20px;
                  }
                  .price {
                    font-size: 18px;
                    color: #333;
                      span {
                          font-weight: bold;
                          font-size: 36px;
                          color: #DD2727;
                      }
                  }
                  .store_info {
                    display: flex;
                    justify-content: space-between;
                  }
                  .earnest_money {
                    span:first-child {
                      margin-right: 136px;
                    }
                  }
                  .groupon_info {
                      display: flex;
                      justify-content: space-between;
                    }
                  .icons {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    color: #333;
                    >p {
                      >span {
                        margin-right: 46px;
                        padding-left: 18px;
                      }
                    }
                  }
              }
              .operation_bar {
                display: flex;
                margin-top: 20px;
                justify-content: space-between;
                > div {
                  height: 50px;
                  line-height: 50px;
                  text-align: center;
                  font-size: 22px;
                  color: #fff;
                  background-color: #FFC733;
                  border-radius: 6px;
                }
                div:first-child {
                  width: 174px;
                  background-color: #DD2727;
                }
                div:nth-child(2) {
                  width: 226px;
                  background-image: url('../../assets/cart.png');
                  background-repeat: no-repeat;
                  background-size: 26px 24px;
                  background-position: 28px 50%;
                }
                div:last-child {
                  width: 174px;
                }
              }
          }
      }
      .more_info {
        background-color: #F5F5F5;
        display: flex;
        // overflow: hidden;
        .company_card {
          width: 222px;
          height: 600px;
          margin-right: 13px;
          background-color: #fff;
          .company_logo {
            height: 118px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #FFC733;
            >img {
              border: 1px solid #eee;
            }

          }
          .company_intro {
            // height: 357px;
            padding: 18px 14px 19px 18px;
            font-size: 14px;
            p {
              margin-bottom: 17px;
            }
            p:nth-child(1) {
              font-weight: 500;
              color: #333;
            }
            > div {
              width: 188px;
              height: 42px;
              background-color: #FFC733;
              border-radius: 4px;
              text-align: center;
              line-height: 42px;
              margin-top: 42px;
            }
            .tag {
              width: 68px;
              height: 22px;
              color: #fff;
              background-color: #10B4FE;
              padding: 5px 15px 6px 15px;
              border-radius: 2px;
              font-size: 12px;
            }
            span.contact {
              color: #10B4FE;
              background-image: url('../../assets/message.png');
              background-size: 24px 18px;
              background-repeat: no-repeat;
              background-position: 0 50%;
              padding-left: 27px;
              padding-top: 2px;
              padding-bottom: 2px;
            }
            .button {
              margin-top: 36px;
              width: 188px;
              height: 42px;
              line-height: 42px;
              background-color: #FFC733;
              color: #fff;
              cursor: pointer;
            }
          }
        }
        .prod_description {
          flex: 1;
          background-color: #fff;
          // height: 2000px;
          .description_head {
            height: 49px;
            line-height: 49px;
            display: flex;
            font-size: 18px;
            color: #333333;
            border-bottom: 1px solid #F0F0F0;
            >span {
              padding-left: 24px;
              padding-right: 24px;
              cursor: pointer;
              position: relative;
            }
            span.active {
              background-color: #FFC90F;
            }
            .active::after {
              position: absolute;
              content: '';
              border-top: 10px solid #FFC90F;
              border-bottom: 10px solid transparent;
              border-right: 10px solid transparent;
              border-left: 10px solid transparent;
              bottom: -20px;
              left: 50px;
            }
          }
        }
      }
  }
}
</style>
