<template>
  <div class='assignment'>
   <h6>奖励机制</h6>
   <p>1.身份证认证+300金币</p>
   <p>2.首次发布需求+300金币</p>
   <p>3.发布推文+200金币</p>
   <p>4.邀请好友、好友注册成功、邀请人和被邀请人各获得+500金币<span>(设置相关机制识别和确认此用户是被邀请的, 才发放积分)</span></p>
   <p>5.购买商品评价15字字以上+300金币</p>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang='less' scoped>
.assignment {
  height: 1004px;
  background-color: #fff;
  font-size: 18px;
  padding: 39px 75px 0 34px;
  line-height: 32px;
  h6 {
    font-size: 24px;
    margin-bottom: 12px;
  }
  span {
    color: #FB4A4A;
  }
}
</style>
