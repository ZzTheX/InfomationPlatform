<template>
    <div class='order_detail'>
        <div class='order_status'>&lt; 待付款</div>
        <div class='order_detail_goods_info'>
            <div class='goods_info_nav'>
                <span>商品</span>
                <div>
                    <span>单价</span>
                    <span>定金</span>
                    <span>小计</span>
                    <span>定金</span>
                    <span>运费</span>
                    <span>实付</span>
                </div>
            </div>
            <div class='goods_info_detail'>
                <div class='goods_img_title'>
                    <img src="" alt="" width="80px" heigth='80px'>
                    <div class='goods_info_text'>
                        <p class='goods_info_name'>商品名称商品名称商品名称商品名称商品名称商</p>
                        <p class='goods_info_num'>购买数量: 99</p>
                        <p><span>拼 </span>可售时间段：2020-02-01至2020-03-04</p>
                    </div>
                </div>
                <div class='goods_price_info'>
                    <span>￥119.00</span>
                    <span>99999</span>
                    <span>5894</span>
                    <span>8048</span>
                    <span>94085</span>
                    <span>7859</span>
                </div>
            </div>

        </div>
        <div class='deliver_info'>
            <p>收货地址</p>
            <p>收货人: 阿凡达</p>
            <p>联系电话: 17975847584754</p>
            <p>联系地址: 四川高新区软件园3栋</p>
        </div>
        <div class='order_info'>
            <p>订单信息</p>
            <p>订单编号: 1809387597480 <span class='contact'>联系买家</span></p>
            <p>买家昵称: tjgfjgodoi</p>
            <p>订单生成时间: 2019-09-08 09:09</p>
            <p>付款时间: 2019-09-08 09:09</p>
        </div>
        <div class='buttons_group'>
            <!-- <div>待确认</div>
            <div>去发货</div>
            <div>去评价</div>
            <div>确认收货</div>
            <div>修改订单</div>
            <div>申请提款</div> -->
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style lang='less' scoped>
 .order_detail {
     .order_status {
         height: 51px;
         line-height: 51px;
         font-size: 20px;
         padding-left: 21px;
         font-weight: 400px;
     }
     .order_detail_goods_info {
         .goods_info_nav {
             display: flex;
             padding-left: 21px;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
            font-weight: 400;
            background-color: #FFFCF1;
            >span {
                flex: 1;
            }
            >div  {
                display: flex;
                width: 496px;
                justify-content: space-around;
              >span {

              }
            }
         }
         .goods_info_detail {
             box-sizing: padding-box;
             height: 130px;
             padding: 25px 16px 23px 20px;
             font-size: 16px;
             color: #333;
             display: flex;
             border-bottom: 1px solid #DBDBDB;
             .goods_img_title {
                 display: flex;
                 flex: 1;
                 >img {
                    //  margin-right: 8px;
                    width: 80px;
                    height: 80px;
                     background-color: #eee;
                 }
                 .goods_info_text {
                     flex: 1;
                     margin-left: 8px;
                     .goods_info_name {
                         margin-bottom: 5px;
                     }
                     .goods_info_num {
                         font-size: 14px;
                         margin-bottom: 15px;
                     }
                     >p:last-child {
                         color: #333;
                         font-size: 14px;
                     }
                 }
             }
             .goods_price_info {
                 display: flex;
                 justify-content: space-between;
                 width: 475px;
             }
         }
         
     }
     .deliver_info {
         padding: 30px 0 0 21px;
         color: #333;
         font-weight: 400;
         font-size: 16px;
         border-bottom: 1px solid #DBDBDB;
         >p:first-child {
             font-size: 18px;
             font-weight: 600;
         }
         >p {
             margin-bottom: 22px;
         }
        
     }
     .order_info {
         padding-top: 30px;
         padding-left: 21px;
         color: #333;
         font-weight: 400;
         font-size: 16px;
         border-bottom: 1px solid #DBDBDB;
         >p:first-child {
             font-size: 18px;
             font-weight: 600;
         }
         >p {
             margin-bottom: 22px;
         }
         .contact {
             color:#3F99F4;
             margin-left: 15px;
             padding-left: 22px;
             background-image: url('../../../../assets/message.png');
             background-size: 18px 17px;
             background-repeat: no-repeat;
             background-position: 0 50%;
             cursor: pointer;
         }
     }
     .buttons_group {
         margin-top: 97px;
         height: 50px;
         display: flex;
         justify-content: space-between;
         padding: 16px 50px;

         >div {
             width: 180px;
             height: 50px;
             background-color: #FFC90F;
             line-height: 50px;
             text-align: center;
         }
     }
 }
</style>