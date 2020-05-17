<template>
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
              </div>
              <div class='operate'></div>
          </div>
      </div>
      <div class='other_info'>
          <div class='company_card'></div>
          <div class='prod_detail'></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.prod_detail {
    width: 1200px;
    margin: auto;
    .prod_card {
        display: flex;
        height: 582px;
        padding: 32px 28px 0 18px;
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
            .prod_title {
                font-size: 24px;
                color: #333;
            }
            .price_info {
                margin-top: 24px;
                height: 354px;
                border: 1px dashed #DBDBDB;
                padding: 30px 16px 28px 18px;
                .price {
                    span {
                        font-weight: bold;
                        font-size: 36px;
                        color: #DD2727;
                    }
                }
            }
        }
    }
    .other_info {
        height: 1000px;
    }
}
</style>