import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import MainPart from '../views/home/mainPart.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    redirect: { name: 'index' },
    children: [
      // 首页
     {
       path: 'index',
       name: 'index',
       alias: 'home',
       component: MainPart,
       redirect: { name: 'hotInSeason'},
       children: [
         {
           path: 'hot-in-season',
           name: 'hotInSeason',
           component: () => import('../views/home/hotInSeason.vue')
         },
         {
           path: 'supply',
           name: 'supply',
           component: () => import('../views/home/supply.vue')
         },
         {
           path: 'selection',
           name: 'selection',
           component: () => import('../views/home/selection.vue')
         },
         {
           path: 'promotion',
           name: 'promotion',
           component: () => import('../views/home/promotion.vue')
         },
         {
           path: 'require-info',
           name: 'requireInfo',
           component: () => import('../views/home/requireInfo.vue')
         }
       ]
     },
     //登录页面
     {
       path: 'login',
       name: 'login',
       component: () => import('../views/login/index.vue')
     },
     //  注册页面
     {
       path: 'register',
       name: 'register',
       component: () => import('../views/login/register.vue')
     },
     // 文章列表
     {
       path: 'passage-list',
       name: 'passageList',
       component: () => import('../views/passageList/index.vue')
     },
    //  文章详情
     {
       path: 'passage-detail',
       name: 'passageDetail',
       component: () => import('../views/passageDetail/index.vue')
     },
    //  商品列表
     {
       path: 'prod-list',
       name: 'prodList',
       component: () => import('../views/prodList/index.vue')
     },
    //  商品详情
     {
       path: 'prod-detail',
       name: 'prodDetail',
       component: () => import('../views/prodDetail/index.vue'),
       redirect: {name: 'prodDescription'},
       children: [
         {
           path: 'prod-description',
           name: 'prodDescription',
           component: () => import('../views/prodDetail/prodDescription.vue')
         },
         {
           path: 'prod-comment',
           name: 'prodComment',
           component: () => import('../views/prodDetail/prodComment.vue')
         }
       ]
     },
     // 下单页面
     {
       path: 'place-order',
       name: 'placeOrder',
       component: () => import('../views/placeOrder/index.vue')
     },
     //  发布页面
     {
       path: 'myPublished',
       name: 'myPublished',
       component: () => import('../views/myPublished/index.vue')
     },
     // 个人中心
     {
       path: 'my-account',
       name: 'myAccount',
       component: () => import('../views/myAccount/index.vue'),
       redirect: {name: 'myHomePage'},
      //  个人中心
       children: [
        //  个人主页
         {
           path: 'my-home-page',
           name: 'myHomePage',
           component: () => import('../views/myAccount/modules/myHomePage'),
           redirect: {name: 'myPosts'},
           children: [
             {
               path: 'my-posts',
               name: 'myPosts',
               component: () => import('../views/myAccount/modules/myHomePage/posts.vue')
             }
           ]
         },
        //  购物车
         {
           path: 'my-cart',
           name: 'myCart',
           component: () => import('../views/myAccount/modules/myCart')
         },
         {
           path: 'my-order',
           name: 'myOrder',
           component: () => import('../views/myAccount/modules/myOrder')
         },
         {
           path: 'my-groupon',
           name: 'myGroupon',
           component: () => import('../views/myAccount/modules/myGroupon')
         },
         {
          path: 'browsing-history',
          name: 'browsingHistory',
          component: () => import('../views/myAccount/modules/browsingHistory')
        },
        {
          path: 'myIntrest',
          name: 'my-intrest',
          component: () => import('../views/myAccount/modules/myIntrest')
        },
        {
          path: 'wallet',
          name: 'wallet',
          component: () => import('../views/myAccount/modules/wallet')
        },
        {
          path: 'identification',
          name: 'identification',
          component: () => import('../views/myAccount/modules/identification')
        },
        {
          path: 'message',
          name: 'message',
          component: () => import('../views/myAccount/modules/message')
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('../views/myAccount/modules/feedback')
        },
        {
          path: 'require-survey',
          name: 'requireSurvey',
          component: () => import('../views/myAccount/modules/requireSurvey')
        },
        {
          path: 'assignment',
          name: 'assignment',
          component: () => import('../views/myAccount/modules/assignment')
        },
        {
          path: 'agreement',
          name: 'agreement',
          component: () => import('../views/myAccount/modules/agreement')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/myAccount/modules/settings')
        }
       ]
     }

    ]

  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
