<template>
  <div class='goods_list_page'>
    <div class='goods_list_nav'>
      <p @click="handleConditionSearch('area')">区域</p>
      <p @click="handleConditionSearch('default')">默认</p>
      <p @click="handleConditionSearch('saleTime')">可售时间</p>
      <p @click="handleConditionSearch('salePrice')">价格排序</p>
      <p @click='handleFilter'>筛选</p>
    </div>
    <div class='goods_list_mian'>
      <goods-card 
        v-for='(item, index) in prodListData' 
        :key='index' 
        :prodData='item' 
        :prodCardIndex="index"
        @click.native='goToProductDetail(item.product_tag, item.product_id)'></goods-card>
    </div>
    <div class='pagination'>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[16]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"></el-pagination>
    </div>

    <!-- 筛选 -->
    <div class='filter_popout' v-show='isShowFilter' @click='hidenFilter'>
      <div class='conditions'>
        <div class='breed'>
          <p class='label'>品种:</p>
          <div class='breeds'>
            <div class="breed_item">品种1</div>
            <div class="breed_item">品种2</div>
            <div class="breed_item">品种3</div>
            <div class="breed_item">品种4</div>
            <div class="breed_item">品种5</div>
            <div class="breed_item">品种6</div>
            <div class="breed_item">品种7</div>
            <div class="breed_item">品种8</div>
            <div class="breed_item">品种9</div>
            <div class="breed_item">品种10</div>
          </div>
        </div>
        <div class='price_range'>
          <p class='label'>价格范围:</p>
          <div>
            <el-input placeholder="最低价"></el-input>
            <span> - </span>
            <el-input placeholder="最高价"></el-input>
          </div>
        </div>
        <div class='sale_time'>
          <p class='label'>销售时间:</p>
          <div>
            <el-date-picker type='date'></el-date-picker>-
            <el-date-picker type='date'></el-date-picker>
          </div>
        </div>
        <div class='quantity'>
          <p class='label'>数量(千克):</p>
          <div>
            <p>
              <span>0-1000kg</span>
              <span>10000-5000kg</span>
              <span>5000kg-10000kg</span>
            </p>
            <p>
              <el-input placeholder="最低数量"></el-input>-
              <el-input placeholder="最高数量"></el-input>
            </p>
          </div>
        </div>
        <div class='is_groupon'>
          <p class='label'>拼/整:</p>
          <span>可拼</span>
        </div>
        <div class='operation_bar'>
          <span>重置</span>
          <span @click='confirmFilter'>确认</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goodsCard from '../../components/goodsComponents/goods-card.vue'
export default {
  data () {
    return {
      currentPage4: 0,
      isShowFilter: false,
      prodListData: [
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
        {
          main_picture: require('../../assets/index/bestsell.png'),
          product_name: '商品名称',
          is_support_bulk_purchase: true,
          des: '商品描述',
          num: 100,
          available_inventory: 999,
          start_time: new Date(),
          end_time: new Date(),
          product_price: 800,
          product_address: '成都',
          want_count: 10
        },
      ],
      prodList: []
    }
  },
  created () {
    console.log(this.$route.query)
    // this.getProductList()
  },
  methods: {
    handleFilter () {
      this.isShowFilter = true
    },
    handleConditionSearch (condition) {
      if(condition === 'saleTime') {
        this.http({
         url: '/api/product/getProductList',
         method: 'get',
         params: {
           time: 1
         }
        }).then(res => {
          console.log('可售时间排序', res)
        })
      }
    },
    sortBySaleTime () {

    },
    getProductList () {
      let paramas = {

        keyword: this.$route.query.keyword
      }
      this.http({
        method: 'get',
        url: '/api/product/getProductList',
        paramas
      }).then(res => {
        console.log('商品列表数据res:',res)
        this.prodList = res.data.result.rows
        this.$store.commit('goodsListChange', this.prodList)
      })
    },
    goToProductDetail (product_tag, product_id) {
      this.$router.push({
        name: 'prodDetail',
        query: {
          product_tag,
          product_id
        }
      })
    },
    handleSizeChange () {

    },
    handleCurrentChange () {
      // this.getProductList()
    },
    confirmFilter () {
      this.isShowFilter = false
    },
    hidenFilter () {
      if(this.isShowFilter) {
        this.isShowFilter = false
      }
    }
  },
  components: {
    goodsCard
  }
}
</script>

<style lang='less' scoped>
.goods_list_page {
  width: 1200px;
  // height: 1855px;
  margin: auto;
  .goods_list_nav {
    display: flex;
    justify-content: space-around;
    padding-left: 121px;
    padding-right: 56px;
    height:50px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(214,214,214,1);
    line-height: 50px;
    color: #333;
    font-size: 18px;
    margin-bottom: 21px;
    p {
      cursor: pointer;
    }
    p:last-child {
      padding-right: 25px;
      background-image: url('../../assets/filtrate.png');
      background-size: 16px 18px;
      background-position: 100% 50%;
      background-repeat: no-repeat;
    }
  }
  .goods_list_mian {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .pagination {
    margin-top: 20px;
    height: 50px;
  }
  .filter_popout {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    .conditions {
      width: 640px;
      height: 500px;
      background-color: #fff;
      position: fixed;
      top: 178px;
      left: 50%;
      transform: translateX(-50%);
      padding-top: 22px;
      padding-left: 30px;
      padding-right: 35px;
      >div {
        display: flex;
        >p {
          width: 76px;
          text-align: right;
        }
        
      }
      >div:first-child {
        height: 124px;
        .breeds {
          display: flex;
          width: 500px;
          padding-left: 20px;
          flex-wrap: wrap;
          .breed_item {
            box-sizing: content-box;
            width: 50px;
            height: 23px;
            line-height: 23px;
            text-align: center;
            padding: 7px 12px;
            background-color: #EDEAEA;
            margin-right: 20px;
            border-radius: 4px;
            cursor: pointer;
          }
        }
      }
      .price_range {
        margin-bottom: 20px;
        >div {
          padding-left: 20px;
          height: 40px;
          display: flex;
          .el-input {
            width: 120px;
          }
        }
      }
      .sale_time {
        margin-bottom: 20px;
        >div {
          padding-left: 20px;
        }
      }
      .quantity {
        margin-bottom: 20px;
        >div {
          padding-left: 20px;
          // display: flex;
          >p {
            display: flex;
            margin-bottom: 20px;
            >span {
              width: 140px;
              height: 37px;
              line-height: 37px;
              text-align: center;
              background-color: #EDEAEA;
              margin-right: 20px;
              border-radius: 4px;
            }
            .el-input {
              width: 120px;
            }
          }
        }
      }
      .is_groupon {
        margin-bottom: 20px;
        >span {
          margin-left: 20px;
          width: 100px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          display: inline-block;
          background-color: #EDEAEA;
          border-radius: 4px;
        }
      }
      .operation_bar {
        display: flex;
        justify-content: space-around;
        span {
          width: 120px;
          height: 32px;
          text-align: center;
          line-height: 32px;
          border-radius: 4px;
          background-color: #D9D9D9;
          cursor: pointer;
          &:last-child {
            background-color: #FFC90F;
          }
        }
      }
    }
  }
}
</style>
