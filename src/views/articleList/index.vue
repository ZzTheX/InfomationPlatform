<template>
  <div class='passageList'>
    <div class='pagination'>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="6"
        :pager-count='13'
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
    <div class='card_list'>
      <passage-card v-for='(item, index) in cardList' :key='index' :passage-data='item'></passage-card>
    </div>
    <div class='pigination_bottom'>
       <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="6"
        :pager-count='13'
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import passageCard from './passageCard.vue'

export default {
  data () {
    return {
      cardList: [
        {
          passageTitle: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          userAvatar: require('../../assets/user_avatar.png'),
          userName: '此处为用户名',
          postTime: '23小时前',
          passageContent: '文章正文',
          prodImg: require('../../assets/passage_list.png'),
          imgMini: require('../../assets/goods_brief.png')
        },
        {
          passageTitle: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          userAvatar: require('../../assets/user_avatar.png'),
          userName: '此处为用户名',
          postTime: '23小时前',
          passageContent: '文章正文',
          prodImg: require('../../assets/passage_list.png'),
          imgMini: require('../../assets/goods_brief.png')
        },
        {
          passageTitle: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          userAvatar: require('../../assets/user_avatar.png'),
          userName: '此处为用户名',
          postTime: '23小时前',
          passageContent: '文章正文',
          prodImg: require('../../assets/passage_list.png'),
          imgMini: require('../../assets/goods_brief.png')
        },
        {
          passageTitle: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          userAvatar: require('../../assets/user_avatar.png'),
          userName: '此处为用户名',
          postTime: '23小时前',
          passageContent: '文章正文',
          prodImg: require('../../assets/passage_list.png'),
          imgMini: require('../../assets/goods_brief.png')
        },
        {
          passageTitle: '文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
          userAvatar: require('../../assets/user_avatar.png'),
          userName: '此处为用户名',
          postTime: '23小时前',
          passageContent: '文章正文',
          prodImg: require('../../assets/passage_list.png'),
          imgMini: require('../../assets/goods_brief.png')
        }
      ]
    }
  },
  created () {
    // this.$http.get('')
  },
  methods: {
    getPassageList () {
      let para = {
      }
      this.loading = true

    }
  },
  components: {
    passageCard
  }
}
</script>

<style lang='less' scoped>
.passageList {
  width: 100%;
  margin: auto;
  background-color: #f0f0f0;
  .pagination {
    width: 100%;
    height: 70px;
    background-color: #fff;
    .el-pagination {
      width: 1200px;
      margin: auto;
    }
  }
  /deep/.el-pagination__jump {
    float: right;
  }
  /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #FFC90F;
  }
  /deep/.el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #000;
  }
  .card_list {
    width: 1200px;
    margin: auto;
    padding-top: 22px;
    background-color: #f0f0f0;
    min-height: 1000px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .pigination_bottom {
    height:80px;
    padding-top: 20px;
    background:rgba(255,255,255,1);
    .el-pagination {
      width: 1200px;
      margin: auto;
    }
  }
}

</style>
