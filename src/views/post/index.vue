<template>
  <div class='post'>
      <div class='post_steps inner'></div>
      <div class='post_types inner'>
          <div class='active'>供应信息</div>
          <div>需求信息</div>
          <div>发布推文</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.post {
    height: 862px;
    background-color: #F5F5F5;
    .inner {
        width: 1200px;
        margin: auto;
    }
    .post_steps {
        height: 177px;
    }
    .post_types {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 594px;
        background-color: #fff;
        font-size: 30px;
        color: #333;
        text-align: center;
        padding-top: 80px;
        div {
            width: 569px;
            height: 89px;
            line-height: 89px;
            background-color: #E6E6E6;
            margin-bottom: 46px;
            cursor: pointer;
        }
         div.active {
            background-color: #FFC90F;
        }
    }

}
</style>