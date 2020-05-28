<template>
  <div class="placeOderTotal">
    <div class="placeOderContent">
      <!-- 内容头部表格头部 -->
      <nav class="oderNav">
        <span>商品</span>
        <span>单价</span>
        <span>剩余数量</span>
        <span>商品总价</span>
        <span>运费</span>
        <span>实际付款</span>
        <span>发布方</span>
        <span>交易时间</span>
      </nav>

      <!-- 商品信息 -->
      <div class="placeOdermiaoshu">
        <img :src="merchandise.picUrl" alt />
        <div>
          <div>
            <span>{{merchandise.name}}</span>
            <span>￥{{merchandise.unit_price}}</span>
            <span>剩余{{merchandise.remaining_quantity}}个</span>
            <span>￥{{merchandise.total_prices}}</span>
            <span>￥{{merchandise.freight}}</span>
            <span class="lpaceOderactualpayment">￥{{merchandise.actual_payment}}</span>
            <span>{{merchandise.The_issuer}}</span>
            <span>{{merchandise.trading_hour}}</span>
          </div>
          <div>
            <span>拼</span>
            <span>可售时间：</span>
            {{merchandise.vendibility_tiem_start}}至{{merchandise.vendibility_tiem_end}}
          </div>
        </div>
      </div>

      <!-- 输入框部分 -->
      <div class="placeOderInputs">
        <form action>
          <label for="shuliang">预定数量</label>
          <input type="text" placeholder="请输入预定数量" />
        </form>
        <!-- <form action>
          <label for="shuliang">交易日期</label>
          <input type="datetime" placeholder="请选择交易日期" />
        </form>-->
        <div class="block">
          <span class="demonstration">交易日期</span>
          <el-date-picker v-model="value1" type="date" placeholder="请选择交易日期"></el-date-picker>
        </div>

        <div class="money">
          <span>期望定金</span>
          <span v-if="money=='1000'" @click="setMoney('1000')" class="nochekd chekd">1000</span>
          <span v-else @click="setMoney('1000')" class="nochekd">1000</span>
          <span v-if="money=='5000'" @click="setMoney('5000')" class="nochekd chekd">5000</span>
          <span v-else @click="setMoney('5000')" class="nochekd">5000</span>
          <span v-if="money=='10000'" @click="setMoney('10000')" class="nochekd chekd">10000</span>
          <span v-else @click="setMoney('10000')" class="nochekd">10000</span>
          <span class="qitamoney">其他金额</span>
          <input ref="inputMoney" @input="inputMoney" type="text" placeholder="输入" />
        </div>
        <h3>收货地址</h3>
        <form action>
          <label for="shuliang">收货人</label>
          <input type="text" placeholder="单行输入" />
        </form>
        <form action>
          <label for="shuliang">联系电话</label>
          <input type="text" placeholder="单行输入" />
        </form>
        <form action>
          <label for="shuliang">详细地址</label>
          <input type="text" placeholder="单行输入" />
        </form>
      </div>

      <!-- 底部按钮区域 -->
      <div class="placeOderBottom">
        <i></i>
        <span>返回</span>
        <span>立即下单</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      merchandise: {
        name: "商品名称商品名fasf称商品名称商品名称商fdsafasfasfa品名称", //  商品名称
        unit_price: "99.90", //   单价
        remaining_quantity: "9", //   剩余数量
        total_prices: "699.00", //   商品总价
        freight: "1.24", //   运费
        actual_payment: "234.23", //   实际付款
        The_issuer: "发布方", //   发布方
        trading_hour: "2020-04-01", //   交易时间
        vendibility_tiem_start: "2020-04-01", //   可售时间开始
        vendibility_tiem_end: "2020-04-01", //   可售时间结束
        picUrl: "img/category.8a6181e0.png"
      },
      money: "",
      form: {
        date1: ""
      },
       pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
    };
  },
  methods: {
    ///       点击选择期望定金
    setMoney(money) {
      console.log(money);
      if (this.money == money) {
        this.money = "";
      } else {
        this.money = money;
      }
      this.$refs.inputMoney.value = "";
    },
    //        输入期望定金
    inputMoney() {
      this.money = this.$refs.inputMoney.value + "";
    }
  }
};
</script>

<style scoped>
.placeOderTotal {
  display: block;
  width: 100%;
  background-color: #f5f5f5;
  padding-top: 22px;
  padding-bottom: 46px;
}
.placeOderContent {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;
  height: 794px;
  background-color: white;
}
/* 表格头部 */
.oderNav {
  width: 1200px;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 0 30px;
}
.oderNav > span {
  width: 123px;
  display: block;
  text-align: center;
}
.oderNav > span:first-child {
  flex: 1;
  text-align: left;
}
.placeOdermiaoshu {
  display: flex;
  width: 1200px;
  height: 130px;
  background-color: #fffae8;
  align-items: center;
  font-size: 14px;
}
.placeOdermiaoshu > img {
  width: 80px;
  height: 80px;
  margin: 0 10px 0 30px;
  padding: 1px;
}
.placeOdermiaoshu > div {
  height: 140px;
  margin-top: 20px;
}
.placeOdermiaoshu > div > div:first-child {
  width: 1050px;
  height: 80px;
  display: flex;
  align-items: center;
}
.placeOdermiaoshu > div > div:first-child > span {
  display: block;
  width: 123px;
  text-align: center;
}
.placeOdermiaoshu > div > div:first-child > span:first-child {
  display: block;
  width: 190px;
  text-align: left;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.placeOdermiaoshu > div > div:first-child > .lpaceOderactualpayment {
  color: #dd3232;
  font-size: 18px;
}
.placeOdermiaoshu > div > div:last-child {
  display: flex;
  align-items: center;
}
.placeOdermiaoshu > div > div:last-child > span:first-child {
  color: white;
  background-color: #ffc90f;
  font-size: 10px;
  width: 18px;
  height: 18px;
  display: flex;
  /* font-family: Source Han Sans CN;
  font-weight: 500; */
  justify-content: center;
  padding: 0 1px 1px 0;
  align-items: center;
  margin-right: 6px;
}
.placeOderInputs {
  width: 1140px;
  height: 430px;
  display: flex;
  margin: 30px;
  flex-direction: column;
  font-size: 16px;
}
.placeOderInputs > form,
.placeOderInputs > .money ,
.placeOderInputs > .block{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 45px;
}
.placeOderInputs > form > label, .placeOderInputs > .block>span{
  width: 70px;
  text-align: right;
  margin-right: 13px;
}
.placeOderInputs > form > input, .placeOderInputs > .block>div {
  width: 521px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
  padding-left: 16px;
}
.placeOderInputs > .block>div{
padding: 0;
border: none;
}
.placeOderInputs > .money > span:first-child {
  margin-left: 4px;
}
.placeOderInputs > .money > .nochekd {
  width: 96px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
  margin-left: 14px;
}
.placeOderInputs > .money > .chekd {
  background: rgba(255, 199, 51, 1);
  border: none;
}
.placeOderInputs > .money > .qitamoney {
  margin-left: 36px;
  margin-right: 10px;
}
.placeOderInputs > .money > input {
  width: 96px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  padding-left: 9px;
  border: 1px solid rgba(240, 240, 240, 1);
}
.placeOderInputs > h3 {
  margin-top: 34px;
  margin-bottom: 22px;
  font-size: 22px;
}
.placeOderBottom {
  width: 1198px;
  height: 126px;
  background: rgba(230, 230, 230, 1);
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 22px;
}
.placeOderBottom > i {
  flex: 1;
}
.placeOderBottom > span {
  width: 174px;
  height: 64px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(240, 240, 240, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 26px;
}
.placeOderBottom > span:last-child {
  background: rgba(255, 199, 51, 1);
  border: none;
  margin-right: 35px;
}
</style>