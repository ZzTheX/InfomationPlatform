<template>
  <div>
    <div class='login_wrap'>
      <login></login>
    </div>
  </div>
</template>
<script>
import login from './login.vue'
export default {
  data () {
    return {
      
    }
  },
  components: {
    login
  }
}
</script>
<style lang='less' scoped>
.login_wrap {
  height: 862px;
  padding-top: 58px;
  background-color: #F9F9FB;
}
</style>
