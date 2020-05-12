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
            <span v-for="item in navList" :key='item'>{{item}}</span>
          </div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
  data () {
    return{
      dropDown: [
        '四川成都',
        []
      ],
      navList:[
        '关注',
        '个人中心',
        '购物车',
        '我的订单',
        '浏览记录',
        '我的发布',
        '信息中心'
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
