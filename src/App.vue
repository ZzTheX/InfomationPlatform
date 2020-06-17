<template>
  <div id="app">
    <router-view></router-view>
    <div class='loading' v-show='isLoading'>
      <!-- <img src="./assets/loader.gif" alt=""> -->
      <div class='bars'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return{}
  },
  name: 'app',
  components: {

  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang='less' scoped>
#app {
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    .bars {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 120px;
      height: 200px;
      text-align: center;
      >li:first-child {
         animation: animate1 1s ease-in-out infinite 0.1s alternate;
      }
      >li:nth-child(2) {
         animation: animate1 1s ease-in-out infinite 0.2s alternate;
      }
      >li:nth-child(3) {
         animation: animate1 1s ease-in-out infinite 0.3s alternate;
      }
      >li:nth-child(4) {
         animation: animate1 1s ease-in-out infinite 0.4s alternate;
      }
      >li {
        width: 6px;
        height: 20px;
        background-color: #fff;
      }
      @keyframes animate1 {
        0% {
          height: 20px;
        }
        100% {
          height: 60px;
        }
      }
    }
  }
}
</style>
