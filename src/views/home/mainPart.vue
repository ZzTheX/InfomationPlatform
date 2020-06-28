<template>
  <div class='main_part'>
    <div class='inner'>
      <div class="swiper_container" ref="container">
        <div class="swiper_wrapper" ref='wrapper'>
          <img 
            v-for='(item, index) in bannerList'
            :key='index'
            class='swiper_slide'
            ref='slide'
            :src='item.image'
           >
        </div>
        <div class="swiper-pagination"></div>
		  </div>
      <!-- 四个商品分类 -->
      <div class='prod_classify'>
        <div class="prod_classify_card" v-for='(item, index) in categories' :key='index' @click='searchByCategory(item.category_id)'>
          <img :src="item.picture">
          <p>{{item.name}}</p>
        </div>
      </div>
      <!-- 首页banner -->
      <div class='banner'>
        <img :src="require('../../assets/index/banner2.png')" alt="">
      </div>
      <!-- 热门分类 -->
      <div class='hot_sale'>
        <p class='hot_sale_head'>热门分类</p>
        <div class='hot_sale_cardsList'>
          <!-- {{bannerList}} -->
          <img 
            class='hot_sale_card' 
            @click='goToProdList()'
            v-for="(item, index) in hotSaleList"  
            :key='index' 
            :src='item.picture' 
            :style="{marginBottom: index > 2 ? 0 : '35px'}">
        </div>
      </div>
      <!-- 查看更多  => 转文章列表 -->
      <div class='more_passages'>
        <p>与品质生活不期而遇献给聪明可爱的你活不期而遇献给聪...</p>
        <span @click='goToPassageList'>查看更多 ></span>
      </div>
      <!-- 热销产品 -->
      <div class='best_sell'>
        <div class='best_sell_head'>
          <p class='best_sell_head_left'>热销产品</p>
          <p class='best_sell_head_right'>查看更多 ></p>
        </div>
        <div class='best_sell_cardsList'>
            <product-card v-for='(item, index) in hotProducts' :key='index' :prodData='item' :prodCardIndex='index'></product-card>
        </div>
      </div>
      <!--今日主推  -->
      <div class='recommand'>
        <div class='recommand_head'>
          <p class='recommand_head_left'>今日主推</p>
          <p class='recommand_head_right'>查看更多 ></p>
        </div>
        <img class='recommand_banner' :src="todayPush[0].picture">
        <div class='recommand_carousel'>
          <img :src="todayPush[1].picture" class='recommand_carousel_left'>
          <img :src="todayPush[2].picture" class='recommand_carousel_center'>
          <img :src="todayPush[3].picture" class='recommand_carousel_right'>
        </div>
      </div>
      <!-- 当季热门 -->
      <div class='product_category'>
        <div class='router_nav'>
          <p
          class='router_nav_item'
          :class="{'router_nav_item_active': index === routerNavIndex}"
          v-for='(item, index) in routerNavList'
          :key='index'
          @click='handleClick(index, item.routerPath)'
          >{{item.title}}</p>
        </div>
        <div class='best_in_season'>
          <productCard v-for='(item, index) in currentSeasonHotProd' :key='index' :prodData='item' :prodCardIndex='index'></productCard>
        </div>
        <div class='el_page'>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="16"
            :page-sizes="[16]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper';
import productCard from '../../components/goodsComponents/prod-card'
export default {
  data () {
    return {
      groupId: 1,
      carouselIndex: 0,
      page_no: 1,
      page_size: 16,
      currentPage: 1,
      imgList: [
        {url: require('../../assets/index/banner.png')}
      ],
      bannerList: [
       
      ],
      todayPush: [],
      categories: [],
      categories1: [
        {name: '商品分类', picture: require('../../assets/index/category1.png')},
        {name: '商品分类', picture: require('../../assets/index/category2.png')},
        {name: '商品分类', picture: require('../../assets/index/category3.png')},
        {name: '商品分类', picture: require('../../assets/index/category3.png')},
        {name: '', picture: require('../../assets/index/category5.png')}
      ],
      hotSaleList: [
        {src: require('../../assets/index/hotsale1.png')},
        {src: require('../../assets/index/hotsale2.png')},
        {src: require('../../assets/index/hotsale3.png')},
        {src: require('../../assets/index/hotsale1.png')},
        {src: require('../../assets/index/hotsale2.png')},
        {src: require('../../assets/index/hotsale3.png')}
      ],
      hotProducts: [],
      bestSellList: [
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/0/507', price: 800, origin: '成都'},
        {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'}
      ],
      // 当季热门
      currentSeasonHotProd: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      routerNavList: [
        {routerPath: '/index/hot-in-season', title: '当季热门'},
        {routerPath: '/index/supply', title: '产业园直供'},
        {routerPath: '/index/selection', title: '精选好货'},
        {routerPath: '/index/promotion', title: '特惠促销'},
        {routerPath: '/index/require-info', title: '需求信息'}
      ],
      routerNavIndex: 0
    }
  },
  created () {
   this.getAllHomePageData()
   this.getCurrentSeasonHotProd()
  },
  mounted () {
  },
   components: {
    productCard
   },
   methods: {
     // 获取首页数据
     getAllHomePageData () {
      this.http.get('/api/product/getProductHome').then(res => {
        if(res.data.code === 200) {
          // 商品分类数据
          this.categories = res.data.result.categories
          //  轮播图数据
          this.bannerList = res.data.result.home_banner
          //  复制第一张图到末尾
          this.bannerList.push(this.bannerList[0])
          // 热门分类
          this.hotSaleList =  res.data.result.top_categories
          // 今日主推
          this.todayPush = res.data.result.today_push
          // 热销产品
          this.hotProducts = res.data.result.hot_products
          console.log('热销产品：', res.data.result.hot_products)
          console.log('热销产品:', this.hotProducts)
          
        }
        console.log('首页返回数据:', res.data.result)
      })
     },
     // 获取当季热门, 产业园直供, 特选好货, 需求信息
     getCurrentSeasonHotProd () {
       let page_no = this.currentPage
       this.http.get('/api/product/getProductByCategory', {
         groupId: this.groupId,
         page_no: this.currentPage
       }).then(res => {
         console.log('当季热门返回数据', res)
         if(res.data.code===200) {
           console.log('当季热门数据：',res.data.result.rows)
           this.currentSeasonHotProd = res.data.result.rows
         }
       })
     },
     goToProdList () {
       this.$router.push({
         name: 'prodList'
       })
     },
     handleClick (index, path) {
       this.routerNavIndex = index
       this.groupId = index+1
       this.getCurrentSeasonHotProd()
      //  console.log(path)
      //  this.$router.replace({ path })
     },
     goToPassageList () {
       this.$router.push('/article-list')
     },
     // 轮播图
     startCarousel () {
       console.log('refs:', this.refs.wrapper)
       var wrapper = this.$refs.wrapper
       console.log(wrapper)
      let timer = setInterval(() => {
        this.carouselIndex++
        // wrapper.style.transition = 'transform 3s linear'
        console.log(wrapper)
        wrapper.style.transform ='translatex('+(-this.carouselIndex*1200)+ 'px'+')' 
        if(this.carouselIndex >= 4) {
          this.carouselIndex = 0
        }
      }, 3000) 
     },
     searchByCategory () {
       this.$router.push({
         name: 'prodList'
       })
      console.log('通过商品分类获取产品列表')
     },
     handleSizeChange () {

     },
     handleCurrentChange (value) {
       console.log('currentchange', value)
       this.getCurrentSeasonHotProd()
     }
   }
}
</script>

<style lang="less" scoped>
.main_part {
  // height: 5244px;
  min-height: 1000px;
  width: 1200px;
  margin: auto;
  background-color: rgba(245, 245, 245, .5);
  .inner {
    width: 1200px;
    margin: auto;
    background-color: #fff;
    .swiper_container {
      position: relative;
      width: 1200px;
      height: 500px;
      overflow: hidden;
      .swiper_wrapper {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 6000px;
        display: flex;
        .swiper_slide {
          width: 1200px;
          height: 500px;
        }
      }
    }
    .carousel {
      height: 500px;
      overflow: hidden;
      margin-bottom: 2px;
    }
    .prod_classify {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding-top: 18px;;
      height:219px;
      margin-bottom: 41px;
      .prod_classify_card {
        display: flex;
        flex-direction: column;
        width: 214px;
        >img {
          width: 214px;
          height: 136px;
          margin-bottom: 16px;
        }
        >p {
          color: #000;
          font-size: 24px;
          font-weight: 400;
          text-align: center;
          font-family: Microsoft YaHei;
        }
      }
    }
    .banner {
      // background-color: orange;
      height: 286px;
      margin-bottom: 62px;
      >img {
        height: 286px;
      }
    }
    .hot_sale {
      margin-bottom: 50px;
      .hot_sale_head {
        border-left:6px solid #FFC90F;
        padding-left: 20px;
        font-size: 30px;
        margin-bottom: 26px;
      }
      .hot_sale_cardsList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .hot_sale_card {
          width: 378px;
          height: 168px;
          margin-bottom: 35px;
          background-color: #eee;
        }
      }
    }
    .more_passages {
      width: 1200px;
      height: 80px;
      padding-left: 77px;
      padding-right: 25px;
      line-height: 80px;
      font-size: 24px;
      color: #333;
      border: 1px solid #E6E6E6;
      margin-bottom: 45px;
      display: flex;
      justify-content: space-between;

      span:last-child {
        color: #999999;
        cursor: pointer;
      }

    }
     // 热销产品
    .best_sell {
      height: 900px;
      margin-bottom: 58px;
      .best_sell_head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 27px;
        .best_sell_head_left {
          border-left: 6px solid #FFC90F;
          padding-left: 20px;
          font-size: 30px;
        }
        .best_sell_head_right {
          box-sizing: border-box;
          padding-top: 16px;
          color: #333333;
          font-size: 16px;
          cursor: pointer;
        }
      }
      // 热销产品卡片列表
      .best_sell_cardsList {
        display: flex;
        flex-wrap: wrap;
      }

    }
    // 今日主推
    .recommand {
      margin-bottom: 63px;
      .recommand_head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;
        .recommand_head_left {
          font-size: 30px;
          padding-left: 20px;
          border-left: 6px solid #FFC90F;
        }
        .recommand_head_right {
          box-sizing: border-box;
          padding-top: 7px;
          font-size: 16px;
          color: #333;
          cursor: pointer;
        }
      }
      .recommand_banner {
        width: 1200px;
        height: 419px;
        margin-bottom: 36px;
      }
      .recommand_carousel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 386px;
        .recommand_carousel_left {
          width: 205px;
          height: 348px;
        }
         .recommand_carousel_right {
           width: 205px;
           height: 348px;
         }
         .recommand_carousel_center {
           width: 743px;
           height: 386px;
         }
      }

    }
    .product_category {
      // height: 1612px;
      .router_nav {
        display: flex;
        justify-content: space-around;
        font-size: 30px;
        .router_nav_item {
          cursor: pointer;
          user-select: none;
        }
        .router_nav_item_active {
          border-bottom: 7px solid #FFC90F;
        }
      }
      .best_in_season {
        min-height: 600px;
        width: 100%;
        padding-top: 38px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
      }
      .router_view {
        height: 1574px;
      }
    }

  }
}
</style>
