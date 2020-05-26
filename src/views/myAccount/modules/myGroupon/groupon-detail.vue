<template>
  <div class='groupon_detail'>
    <div class='groupon_status'>
      <span>&lt;</span>
      <span>待成团</span>
    </div>
    <!-- 商品信息表头 -->
    <div class="prodinfo_tabelhead">
      <div class='table_head_left'>商品</div>
      <div class="table_head_right">
        <span>单价</span>
        <span>剩余</span>
        <span>小计</span>
        <span>定金</span>
        <span>运费</span>
        <span>实付</span>
      </div>
    </div>
    <!-- 商品信息 -->
    <div class='prodinfo_body'>
      <div class='prodinfo_body_left'>
        <img :src="require( '../../../../assets/goods.png')" alt="" width="80" height="80">
        <div class='prod_title_time'>
          <p class='prod_title'>商品名称商品名称商品名称商品名称商品名称</p>
          <span class='prod_time'>可售时间段：2020-02-01至2020-03-04</span>
        </div>
      </div>
      <div class="prodinfo_body_right">
        <div>
          <span>￥119.00</span>
          <span>10000</span>
          <span>￥119.00</span>
          <span>￥9999.00</span>
          <span>￥119.00</span>
          <span>99999.99</span>
        </div>
        <div>
          <span></span>
          <span>已拼团30000kg,还差30000kg</span>
        </div>
      </div>
    </div>
    <!-- 物流信息 -->
    <div class='delivery_info'>
      <p>收货地址</p>
      <p>收货人：阿凡达</p>
      <p>联系电话：15145967662</p>
      <p>联系地址：四川省成都市高新区华阳镇禾川一街35号</p>
    </div>
    <!-- 订单信息 -->
    <div class="order_info">
      <p>订单信息</p>
      <p>
        <span style='margin-right:45px'>订单编号：97634433545456632</span>
        <a href="" style='color: #3F99F4'>联系买家</a>
      </p>
      <p>买家昵称：tb4563387</p>
      <p>订单生成时间：2020-04-09  15:59:47</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.groupon_detail {
  .groupon_status {
    height: 52px;
    line-height: 52px;
    font-size: 20px;
    color: #000;
    padding-left: 21px;
    span:first-child {
      font-size: 25px;
      font-weight: bold;
      cursor: pointer;
    }
    > span {
      margin-right: 12px;
    }
  }
  .prodinfo_tabelhead {
    display: flex;
    height: 50px;
    line-height: 50px;
    color: #000;
    background-color: #FFFCF1;
    .table_head_left {
      width: 410px;
      padding-left: 21px;
      font-size: 18px;
    }
    .table_head_right {
      display: flex;
      flex: 1;
      justify-content: space-around;
    }
  }
  .prodinfo_body {
    display: flex;
    height: 125px;
    border-bottom: 1px solid #DBDBDB;
    padding-top: 25px;
    padding-bottom: 23px;
    .prodinfo_body_left {
      width: 410px;
      padding-left: 20px;
      display: flex;
      .prod_title_time {
        margin-left: 8px;
         color: #333333;
        .prod_title {
          width: 228px;
          font-size: 16px;
          margin-bottom: 18px;
        }
        .prod_time {
          font-size: 14px;
        }
      }
    }
    .prodinfo_body_right {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
      div:first-child {
        display: flex;
        justify-content: space-between;
        span:nth-child(3) {
          font-size: 18px;
          color: #DD3232;
        }
      }
      div:last-child {
        display: flex;
        span:first-child {
          width: 29px;
          background-image: url('../../../../assets/fire.png');
          background-repeat: no-repeat;
          background-size: 20px 24px;
        }
        span:last-child {
          color: #000000;
        }
      }
    }
  }
  .delivery_info {
    height: 196px;
    color: #333;
    font-size: 16px;
    padding: 30px 0 0 21px;
    border-bottom: 1px solid #DBDBDB;
    > p {
      margin-bottom: 22px;
    }
    p:first-child {
      color: #000;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .order_info {
    padding: 30px 0 0 21px;
    font-size: 16px;
    color: #333;
    > p {
      margin-bottom: 22px;
    }
    p:first-child {
      font-weight: bold;
      color: #000;
    }
  }

}
</style>
