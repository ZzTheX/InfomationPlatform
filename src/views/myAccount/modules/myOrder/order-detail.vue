<template>
    <div class='order_detail'>
        <div class='order_status'>&lt; {{$route.query.status | statusFilter}}</div>
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
            <div class='buttons_wrap'>
                <div v-if='status === 1' @click='isShoWModify=true'>修改订单</div>
                <div v-if='status === 1'>立即付款</div>
                <!-- <div v-if='status === 2'>待确认</div> -->
            </div>
           
            <!-- <div v-if=''>去发货</div> -->
            <!-- <div>去评价</div>
            <div>确认收货</div>
            <div>修改订单</div>
            <div>申请提款</div> -->
        </div>
         <div class='modify_order' v-show='isShoWModify'>
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
         <div class='choose_deliver' v-show='isShowDeliver'>
             <div class='deliver_pop'>
                 <p>物流信息<span @click='hideDeliverPop'>×</span></p>
                <div class='deliver_company'>
                    <span>快递公司:</span>
                    <input type="text">
                </div>
                <div class='deliver_num'>
                    <span>快递单号:</span>
                    <input type="text">
                </div>
                <div class='submit_btn' @click='submitDeliverInfo'>提交</div>
             </div>
         </div>
         <div class='refuse_popout' v-show='isShowRefuse'>
            <div class='refuse_pop'>
                 <p><span @click='isShowRefuse=false'>×</span></p>
                <div  @click='agreeRefund'>同意退款</div>
                <div  @click='refuseRefund'>拒绝退款</div>
            </div>
         </div>
         <div class='refuse_reason' v-show='isShowRefuseReason'>
             <div>
                 <p>回绝理由</p>
                 <textarea ></textarea>
                 <div class='buttons'>
                     <button>取消</button>
                     <button>提交</button>
                 </div>
             </div>
         </div>
    </div>
</template>

<script>
export default{
    data () {
        return {
            isShoWModify: '',
            status: '',
            isShowDeliver: false,
            isShowRefuse: false,
            isShowRefuseReason: false
        }
    },
    created () {
        this.status = this.$route.query.status
    },
    methods: {
        handleCancel () {
            this.isShoWModify = false
        },
        handleModifyOrder () {
            this.isShoWModify = false
        },
        hideDeliverPop () {
            this.isShowDeliver = false
        },
        submitDeliverInfo () {
            this.isShowDeliver = false
        },
        agreeRefund () {
            this.isShowRefuse = false
        },
        refuseRefund () {
            this.isShowRefuse = false
        }
    },
    filters: {
        statusFilter (value) {
            if(value === 1) {
                return '待付款'
            } else if(value === 2) {
                return '待确认'
            } else if (value === 3) {
                return '待发货'
            } else if(value === 4) {
                return '待收货'
            } else if(value === 5) {
                return '待评价'
            } else if(value === 6) {
                return '交易关闭'
            }
        }
    }
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
         justify-content: space-between;
         padding: 16px 50px;
        .buttons_wrap {
            display: flex;
            margin: auto;
            justify-content: center;
            align-items: center;
            >div {
             width: 180px;
             height: 50px;
             background-color: #FFC90F;
             line-height: 50px;
             text-align: center;
             margin-right: 20px;
             cursor: pointer;
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
     .choose_deliver {
       position: fixed;
       top: 0;
       right: 0;
       left:0;
       bottom: 0;
       background-color: rgba(0, 0, 0, 0.4);
       .deliver_pop {
           margin: auto;
           margin-top: 150px;
        //    transform: translateX(50%);
           width: 585px;
           height: 435px;
           background-color: #fff;
           font-size: 18px;
           >p {
               height: 84px;
               padding-left: 73px;
               padding-right: 40px;
               border-bottom: 1px solid #E6E6E6;
               color: #333;
               font-weight: 600;
               line-height: 84px;
               overflow: hidden;
               margin-bottom: 60px;
               >span {
                   float: right;
                   font-size: 22px;
                   cursor: pointer;
               }
           }
           input {
               width: 300px;
               height: 46px;
               border: 1px solid #eee;
               margin-left: 14px;
               padding-left: 10px;
           }
           .deliver_company {
               margin-left: 72px;
               margin-bottom: 37px;
           }
           .deliver_num {
               margin-left: 72px;
               margin-bottom: 37px;
           }
           .submit_btn {
               margin: auto;
                width:180px;
                height:50px;
                line-height: 50px;
                text-align: center;
                background:rgba(255,201,15,1);
                border-radius:4px;
                cursor: pointer;
           }
       }
     }
     .refuse_popout {
       position: fixed;
       top: 0;
       right: 0;
       left:0;
       bottom: 0;
       background-color: rgba(0, 0, 0, 0.4);
       .refuse_pop {
           margin: auto;
           width: 493px;
           height: 397px;
           margin-top: 200px;
           background-color: #fff;
           p {
           text-align: right;
           margin-bottom: 84px;
           padding-top: 35px;
           padding-right: 41px;
           font-size: 22px;
            span {
                cursor: pointer;
            }
           }
            div {
                margin: auto;
                width:240px;
                height:50px;
                background:rgba(255,201,15,1);
                border-radius:4px;
                text-align: center;
                line-height: 50px;
                margin-bottom: 37px;
            }
       }
       
     }
     .refuse_reason {
       position: fixed;
       top: 0;
       right: 0;
       left:0;
       bottom: 0;
       background-color: rgba(0, 0, 0, 0.4);
       > div {
           margin: auto;
           width: 862px;
           height: 530px;
           background-color: #fff;
           margin-top: 170px;
           padding: 28px 37px 0 39px;
           font-size: 18px;
           font-weight: 600;
           > p {
               margin-bottom: 20px;
           }
            > textarea {
                display: block;
                width: 780px;;
                height: 318px;
                outline: none;
                border-bottom: 1px solid #E6E6E6;
                padding: 10px;
            }
            .buttons {
                display: flex;
                margin-top: 40px;
                justify-content: space-evenly;
                >button {
                    width: 180px;
                    height: 50px;
                    background-color: #D9D9D9;
                    outline: none;
                    border-radius: 4px;
                    cursor: pointer;
                    &:last-child {
                        background-color: #FFC90F;
                    }
                }
            }
       }
      
     }
 }
</style>