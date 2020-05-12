<template>
  <div class='agreement'>
    <h6 class='title'>平台公约</h6>
    <p v-for='(item, index) in dataList' :key='index'>{{(index + 1) + "." + item}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [
        '平台公约'.repeat(40),
        '平台公约'.repeat(40),
        '平台公约'.repeat(40),
        '平台公约'.repeat(40),
        '平台公约'.repeat(40),
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.agreement {
  padding: 26px 60px 0 50px;
  height: 1004px;
  .title {
    font-size: 24px;
    color: #000;
    font-weight: normal;
    text-align: center;
    margin-bottom: 18px;
  }
  p {
    margin: 33px;
    color: #333;
  }
}
</style>
