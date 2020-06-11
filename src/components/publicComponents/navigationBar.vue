<template>
   <div class="nav">
     <div class="center">
        <div class="city_select" id='city_select'>
          <el-cascader v-model="value" :options="options" placeholder="请选择地区">
          </el-cascader>
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
      ],
      options: [
      ]
    }
  },
  created () {
    this.getCitiesList()
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
