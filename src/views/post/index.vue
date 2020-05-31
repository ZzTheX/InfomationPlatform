<template>
  <div class='post'>
      <div class='inner'>
        <div class='post_steps'>
          <div class='one'>
            <p>1</p>
            <p>选择类型</p>
          </div>
          <div class='line line1'></div>
          <div class='two'>
            <p>2</p>
            <p>填写信息</p>
          </div>
          <div class='line line2'></div>
          <div class='three'>
            <p>3</p>
            <p>完成</p>
          </div>
          <!-- <p>选择类型</p>
          <p>填写信息</p>
          <p>完成</p> -->
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
          width: 900px;
          margin: auto;
          height: 177px;
          padding-top: 47px;
          padding-left: 107px;
          padding-right: 151px;
          display: flex;
          justify-content: space-between;
          font-weight: 500px;
          font-size: 20px;
          text-align: center;
          p:first-child {
            height: 80px;
            // background-image: url('../../assets/square_yellow.png');
            background-size: 42px 42px;
            background-repeat: no-repeat;
            background-position: 50% 0;
            line-height: 42px;
          }
          .one {
            p:first-child {
              background-image: url('../../assets/square_yellow.png');
            }
          }
          .two {
            color: #808080;
            p:first-child {
              background-image: url('../../assets/square_gray.png');
            }
          }
          .three {
            color: #808080;
            p:first-child {
              background-image: url('../../assets/square_gray.png');
            }
          }
          .line {
            position: relative;
            top: 15%;
            height: 1px;
            width: 200px;
            background-color: #fef;
            border-bottom: 2px solid #E6E6E6;
          }
        }
    }



}
</style>
