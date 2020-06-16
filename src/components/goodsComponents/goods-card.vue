<template>  
  <div
    class='product_card'
    :style="{marginRight: (prodCardIndex + 1) % 4 === 0 ? '0' : '24px' }">
    <img class='product_card_img' :src="prodData.main_picture">
    <div class='product_info'>
      <p class='product_description'>
        <span>{{prodData.product_name}}</span>
      </p>
      <p class='product_price'>
        <span class='is_support_bulk' v-if='prodData.is_support_bulk_purchase'>拼</span>
        <span class='price'>{{prodData.product_price | priceFilter}}</span>
      </p>
      <p class='store_info'>
        <span class='store_number'>可售总数量: {{prodData.num}}</span>
        <span class='time'>剩余:{{prodData.available_inventory}}</span>
        <!-- {{prodData.start_time}}-{{prodData.end_time}} -->
      </p>
      <p class='time_line'>
        可售时间段:
        <span>{{prodData.start_time | dateFormat}}</span>-<span>{{prodData.end_time | dateFormat}}</span>
      </p>
      <p class='adress'>
        <span>{{prodData.product_address}}</span>
        <span>{{prodData.want_count}}人想要</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
    console.log(this.prodData)
      setTimeout(() => {
          // console.log(this.prodCardIndex)
      }, 1000)
  },
  props: {
    prodData: {
      // type: Object,
      required: true
    },
    prodCardIndex: {
        type: Number,
        required: true
    }
  },
  filters: {
    ommit (text) {
      if(text.length > 17) {
        return  text.slice(0, 17) + '...'
      } else {
        return text
      }
    },
    priceFilter (price) {
      return '￥' + price
    },
    dateFormat (date) {
      let fmt = "YYYY.mm.dd"
      let ret
      var date = new Date(date)
      const opt = {
          "Y+": date.getFullYear().toString(),        // 年
          "m+": (date.getMonth() + 1).toString(),     // 月
          "d+": date.getDate().toString(),            // 日
          // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
          ret = new RegExp("(" + k + ")").exec(fmt);
          if (ret) {
              fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
          };
      };
      return fmt;
    }
  },
  methods: {
    // goToDetailPage () {
    //   this.$router.push('/prod-detail')
    // }
  }
}
</script>
<style lang="less" scoped>
.product_card {
  width: 282px;
  height: 365px;
  margin-bottom: 64px;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  .product_card_img {
    width: 282px;
    height: 258px;
    flex-shrink: 0;
  }
  .product_info {
    margin-top: 5px;
    .product_description {
      color: #333;
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
    }
    .product_price {
      padding-top: 6px;
      padding-bottom: 6px;
      .is_support_bulk {
        display: inline-block;
        width: 18px;
        height: 18px;
        line-height: 18px;
        border-radius: 2px;
        background-color: #FFC90F;
        font-size: 12px;
        text-align: center;
        color: #fff;
      }
      .price {
        font-size: 20px;
        color: #FF4040;
      }
      
    }
    .store_info {
      height: 12px;
      margin-bottom: 14px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      color: #666666;
    }
   .time_line {
     font-size: 12px;
     color: #666;
     margin-bottom: 6px;
   }
   .adress {
     display: flex;
     justify-content: space-between;
     color: #808080;
     font-size: 12px;
     span:last-child {
       padding-left: 15px;
       background-image: url(../../assets/gray_heart.png);
       background-repeat: no-repeat;
       background-size: 13px 11px;
       background-position: 0 50%;
     }
   }

  }
}
</style>
