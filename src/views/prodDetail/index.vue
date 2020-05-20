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
                
            </div>
      </div>
      <div class='more_info'>
            <div class='company_card'>
              <div class='company_logo'>
                <img src="../../assets/company.png" width="80" height="80">
              </div>
            </div>
            <div class='prod_description'>
              <div class='description_head'>
                <span @click='toggle' class='active'>宝贝详情</span>
                <span @click='toggle'>宝贝留言</span>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.wrap {
  width: 100%;
  background-color: #F5F5F5;
  padding-top: 22px;
}
.prod_detail {
    width: 1200px;
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
                // .earnest_money {
                //   width: 365px;
                //   display: flex;
                //   justify-content: space-between;
                // }
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
        }
    }
    .more_info {
      height: 1000px;
      background-color: #F5F5F5;
      display: flex;
      .company_card {
        width: 222px;
        margin-right: 13px;
        background-color: #fff;
        .company_logo {
          height: 118px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #E6E6E6;
          >img {
            border: 1px solid #eee;
          }

        }
      }
      .prod_description {
        flex: 1;
        height: 500px;
        background-color: #fff;
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
            background-color: #efe;
            cursor: pointer;
          }
          span.active {
            background-color: #FFC90F;
            position: relative;
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
</style>
