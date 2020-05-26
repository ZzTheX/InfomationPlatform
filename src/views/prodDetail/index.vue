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
              <div class='company_info'>
                <p class='company_name'>河北纺织有限公司</p>
                <p class='credit_level'>信誉等级：<span>1</span></p>
                <p class='company_des'>商家描述: <span>{{'商家描述'.repeat(5)}}</span></p>
                <p class='contact_me'>联系: <span>和我联系</span></p>
                <p>实名认证<span>已认证</span></p>
                <p>商家认证<span>已认证</span></p>
                <p>芝麻认证<span>已认证</span></p>
                <div>进入商家主页</div>
              </div>
            </div>
            <div class='prod_description'>
              <div class='description_head'>
                <span @click='toggle' class='active'>宝贝详情</span>
                <span @click='toggle'>宝贝留言</span>
              </div>
              <div class='description_detail'>
                <p>发布日期：2020-02-01</p>
                <p>商品描述：OLAY菁醇青春密集修护面膜Olay/玉兰油OLAY菁醇青春是否为特殊用途化，妆品OLAY菁醇青春密集修护面膜Olay/玉兰油 OLAY菁醇青春是否为特殊用途化妆品OLAY菁醇青春密集修护面膜Olay/玉兰油 OLAY菁醇青春是否为特殊用途化妆品OLAY菁醇青春密集修护面膜Olay/玉兰油，OLAY菁醇青春是否为特殊，用途化妆品OLAY菁醇青春密集，修护面膜Olay/玉兰油 OLAY菁醇青春是否为特殊用途化妆品OLAY菁醇青春密集修护面膜Olay/玉兰油 OLAY菁醇青春是否为特殊用途化妆品OLAY菁醇青春密集修护面膜Olay/玉兰油，OLAY菁醇青春是否为特殊用途化妆品OL。AY菁醇青春密集修护面膜Olay/玉兰油 OLAY菁醇青春是否为特殊用途化妆品</p>
                <div class="img_list">
                  <img 
                    width="276"
                    height="230"
                    src="../../assets/prod_des.png"
                    v-for='i in 9'
                    :key='i'>
                </div>
              </div>
              <div class='comment_board'></div>
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
        .company_info {
          padding: 18px 14px 30px 17px;
          font-size: 14px;
          color: #333;
          .company_name {
            color: #333;
            font-weight: 500;
          }
          .company_des {
            margin-bottom: 15px;
            >span {
              color: #666;
            }
          }
          .contact_me {
            margin-bottom: 16px;
            >span {
              color: #10B4FE;
              padding-left: 27px;
            }
          }
        }
      }
      .prod_description {
        flex: 1;
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
        .description_detail {
          padding: 36px 35px 40px 31px;
          font-size: 16px;
          color: #333;
          p:first-child {
            margin-bottom: 15px;
          }
          p:nth-child(2) {
            margin-bottom: 15px;
          }
          .img_list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            >img {
              width: 276px;
              height: 230px;
              // margin-bottom: 33px;
              padding-bottom: 33px;
            }
          }
        }
      }
    }
}
</style>
