<template>
  <div class='my_account'>
    <div class='inner'>
      <!-- 个人主页左侧导航 -->
      <div class='my_homepage_sidebar'>
        <!-- 个人或公司名片（一） -->
        <div class='my_intro1' v-if='activeTab === "myHomepage"'>
          <!-- <span class='avatar' :style="{backgroundImage: 'url(' + '../../assets/timg.jpg' + ')'}"></span> -->
          <img class='avatar' :src="myInfo.face" >
          <span class='my_name'>{{myInfo.myName}}</span>
          <span class='my_nickname'>{{myInfo.myNickname}}</span>
          <span class='my_credit'>{{myInfo.myCredit}}</span>
          <p class='my_intro_detail'>{{myInfo.myIntro}}</p>
          <div class='my_intro_bottom'>
            <span class='thumb_up'>赞{{myInfo.great_count}}</span>
            <span class='stars'>关注{{myInfo.attention_count}}</span>
            <span class='fans'>粉丝{{myInfo.fan_count}}</span>
          </div>
        </div>
        <!-- 名片（二） -->
        <div class='my_intro2' v-show='activeTab != "myHomepage"'>
          <span class='avatar'></span>
          <span class='my_name'>{{myInfo.myName}}</span>
          <span class='my_id'>{{myInfo.id}}</span>
          <span class='my_identify'>实人认证</span>
        </div>

        <!-- 个人中心左侧导航栏 -->
        <div class='my_homepage_nav'>
          <li
            @click='jumpToRouter(index, item.link)'
            v-for='(item, index) in tabList'
            :key='index'
            :class="{active: leftSideTabIndex === index}">{{item.title}}</li>
        </div>
      </div>
      <!-- 个人主页右侧 -->
      <div class='my_homepage_main'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTabIndex: 0,
      activeTab: 'myHomepage',
      myInfo: {},
      tabList: [
        {link: 'my-homepage', title: '个人主页'},
        {link: 'my-cart', title: '购物车'},
        {link: 'my-order', title: '我的订单'},
        {link: 'my-groupon', title: '我的拼团'},
        {link: 'browsing-history', title: '浏览记录'},
        {link: 'my-intrest', title: '我的关注'},
        {link: 'wallet', title: '钱包'},
        {link: 'identification', title: '认证'},
        {link: 'message', title: '消息中心'},
        {link: 'feedback', title: '问题反馈'},
        {link: 'require-survey', title: '需求调研'},
        {link: 'assignment', title: '任务中心'},
        {link: 'agreement', title: '平台公约'},
        {link: 'settings', title: '设置'}
      ],
      // ['个人主页', '购物车', '我的订单', '我的拼团','浏览记录', '我的关注', '钱包', '认证', '消息中心', '问题反馈', '需求调研', '任务中心', '平台公约', '设置'],
      isMyHomepage: true
    }
  },
  computed: {
    leftSideTabIndex () {
      return this.$store.state.leftSideTabIndex
    }
  },
  created () {
    this.getMyInfo()
  },
  methods: {
    jumpToRouter (index, path) {
      // this.$store.commit('changeLeftSideTabIndex', index)
      // this.currentTabIndex = index
      this.$router.replace('/my-account/' + path)
    },
    getMyInfo () {
      this.http.get('/api/member/personalHomepage').then(res => {
        console.log('myAaccount', res)
        this.myInfo = res.data.result
      })
    }
  }
}
</script>
<style lang='less' scoped>
.my_account {
  // min-height: 1250px;
  background-color: #F5F5F5;
  padding-top: 22px;
  // margin-bottom: 30px;
  // height: 2000px;
  padding-bottom: 30px;
  .inner {
    display: flex;
    width: 1200px;
    margin: auto;
    .my_homepage_sidebar {
      width: 222px;
      margin-right: 12px;
      background-color: #F5F5F5;
      .my_intro1 {
        display: flex;
        width: 222px;
        flex-direction: column;
        align-items: center;
        // height: 408px;
        padding: 27px 11px 0 13px;
        background-color: #fff;
        margin-bottom: 14px;
        .avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: #eee;
          margin-bottom: 20px;
        }
        .my_name {
          height: 20px;
          font-size: 20px;
          color: #333333;
          margin-bottom: 12px;
        }
        .my_nickname {
          font-size: 16px;
          color: #4D4D4D;
          margin-bottom: 9px;
        }
        .my_credit {
          font-size: 14px;
          color: #2AA7FF;
          margin-bottom: 15px;
        }
        .my_intro_detail {
          font-size: 16px;
          color: #333333;
          font-size: 16px;
          letter-spacing: 0px;
        }
        .my_intro_bottom {
          width: 100%;
          display: flex;
          justify-content: space-around;
          height: 53px;
          padding: 19px 0 19px 0;
          font-size: 14px;
          color: #666;
          span {
            height: 18px;
            background-size: 15px 15px;
            background-repeat: no-repeat;
            padding-left: 18px;
            background-position: 0px 3px;

          }
          .thumb_up {
            background-image: url('../../assets/thumb_up.png');
            // background-position: 0px 3px;
          }
          .stars {
            background-image: url('../../assets/heart.png');
          }
          .fans {
            background-image: url('../../assets/star.png');

          }

        }
      }
      .my_intro2 {
        // width: 222px;
        height: 288px;
        margin-bottom: 12px;
        background-color: #fff;
        padding: 48px 29px 0 28px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: #eee;
          background-image: url('../../assets/timg.jpg');
          background-position: 0 0;
          background-size: 100px 100px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .my_name {
          font-size: 20px;
          color: #333;
          margin-bottom: 15px;
        }
        .my_id {
          color: #808080;
          font-size: 18px;
          margin-bottom: 11px;
        }
        .my_identify {
          width: 81px;
          height: 22px;
          font-size: 12px;
          color: #fff;
          text-align: center;
          background-color: #10B4FE;
        }
      }
      .my_homepage_nav {
        background-color: #fff;
        height: 819px;
        font-size: 18px;
        color: #333;
        font-weight: normal;
        padding-top: 26px;
        line-height: 18px;
        li {
          border-left: 4px solid #fff;
          padding-left: 12px;
          margin-bottom: 34px;
          cursor: pointer;
          &.active {
           border-left: 4px solid #FFC90F;
           font-weight: bold;
          }
        }
      }
    }
    .my_homepage_main {
      width: 100%;
      background-color: #fff;
    }
  }
}
</style>
