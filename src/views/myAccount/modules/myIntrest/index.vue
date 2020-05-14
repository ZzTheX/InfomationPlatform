<template>
  <div class='follow'>
    <div class='follow_suppliers'>
      <p>关注的供货商</p>
      <div class='following_supplier_list'>
        <div
        class='supplier_card'
        v-for='i in 9' :key='i'
        :style="{marginRight: (i)%3  === 0 && i>0 ? '0' : '134px'}">
          <img :src="require('../../../../assets/supplier_avatar.png')" alt="123">
          <p class='supplier_info'>
            <span>username</span>
            <span>id: 8592347</span>
          </p>
        </div>
      </div>
    </div>
    <div class='follow_product'>
      <p>关注的产品</p>
      <div class="product_list" v-for='i in 3' :key='i'>
        <div class='head'>
          <img :src="require('../../../../assets/myAccount/teapot.png')" >
          <p>
            <span>广州允恩电器有限责任公司</span>
            <span>查看更多</span>
          </p>
        </div>
        <div class='body'>
          <div class='goods_card' v-for='i in 2' :key='i'>
            <img :src="require('../../../../assets/myAccount/product1.png')" >
            <div class='goods_card_right'>
              <p>1.8L大容量304不锈钢一体无缝钢胆快速烧水自动断电电水壶大口径壶口、内胆304不锈钢一体成型设计，无卫生死角，方便清洁</p>
              <p>
                <span>拼</span>
                <span>999.00</span>
              </p>
              <p>
                <span>可售时间段； 2020-09-10至2020-10-08</span>
              </p>
              <p>
                <span>可售总数量:1000</span>
                <span>已售：1</span>
                <span>可售：56</span>
              </p>
              <p>成都</p>
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

    }
  }
}
</script>

<style lang='less' scoped>
.follow_suppliers {
  height: 417px;
  border-bottom: 14px solid rgb(240, 240, 240);
  >p {
    height: 50px;
    color: #333;
    font-size: 20px;
    font-weight: 500;
    line-height: 50px;
    font-weight: 500;
    padding-left: 17px;
    border-bottom: 1px solid rgb(240, 240, 240);
  }
  .following_supplier_list {
     padding: 29px 20px 0 18px;
     display: flex;
     flex-wrap: wrap;;
     .supplier_card {
       display: flex;
       width: 220px;
       height: 50px;
       margin-right: 134px;
       margin-bottom: 50px;
       .supplier_info {
         flex-grow: 1;
         font-size: 18px;
         span {
           display: block;
         }
         span:first-child {
           padding-right: 16px;
           background-image: url('../../../../assets/delete.png');
           background-size: 16px 16px;
           background-repeat: no-repeat;
           background-position: center right;
         }
       }
      img {
        width: 50px;
        margin-right: 10px;
      }
     }
  }

}
.follow_product {
  >p {
    font-size: 20px;
    color: #333333;
    height: 50px;
    line-height: 50px;
    border: 1px solid #F0F0F0;
    padding-left: 16px;
  }
  .product_list {
    padding-top: 22px;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:145px;
      background:rgba(253,250,241,1);
      padding-left: 35px;
      padding-right: 37px;
      overflow: hidden;
      >img {
        width: 100px;
        margin-right: 14px;
      }
      >p{
        flex: 1;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        color: #333333;
        span:last-child {
          width:120px;
          height:40px;
          background:rgba(255,199,51,1);
          border-radius:4px;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          line-height: 40px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .body {
      padding: 22px 37px 0 18px;
      border-bottom: 1px solid #E6E6E6;
      .goods_card {
        display: flex;
        margin-bottom: 43px;
        >img {
          width: 150px;
          margin-right: 15px;
        }
        .goods_card_right {
          padding-top: 8px;
          p:first-child {
            height: 55px;
            color: #333;
            font-size: 18px;
            line-height: 27px;
            margin-bottom: 13px;
          }
          p:nth-child(2) {
            height: 19px;
            line-height: 19px;
            color: #ff4040;
            font-size: 24px;
            margin-bottom: 13px;
            span:first-child {
              font-size: 12px;
              background-color: #FFC733;
            }
          }
          p:nth-child(3) {
            color: #808080;
            font-size: 12px;
            margin-bottom: 10px;
          }
          p:nth-child(4) {
            color: #808080;
            font-size: 12px;
            margin-bottom: 10px;
          }
          p:last-child {
            color: #808080;
            font-size: 12px;
            padding-left: 12px;
            background-image: url('../../../../assets/myAccount/position.png');
            background-size: 9px 13px;
            background-repeat: no-repeat;
            background-position: 0 4px;
          }
        }
      }
    }
  }
}
</style>
