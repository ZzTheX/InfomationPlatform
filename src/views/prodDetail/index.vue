<template>
  <div class="wrap">
    <div class="prod_detail">
      <div class="prod_card">
        <div class="prod_card_left">
          <img
            :src="prodData.info.banner[0].url"
            v-if="prodData.info.banner[0].type === 1"
            ref="mainImg"
          />
          <video controls poster="" v-else>
            <source src="movie.mp4" type="video/mp4" />
            你的浏览器不支持H5视频播放,推荐您使用<a
              href="https://www.google.cn/intl/zh-CN/chrome/"
              target="_blank"
              >google</a
            >浏览器。
          </video>
          <div class="thumbnails">
            <img
              :src="item.url"
              v-for="(item, i) in prodData.info.banner"
              :key="i"
              @click="toggleMainImg(item)"
            />
          </div>
        </div>
        <!-- 此处商品详情需求描述与供应描述不一致 通过v-if切换 -->
        <!-- 供应描述 -->
        <div class="prod_card_right" v-if="false">
          <p class="prod_title">
            OLAY熬夜黄金酵母面膜菁醇青春密集修护面膜女补水保湿滋润烟酰胺OLAY熬夜黄金酵母面膜菁醇
          </p>
          <div class="price_info">
            <p class="price">
              预售价格<span>{{ " ￥799.00" }}</span>
            </p>
            <p class="sell_time">预售时间：2020-02-01至2020-3-12</p>
            <p class="store_info">
              <span>剩余数量:999</span>
              <span>已售数量：1000000</span>
              <span>总数量：10000</span>
            </p>
            <p class="earnest_money">
              <span>最小起批数量：1</span>
              <span>期望定金：￥5000</span>
            </p>
            <hr style="color:#E6E6E6;margin-bottom:18px" />
            <p class="groupon_info">
              <span>支持散装拼团</span>
              <span>单人(地址)最小购买数量：2</span>
              <span>最低成团数量：50000</span>
            </p>

            <p>最晚成团日期：2020.02.02</p>
            <hr style="background-color:#E6E6E6;margin-bottom:12px" />
            <div class="icons">
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
            <div @click="handleToOrderNow" class="lanch_groupon">发起拼购</div>
            <div @click="handleAddToCart" class="addto_cart">加入购物车</div>
            <div @click="handleToOrderNow" class="order_now">立即下单</div>
          </div>
        </div>
        <!-- 需求描述 -->
        <div class="prod_card_right" v-if="true">
          <p class="prod_title">{{ prodData.info.product_name }}</p>
          <div class="price_info">
            <p class="price">
              预售价格<span>￥{{ prodData.info.supply_price }}</span>
            </p>
            <p class="sell_time">
              <span
                >预售时间:
                {{ prodData.info.available_start_time | dateFormat }}</span
              >
              <span>至{{ prodData.info.available_end_time | dateFormat }}</span>
            </p>
            <p class="store_info">
              <span>采购总数量:{{ prodData.info.total_quantity }}</span>
              <span>期望定金:{{ prodData.info.deposit_amount }}</span>
              <span
                >最晚等待时间:
                {{ prodData.info.latest_group_time | dateFormat }}</span
              >
            </p>
            <hr style="color:#E6E6E6;margin-top:30px;margin-bottom:30px" />
            <p class="groupon_info">
              <span v-if="prodData.info.is_support_bulk_purchase"
                >接受多家供应商一起供货</span
              >
              <span
                >每家供应商供货量需大于{{ prodData.info.minimum_batch }}</span
              >
              <span>最低成团数量：{{ prodData.info.minimum_groups }}</span>
            </p>
            <p>
              单笔采购数量需高于: {{ prodData.info.minimum_purchase_quantity }}
            </p>
            <hr style="color:#E6E6E6;margin-bottom:30px" />
            <div class="icons">
              <p>
                <span>{{ prodData.want_count }}人想要</span>
                <span>超赞{{ prodData.like_count }}</span>
                <span>浏览{{ prodData.watch_count }}</span>
                <span
                  :class="{ isWatched: prodData.is_attention }"
                  @click="handleWatch"
                  >关注</span
                >
              </p>
              <p>{{ prodData.info.product_address }}</p>
            </div>
            <div class="operation_bar">
              <div
                v-show='prodData.is_allow_member_group' 
                @click="handleToOrderNow" 
                class="lanch_groupon">
                发起拼购
              </div>
              <div @click="handleAddToCart" class="addto_cart">加入购物车</div>
              <div @click="handleToOrderNow" class="order_now">立即下单</div>
            </div>
          </div>
        </div>
      </div>
      <div class="more_info">
        <div class="company_card">
          <div class="company_logo">
            <img :src="prodData.merchantInfo.face" width="80" height="80" />
          </div>
          <div class="company_intro">
            <p>{{ prodData.merchantInfo.company_name }}</p>
            <p>信誉等级: {{ prodData.merchantInfo.credit_level }}</p>
            <p>{{ prodData.merchantInfo.description }}</p>
            <p>联系：<span class="contact">和我联系</span></p>
            <p>
              实名认证:
              <span class="tag">{{
                prodData.merchantInfo.verified ? "已认证" : "未认证"
              }}</span>
            </p>
            <p>
              商家认证:
              <span class="tag">{{
                prodData.merchantInfo.supplier_certification
                  ? "已认证"
                  : "未认证"
              }}</span>
            </p>
            <p>
              芝麻认证:
              <span class="tag">{{
                prodData.merchantInfo.sesame_authorize
                  ? "已认证"
                  : "未认证"
              }}</span>
            </p>
            <div class="button" @click="goToMerchantHome">进入商家主页</div>
          </div>
        </div>
        <div class="prod_description">
          <div class="description_head">
            <span @click="toggle(true)" :class="{ active: num === true }"
              >宝贝详情</span
            >
            <span @click="toggle(false)" :class="{ active: num === false }"
              >宝贝留言</span
            >
          </div>

          <!-- 宝贝详情 -->
          <div class="prod_desc" v-show="isShowProdDesc" v-for='(item, index) in prodData.descriptions' :key='index'>
            <div class="publish_time">
              <span>发布日期: </span>
              <span>{{item.release_date | dateFormat}}</span>
            </div>
            <p class="text_info">{{item.description}}</p>
            <div class="prod_imgs_list">
                <!-- v-for="(item, i) in item.pictures" -->
              <img
                v-for="i in 9"
                :key="i"
                width="276"
                height="230"
                :style="{ marginRight: i % 3 === 0 ? '0' : '35px' }"
                :src="require('../../assets/prod_list_img.png')"
                alt=""
              />
            </div>
          </div>

          <!-- 宝贝留言 -->
           <div class='comment' v-show='!isShowProdDesc'>
              <div class='input_area'>
                <input type="text" placeholder="请输入您的留言" ref='input' v-model='inputValue'>
                <button>留言</button>
              </div>
              <div class='comment_list'>
                <div class='comment_item' v-for='i in 3' :key='i'>
                  <img :src="require('../../assets/user.png')">
                  <div class='comment_text'>
                    <span>用户昵称</span>
                    <p>超级棒啊！太爱了，第一套明制，一直想买没买，看见是现货就更草了，没有让我失望，但是那个领子扣上云母扣就有点不一样高低了，然后上袄底下脏了一小块，其他的没啥了，整体很棒啊！有暗纹真的爱了，马面是客服小姐姐给我换了白色的，爱了爱了</p>
                    <div class='img_list'>
                      <img width='50' height='50' :src='require("../../assets/comment.png")' alt="">
                      <img width='50' height='50' :src='require("../../assets/comment.png")' alt="">
                      <img width='50' height='50' :src='require("../../assets/comment.png")' alt="">
                    </div>
                    <p>
                      <span class='time'>2020年03月04日  11:27</span>
                      <span @click='handleResponse()'>回复</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      verified: false,
      inputValue: '',
      num: true,
      product_id: "",
      product_tag: "",
      prodData: {
        approve_status: '',
        comment_count: '',
        comments: [],
        descriptions: [],
        group_count:'',
        is_attention: "",
        info: {
          available_end_time: '',
          available_inventory: '',
          available_start_time: '',
          merchant_id: '',
          product_id: '',
          banner: [],
          product_name: '',
          product_tag: '',
          supply_price: '',
        },
        merchantInfo: {
          company_name: '',
          face: '',
          credit_level: '',
          description: '',
          verified: '',
          supplier_certification: '',
          sesame_authorize: ''

        }
      },
      isShowProdDesc: true
    };
  },
  created() {
    this.product_id = this.$route.query.product_id
    // 获取用户认证信息
    this.getVerifiedInfo()
    
  },
  mounted () {
    this.getProductDetail()
  },
  methods: {
    getVerifiedInfo () {
      this.http.get('/api/member/personalInformation').then(res => {
        if(res.data.code === 200) {
          this.verified = res.data.result.verified
        }
      })
    },
    getProductDetail() {
      let { product_tag, product_id } = this.$route.query;
      // 采购商品详情
      if (product_tag === "采购商") {
        this.http
          .get(`/api/product/getPurchaseProductDetail?product_id=${product_id}`)
          .then(res => {
            console.log('code：采购商', res.data.code)
            if (res.data.code === 200) {
              console.log('获取商品详情成功')
              this.prodData = res.data.result;
              this.prodData.info = res.data.result.info
              this.prodData.info.descriptions = res.data.result.info.descriptions
              this.prodData.merchantInfo = res.data.result.merchantInfo
              console.log('this.prodData：', this.prodData)
            } else {
              this.$message({
                message: res.data.msg,
                type: "warning"
              });
            }
            console.log("商品详情数据:", res);
          });
        return;
      }
      // 供应商品详情
      if (product_tag === "供应商") {
        this.http
          .get(`/api/product/getSupplyProductDetail?product_id=${product_id}`)
          .then(res => {
             console.log('code:供应商', res.data.code)
            if (res.data.code === 200) {
              console.log('获取商品详情成功')
              this.prodData = res.data.result;
              this.prodData.info = res.data.result.info
              this.prodData.info.descriptions = res.data.result.info.descriptions
              this.prodData.merchantInfo = res.data.result.merchantInfo
                console.log('this.prodData：', this.prodData)
            } else {
              this.$message({
                message: res.data.msg,
                type: "warning"
              });
            }
            console.log("商品详情数据:", res);
          });
        return;
      }
    },
    toggle(num) {
      this.num = num
      this.isShowProdDesc = num
    },
    //  路由跳转到商家主页
    goToMerchantHome() {
      this.$router.push({
        name: "merchantHome"
      });
    },
    handleLaunchGroupon() {},
    handleAddToCart() {},
    handleToOrderNow() {
     //  判断用户是否实名认证
      if(this.verified === false) {
        this.$message({
          type: 'warning',
          message: '请先进行实名认证'
        })
        this.$router.push({
          name: 'realNameIdentify'
        })
        return
      }
      this.$router.push({
        name: "orderNow"
      });
    },
    handleWatch() {
      this.http
        .post(
          `/api/attention/confirmOrCancelAttention?type=1&attention_id=${this.product_id}`
        )
        .then(res => {
          console.log("关注商品res:", res);
          if (res.data.code === 200) {
            this.getProductDetail();
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        });
    },
    toggleMainImg(item, index) {
      this.$refs.mainImg.src = item.url;
    },
    handleResponse (e) {
     this.$refs.input.focus()
     this.inputValue = '回复用户昵称: '
    }
  },
  filters: {
    dateFormat(date) {
      let fmt = "YYYY-mm-dd";
      let ret;
      var date = new Date(date);
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString() // 日
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    }
  }
};
</script>

<style lang='less' scoped>
.wrap {
  width: 100%;
  background-color: #f5f5f5;
  padding-top: 22px;
  .prod_detail {
    width: 1200px;
    padding-bottom: 20px;
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
          border: 1px solid #909090;
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
          margin-top: 22px;
          height: 356px;
          border: 1px dashed #dbdbdb;
          padding: 20px 20px 22px 20px;
          > p {
            margin-bottom: 20px;
          }
          .price {
            font-size: 18px;
            color: #333;
            span {
              font-weight: bold;
              font-size: 36px;
              color: #dd2727;
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
            > p:first-child {
              > span {
                margin-right: 46px;
                padding-left: 18px;
                background-repeat: no-repeat;
                background-position: 0 50%;
              }
              span:first-child {
                background-image: url("../../assets/heart_yellow.png");
                background-size: 16px 14px;
              }
              span:nth-child(2) {
                background-image: url("../../assets/thumb_yellow.png");
                background-size: 14px 14px;
              }
              span:nth-child(3) {
                background-image: url("../../assets/eye.png");
                background-size: 18px 10px;
              }
              span:nth-child(4) {
                background-image: url("../../assets/star.png");
                background-size: 16px 14px;
                cursor: pointer;
                &.isWatched {
                  background-image: url("../../assets/star_yellow.png");
                }
              }
            }
            > p:last-child {
              padding-left: 15px;
              background-repeat: no-repeat;
              background-image: url("../../assets/pin.png");
              background-size: 10px 13px;
              background-position: 0 50%;
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
            background-color: #ffc733;
            border-radius: 6px;
            cursor: pointer;
          }
          div:first-child {
            width: 174px;
            background-color: #dd2727;
          }
          div:nth-child(2) {
            width: 226px;
            background-image: url("../../assets/cart.png");
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
      background-color: #f5f5f5;
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
          border-bottom: 1px solid #ffc733;
          > img {
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
            background-color: #ffc733;
            border-radius: 4px;
            text-align: center;
            line-height: 42px;
            margin-top: 42px;
          }
          .tag {
            width: 68px;
            height: 22px;
            color: #fff;
            background-color: #10b4fe;
            padding: 5px 15px 6px 15px;
            border-radius: 2px;
            font-size: 12px;
          }
          span.contact {
            color: #10b4fe;
            background-image: url("../../assets/kf.png");
            background-size: 24px 18px;
            background-repeat: no-repeat;
            background-position: 0 50%;
            padding-left: 27px;
            padding-top: 2px;
            padding-bottom: 2px;
            cursor: pointer;
          }
          .button {
            margin-top: 36px;
            width: 188px;
            height: 42px;
            line-height: 42px;
            background-color: #ffc733;
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
          border-bottom: 1px solid #f0f0f0;
          > span {
            padding-left: 24px;
            padding-right: 24px;
            cursor: pointer;
            position: relative;
          }
          span.active {
            background-color: #ffc90f;
          }
          .active::after {
            position: absolute;
            content: "";
            border-top: 10px solid #ffc90f;
            border-bottom: 10px solid transparent;
            border-right: 10px solid transparent;
            border-left: 10px solid transparent;
            bottom: -20px;
            left: 50px;
          }
        }
        .prod_desc {
          padding: 36px 35px 0 31px;
          font-size: 16px;
          color: #333;
          .publish_time {
            margin-bottom: 19px;
          }
          .text_info {
            margin-bottom: 19px;
          }
          .prod_imgs_list {
            > img {
              margin-bottom: 33px;
            }
          }
        }
        .comment {
           .input_area {
              height: 88px;
              border-bottom: 1px solid #F0F0F0FF;
              padding: 23px 27px 21px 26px;
              display: flex;
              justify-content: space-between;
              > input {
                width: 796px;
                background-color: #F5F5F5FF;
                border-radius: 4px;
                height: 44px;
                padding: 14px 0 15px 15px;
              }
              > button {
                width: 100px;
                background-color: #FFC90FFF;
                color: #333333;
                font-size: 16px;
                height: 44px;
                line-height: 44px;
                text-align: center;
              }
           }
          .comment_list {
            .comment_item {
                display: flex;
                padding: 25px 26px 24px 26px;
                border-bottom: 1px solid #F0F0F0;
                >img {
                  width: 50px;
                  height: 50px;
                  margin-right: 18px;
                  flex-shrink: 0;
                }
                .comment_text {
                  font-size: 14px;
                  color: #333;
                  >span:first-child {
                    display: block;
                    font-size: 16px;
                    margin-bottom: 14px;
                  }
                  >p:nth-child(2) {
                    margin-bottom: 14px;
                  }
                  .img_list {
                    display: flex;
                    margin-top: 40px;
                    margin-bottom: 20px;
                    >img {
                      width: 50px;
                      height: 50px;
                      flex-shrink: 0;
                      flex-grow: 0;
                      margin-right: 16px;
                    }
                  }
                  .time {
                    font-size: 14px;
                    color: #999999;
                    margin-right: 18px;
                  }
                  .time + span {
                    cursor: pointer;
                  }
                }
            }
          }
        } // .comment end
      }
    }
  }
}
</style>
