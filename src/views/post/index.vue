<template>
  <div class='post'>
      <div class='inner'>
        <div class='post_steps'>
          <p>选择类型</p>
          <p>填写信息</p>
          <p>完成</p>
        </div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.post {
    background-color: #F5F5F5;
    // height: 1000px;
    .inner {
        width: 1200px;
        margin: auto;
        .post_steps {
          height: 177px;
          padding-top: 104px;
          padding-left: 107px;
          padding-right: 151px;
          display: flex;
          justify-content: space-between;
          font-weight: 500px;
          font-size: 20px;
        }
    }



}
</style>
