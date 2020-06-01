<template>
   <div class="nav">
     <div class="center">
        <div class="city_select" id='city_select'>
          <!-- <span v-if='isChooseManually'>四川成都</span> -->
          <el-select v-model="value" filterable placeholder="请输入城市">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
          <span>moon five</span>
        </div>
        <div class="navList">
          <span v-for="(item, index) in navList" :key='index' @click='goToRouter(item.link)'>{{item.title}}</span>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return{
      isChooseManually: true,
      value: '四川成都',
      dropDown: [
        '四川成都',
        []
      ],
      navList:[
        {link: 'my-intrest', title: '关注'},
        {link: 'my-homepage', title: '个人中心'},
        {link: 'my-cart', title: '购物车'},
        {link: 'browsing-history', title: '浏览记录'},
        {link: 'my-homepage', title: '我的发布'},
        {link: 'message', title: '信息中心'}
        // '关注',
        // '个人中心',
        // '购物车',
        // '我的订单',
        // '浏览记录',
        // '我的发布',
        // '信息中心'
      ],
      options: [
        {
          value: 'sichuan',
          label: '成都',
        },
        {
          value: 'beijing',
          label: '北京'
        },
        {
          value: 'bazhong',
          label: '巴中',
        },
        {
          value: 'neimenggu',
          label: '内蒙古'
        },
        {
          value: 'minayang',
          label: '绵阳'
        },
        {
          value: 'wuhan',
          label: '武汉'
        },
        {
          value: 'hangzhou',
          label: '杭州'
        },
        {
          value: 'qingdao',
          label: '青岛'
        }
      ]
    }
  },
  mounted () {
    // console.log(window.navigator.geolocation.getCurrentPosition())
  },
  methods: {
    goToRouter (path) {
      console.log(path)
      this.$router.push({path: '/my-account/' + path})
    },
    handleChange () {

    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  height: 32px;
  line-height: 32px;
  background-color: #F5F5F5;
  font-size: 14px;
  color: #333;
  .center {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    .city_select /deep/ .el-input__inner {
      border: none;
      width: 108px;
      height: 32px;
      background-color: #f5f5f5;
    }
    .city_select /deep/.el-input__icon {
      line-height: 32px;
    }
    .navList {
      >span {
        padding-left: 12px;
        position: relative;
        margin-right: 12px;
        cursor: pointer;
        &::before {
          content: '|';
          color: #CCCCCC;
          position: absolute;
          left: 0;
        }
      }
      span:first-child {
        &::before {
          content: ''
        }
      }
      span:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
