<template>
  <div>
    <div class="nav">
      <div class="center">
        <div class="space">
          <!-- 顶部导航栏下边信息搜索栏 -->
          <div class="log">
            <div class="yellow-box"></div>
            <span @click="goToIndexPage">信息平台</span>
          </div>
          <div class="search-bar">
            <div class="downList">
              <div></div>
            </div>
            <div class="search-box">
              <el-input
                placeholder="搜索商品/店铺..."
                v-model="input3"
                class="input-box input-with-select"
              >
                <el-select class="select-list" v-model="select" slot="prepend" placeholder="商品">
                  <el-option label="餐厅名" value="1"></el-option>
                  <el-option label="订单号" value="2"></el-option>
                  <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button class="yellow-bu" slot="append">搜索</el-button>
              </el-input>
            </div>
            <div class="get-add">
              <button class="click-b">发布</button>
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
      input1: "",
      input2: "",
      input3: "",
      select: ""
    };
  },
  methods: {
    goToIndexPage() {
      this.$router.push({ path: "index" });
      console.log("goTo");
    }
  }
};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  // justify-content: center;
  align-items: center;
  width: 100%;
  height: 96px;
  // max-width: 1920px;
  background: rgba(255, 255, 255, 1);
  font-size: 14px;
  > .center {
    margin: 0 auto;
    width: 1200px;
    > .space {
      display: flex;
      justify-content: space-between;
    }
  }
}

.log {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #333333;
  > .yellow-box {
    // display: inline-block;
    width: 42px;
    height: 42px;
    background-color: #ffc90f;
    margin-right: 5px;
    border: 2px solid rgba(245.245, 245, 1);
  }
  > span {
    cursor: pointer;
  }
}
.search-box {
  width: 725px;
  // height: 52px;
  > .input-box {
    border: 2px solid rgba(255, 201, 15, 1);
    height: 52px;
  }
}
.el-input-group__append {
  .yellow-bu {
    color: #ffc90f;
    background-color: #ffffff;
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
}
</style>
