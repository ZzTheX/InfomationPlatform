<template>
  <div class='wallet'>
    <div class='wallet_card'>
      <div class='my_coins'>
        <span></span>
        <p class='text'>我的金币</p>
        <p class='number'>1450.15</p>
      </div>
      <div class='my_balance'>
        <span></span>
        <p class='text'>钱包余额</p>
        <p class='number'>977.00</p>
      </div>
    </div>
    <div class='record'>
      <p class='record_title'>收支记录</p>
      <div class='goods_card' v-for='(item, index) in recordList' :key='index'>
        <img class='goods_img' :src="item.src" >
        <div class='goods_info'>
          <p class='text_intro'>
            <span class='goods_title'>{{item.title}}</span>
            <span class='coins_record'>{{item.coins}}</span>
          </p>
          <p class='time_stamp'>{{item.time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recordList: [
        {
          src: require('../../../../assets/goods1.png'),
          title: '【速效杀菌除味】海尔家用侧拉门旋转转盘20升微波炉MZC-2070M1',
          coins: '+200金币',
          time: '2020-05-12  11：57：33'
        },
        {
          src: require('../../../../assets/goods2.png'),
          title: '【速效杀菌除味】海尔家用侧拉门旋转转盘20升微波炉MZC-2070M1',
          coins: '+200金币',
          time: '2020-05-12  11：57：33'
        },
        {
          src: require('../../../../assets/goods3.png'),
          title: '【速效杀菌除味】海尔家用侧拉门旋转转盘20升微波炉MZC-2070M1',
          coins: '+200金币',
          time: '2020-05-12  11：57：33'
        },
        {
          src: require('../../../../assets/goods2.png'),
          title: '【速效杀菌除味】海尔家用侧拉门旋转转盘20升微波炉MZC-2070M1',
          coins: '+200金币',
          time: '2020-05-12  11:57:33'
        },
        {
          src: require('../../../../assets/goods1.png'),
          title: '【速效杀菌除味】海尔家用侧拉门旋转转盘20升微波炉MZC-2070M1',
          coins: '+200金币',
          time: '2020-05-12  11:57:33'
        }
      ]
    }
  }

}
</script>

<style lang='less' scoped>
.wallet {
  min-height: 1240px;
  .wallet_card {
    height: 330px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 13px;
    text-align: center;
    div {
      width: 356px;
      height: 210px;
      box-shadow: 0px 0px 30px #eee;
      padding-top: 41px;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        width: 38px;
        height: 38px;
        background-image: url('../../../../assets/coins.png');
        background-size: contain;
        background-repeat: no-repeat;
        // padding-bottom: 10px;
        margin-bottom: 10px;
      }
     &:last-child {
       span {
         background-image: url('../../../../assets/balance.png');
       }
     }
     .text {
       font-size: 20px;
       color: #666;
     }
     .number {
       color: #FF4444;
       font-size: 30px;
     }
    }
  }
  .record {
    border-top: 13px solid #f5f5f5;
    padding: 20px 19px 0 18px;
    .record_title {
      font-size: 20px;
      color: #333;
      font-weight: bold;
      padding-bottom: 17px;
      border-bottom: 1px solid #E6E6E6;
      margin-bottom: 25px;
    }
    .goods_card {
      height: 86px;
      display: flex;
      margin-bottom: 37px;
      .goods_img {
        width: 136px;
        height: 86px;
      }
      .goods_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        background-color: #efe;;
        padding-left: 19px;
        padding-bottom: 9px;
        .text_intro {
          display: flex;
          justify-content: space-between;
          padding-top: 8px;
          font-size: 18px;
          .goods_title {
            color: #333;
          }
          .coins_record {
            color: #E7890E;
          }
        }
        .time_stamp {
          font-size: 14px;
          color: #808080;
        }
      }

    }
  }
}
</style>
