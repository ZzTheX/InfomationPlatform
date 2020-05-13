<template>
   <div class="nav">
     <div class="center">
        <div class="space">
          <div class="select">
            <el-cascader
              placeholder="四川成都"
              v-model="value"
              :options="citiesList"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"></el-cascader>
            <span>用户名</span>
          </div>
          <div class="navList">
            <span v-for="(item, index) in navList" :key='index' @click='goToRouter(item.link)'>{{item.title}}</span>
          </div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
  data () {
    return{
      value: '',
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
      citiesList: [
        {
          value: 'sichuan',
          label: '四川',
          children: [
            {
              value: 'bazhong',
              label: '巴中',
            },
            {
              value: 'chengdu',
              label: '成都'
            }
          ]
        },
        {
          value: 'beijing',
          label: '北京'
        }
      ]
    }
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
.nav{
  display: flex;
  // justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  // max-width: 1900px;
  background: rgba(245,245,245,1);
  font-size: 14px;
  >.center{
  margin: 0 auto;
  width: 1200px;
  >.space{
    display: flex;
    justify-content: space-between;
  }
}
}
.navList{
  height: 32px;
  padding: 9px 0 8px 0;
  color: #333;
  font-family: Microsoft Yahei;
  span {
    cursor: pointer;
    &::after {
      content: '|';
      margin: 0 5px;
    }
  }
}
 .el-dropdown-link {
    cursor: pointer;
    color: #333333;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.el-icon--right{
  margin-left: 0px;
}
</style>
