<template>
   <div class="nav">
     <div class="center">
          <div class="city_select" id='city_select'>
            <span class='city_name'>四川成都</span>
              <div class='me' >
                  <span>{{'nickname'}}</span>
                  <div class='logout'>
                    <img src="../../assets/user_avatar2.png" class='avatar'>
                    <span @click='goToSetting'>账号设置</span>
                    <span>|</span>
                    <span @click='logout'>退出登录</span>
                  </div>
              </div>
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
      isShow: false,
      isLogin: false,
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
      ],
      options: [
      ]
    }
  },
  created () {
    // this.getCitiesList()
    // this.getPersonalInfo()
    this.getCityInfo()
  },
  mounted () {
    // console.log(window.navigator.geolocation.getCurrentPosition())
  },
  methods: {
    getCityInfo () {
      // this.http.get('http://api.map.baidu.com/geocoder/v2/?ak=jqTBOGeKlMKZ6tvSGTeCEyAhUYk34Qcp&location=BBBBB&output=json&pois=1').then(res => {
      //   console.log(res)
      // })
      let script = document.createElement('script')
      script.src ='http://api.map.baidu.com/geocoder/v2/?ak=jqTBOGeKlMKZ6tvSGTeCEyAhUYk34Qcp&location=BBBBB&output=json&pois=1'
    },
    hoverMe () {
      console.log('hoverme')
      this.isShow = true
    },
    leaveMe () {
      this.isShow = false
    },
    goToRouter (path) {
      console.log(path)
      this.$router.push({path: '/my-account/' + path})
    },
    handleChange () {

    },
    getCitiesList () {
      this.http.get('/api/member/option/getAddressOption').then(res => {
        if(res.data.code === 200) {
          this.cityList = res.data.result
          this.options = this.cityList.map((item, index) => {
            return {
              label: item.name,
              value: item.id,
              children: item.children.map((o, i) => {
                return {
                  label: o.name,
                  value: o.id
                }
              })
            }
          })
        }else {
          this.$message({
            type: 'warning',
            message: '获取城市列表失败'
          })
        }
      })
    },
    goToSetting () {
      this.$router.push({
        name: 'settings'
      })
    },
    logout () {
      localStorage.clear()
      this.$store.commit('clearData')
      this.$router.push({
        name: 'login'
      })
    },
    getPersonalInfo () {
      console.log('获取个人信息')
      this.http.get('/api/member/personalInformation').then(res => {
        console.log('个人信息返回数据:', res)
        if(res.data.code === 200) {
          this.isLogin = true
          this.$store.commit('storeMyInfo', res.data.result)
        }
      })
    }
  },
  computed: {
    nickname () {
      return this.$store.state.myInfo.nickname
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
      width: 188px;
      height: 31px;
      line-height: 31px;
      background-color: #f5f5f5;
    }
    .city_select /deep/.el-input__icon {
      line-height: 31px;
    }
    .city_select {
      display: flex;
      height: 32px;
      overflow: hidden;
      .city_name {
        margin-right: 30px;
      }
      .me {
        position: relative;
        &:hover {
          border: 1px solid #eee;
          background-color: #fff;
        }
        &:hover .logout{
          visibility: visible;
        }
        >span {
          cursor: pointer;
          padding-left: 8px;
          padding-right: 8px;
        }
        .logout {
          visibility: hidden;
          display: flex;
          position: absolute;
          border: 1px solid #eee;
          top: 32px;
          left: -48px;
          padding: 8px;
          width: 240px;
          height: 80px;
          background-color: #fff;
          z-index: 10;
          >img {
            width: 60px;
            height: 60px;
            margin-right: 20px;
          }
          span {
            margin-left: 5px;
            cursor: pointer;
          }
        }
      }
      /deep/ .el-cascader {
        line-height: 31px;
      }
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
