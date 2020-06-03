<template>
  <div>
    <div class="nav">
      <div class="center">
        <div class="space">
          <!-- 顶部导航栏下边信息搜索栏 -->
          <div class="logo" @click="goToIndexPage">
            <!-- <div class="yellow-box" @click='goToIndexPage'></div>
            <span >信息平台</span> -->
          </div>
          <div class="search-bar">
            <div class="downList" @click='toChooseCategory'>
            </div>
            <div class="search-box">
              <input
                type="text"
                placeholder="搜索商品"
                v-model="keyword">
              <button @click='handleSearch'>搜索</button>
            </div>
            <div class="get-add">
              <button class="click-b" @click="toPost">发布</button>
            </div>
          </div>
        </div>
        <!-- 选择分类弹窗 -->
        <div class='category_popup' v-show='isShowCategory'>
          <div class='popup_sidebar'>
            <li class='active'>一级分类1</li>
            <li>一级分类1</li>
            <li>一级分类1</li>
            <li>一级分类1</li>
          </div>
          <div class='popup_right'>
            <div v-for='i in 12' :key='i' @click="handleClick">
              <img src='../../assets/category.png' alt="">
              <span>{{'二级分类' + i}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowCategory: false,
      keyword: "",
      input1: "",
      input2: "",
      input3: "",
      select: ""
    };
  },
  methods: {
    goToIndexPage() {
      this.$router.push({ path: "/index" });
      console.log("goTo");
    },
    toChooseCategory () {
      this.isShowCategory = !this.isShowCategory
    },
    handleSearch () {
      this.$router.push({name: 'prodList'})
    },
    handleClick () {
      this.isShowCategory = false
    },
    toPost () {
      this.$router.push({name: 'post'})
    }
  }
};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  background: rgba(255, 255, 255, 1);
  font-size: 14px;
  > .center {
    margin: 0 auto;
    width: 1200px;
    position: relative;
    > .space {
      display: flex;
      justify-content: space-between;
    }
    .category_popup {
      display: flex;
      position: absolute;
      top: 70px;
      width: 1200px;
      height: 373px;
      background-color: #fffaec;
      font-size: 20px;
      border: 1px solid #FFF5F5F5;
      z-index: 999999;
      .popup_sidebar {
        width: 174px;
        text-align: center;
        line-height: 60px;
        font-weight: 500;
        background-color: #fff;
        >li {
          height: 60px;
        }
        li.active {
          background-color: #FFC90F;
        }
      }
      .popup_right {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        padding: 27px 35px 0 82px;
        background-color: #FFFAEC;
        >div {
          width: 151px;
          height: 169px;
          display: flex;
          flex-direction: column;
          border-right: 47px solid #FFFAEC;
          >img {
            width: 104px;
            background-image: url('../../assets/category.png');
            cursor: pointer;
          }
          >span {
            text-align: center;
            height: 65px;
            line-height: 65px;
            cursor: pointer;
          }
        }
      }
    }
    .category_popup::after {
      position: absolute;
      top: -25px;
      left: 297px;
      content: '';
      display: block;



 border-right: 28px solid transparent;
      border-left: 28px solid transparent;
      border-bottom: 28px solid #FFFAEC;
    }
  }
}

.logo {
  display: flex;
  align-items: center;
  width: 200px;
  font-size: 18px;
  color: #333333;
  background-image: url('../../assets/index/logo.png');
  background-size: 170px 50px;
  background-repeat: no-repeat;
  cursor: pointer;
  > .yellow-box {
    // display: inline-block;
    width: 42px;
    height: 42px;
    background-color: #ffc90f;
    margin-right: 5px;
    border: 2px solid rgba(245.245, 245, 1);
    cursor: pointer;
  }
  > span {
    cursor: pointer;
  }
}
.search-box {
  display: flex;
  width: 725px;
  height:52px;
  background:rgba(255,255,255,1);
  border:2px solid rgba(255,201,15,1);
  border-radius:5px;
  >input::-webkit-input-placeholder {
    color: #999;
   /* 字体大小直接写样式即可 */
    font-size: 16px;
}
  .el-select {
    height: 50px;
    .el-input {
      height: 52px;
    }
  }
  > input {
    // width: 100%;
    background-color: #fff;
    flex-grow: 1;
    outline: none;
    border: none;
    padding-left: 18px;
  }
  > button {
    width: 69px;
    background-color: #fff;
    outline: none;
    border-left: 2px solid rgba(255,201,15,1);
    border-radius: 5px;
    border-top: none;
    border-right: none;
    border-bottom: none;
  }

}
.el-input-group__append {
  .yellow-bu {
    color: #ffc90f;
    background-color: #FFC90F;
    border: 1px solid #ffc90f;
    height: 52px;
    border-right: none;
    border-radius: 0;
  }
}
.search-bar {
  display: flex;
  .get-add {
    margin-left: 15px;
    > .click-b {
      width: 78px;
      height: 52px;
      background: rgba(255, 201, 15, 1);
      border-radius: 5px;
      border: none;
      outline: none;
    }
  }
}
.el-input__inner {
  height: 52px !important;
}
.select-list {
  background-color: #ffffff;
  border-left: 0;
}
.downList {
  width: 51px;
  height: 52px;
  background-color: rgba(255, 201, 15, 1);
  margin-right: 27px;
  background-image: url('../../../src/assets/index/more.png');
  background-repeat: no-repeat;
  background-size: 28px 23px;
  background-position: 11px 14px;
  cursor: pointer;
}
</style>
