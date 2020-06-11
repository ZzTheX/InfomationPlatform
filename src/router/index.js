import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import MainPart from '../views/home/mainPart.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
import getLoginState from '../auth'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home,
    redirect: { name: 'index' },
    meta: { auth: false },
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
       path: 'article-list',
       name: 'articleList',
       component: () => import('../views/articleList/index.vue')
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
      //  redirect: {name: 'prodDescription'},
      //  children: [
      //    {
      //      path: 'prod-description',
      //      name: 'prodDescription',
      //      component: () => import('../views/prodDetail/prodDescription.vue')
      //    },
      //    {
      //      path: 'prod-comment',
      //      name: 'prodComment',
      //      component: () => import('../views/prodDetail/prodComment.vue')
      //    }
      //  ]
     },
      // 立即下单
     {
       path: 'order-now',
       name: 'orderNow',
       component: () => import('../views/orderNow/index.vue'),
       meta: { auth: true}
     },
    // 商家主页  用户查看其他商家主页
     {
      path: 'merchant-home',
      name: 'merchantHome',
      component: () => import('../views/merchantHome'),
      redirect: { name: 'myPost' },
      children: [
        {
          path: 'my-post',
          name: 'myPost',
          component: () => import('../views/merchantHome/my-post.vue')
        }
      ]
     },
     //  发布页面
     {
       path: 'post',
       name: 'post',
       component: () => import('../views/post/index.vue'),
       redirect: {name: 'type'},
       meta: { auth: true},
       children: [
         // 选择发布类型
         {
          path: 'type',
          name: 'type',
          component: () => import('../views/post/type.vue'),
          meta: {auth: true}
         },
         // 供应信息表单
         {
          path: 'supply-form',
          name: 'supplyForm',
          component: () => import('../views/post/supply-info.vue')
         },
         // 需求信息表单
         {
          path: 'require-form',
          name: 'requireForm',
          component: () => import('../views/post/require-info.vue')
         },
         // 推文
         {
          path: 'post-essay',
          name: 'postEssay',
          component: () => import('../views/post/post-essay.vue')
         }
       ]
     },
     // 个人中心
     {
       path: 'my-account',
       name: 'myAccount',
       component: () => import('../views/myAccount/index.vue'),
       redirect: {name: 'myHomePage'},
       meta: { auth: true },
      //  个人中心
       children: [
        //  个人主页
         {
           path: 'my-homepage',
           name: 'myHomePage',
           component: () => import('../views/myAccount/modules/myHomePage'),
           redirect: {name: 'myPosts'},
           meta: { auth: true },
           children: [
            //  我发布的
             {
               path: 'my-posts',
               name: 'myPosts',
               component: () => import('../views/myAccount/modules/myHomePage/posts.vue'),
               meta: { auth: true }
             },
             // 评论
             {
              path: "comments",
              name: 'comments',
              component: () => import('../views/myAccount/modules/myHomePage/comment.vue'),
              meta: { auth: true }
             }
           ]
         },
        //  购物车
         {
           path: 'my-cart',
           name: 'myCart',
           component: () => import('../views/myAccount/modules/myCart'),
           meta: { auth: true }
         },
        //  我的订单
         {
           path: 'my-order',
           name: 'myOrder',
           component: () => import('../views/myAccount/modules/myOrder'),
           meta: { auth: true }
         },
        //  订单详情
        {
          path: 'order-detail',
          name: 'orderDetail',
          component: () => import('../views/myAccount/modules/myOrder/order-detail'),
          meta: { auth: true }
        },
         // 下单
         {
          path: 'place-order',
          name: 'placeOrder',
          component: () => import('../views/myAccount/modules/myOrder/place-order.vue'),
          meta: { auth: true }
         },
         // 我的团购
         {
           path: 'my-groupon',
           name: 'myGroupon',
           component: () => import('../views/myAccount/modules/myGroupon'),
           meta: { auth: true }
         },
         // 拼团详情
         {
          path: 'groupon-detail',
          name: 'grouponDetail',
          component: () => import('../views/myAccount/modules/myGroupon/groupon-detail.vue'),
          meta: { auth: true }
         },
         // 浏览历史
         {
          path: 'browsing-history',
          name: 'browsingHistory',
          component: () => import('../views/myAccount/modules/browsingHistory'),
          meta: { auth: true }
        },
        // 我的关注
        {
          path: 'my-intrest',
          name: 'myIntrest',
          component: () => import('../views/myAccount/modules/myIntrest'),
          meta: { auth: true }
        },
        // 钱包
        {
          path: 'wallet',
          name: 'wallet',
          component: () => import('../views/myAccount/modules/wallet'),
          meta: { auth: true }
        },
        // 认证
        {
          path: 'identification',
          name: 'identification',
          component: () => import('../views/myAccount/modules/identification'),
          meta: { auth: true }
        },
        // 采购认证
        {
          path: 'purchase-identify',
          name: 'purchaseIdentify',
          component: () => import('../views/myAccount/modules/identification/purchase-identify.vue'),
          meta: { auth: true }
        },
        // 供应商认证
        {
          path: 'supplier-identify',
          name: 'supplierIdentify',
          component: () => import('../views/myAccount/modules/identification/supplier-identify.vue'),
          meta: { auth: true }
        },
        // 添加物流园区
        {
          path: 'add-field',
          name: 'addField',
          component: () => import('../views/myAccount/modules/identification/add-field.vue'),
          meta: { auth: true }
        },
        // 实名认证
        {
          path: 'real-name-identify',
          name:'realNameIdentify',
          component: () => import('../views/myAccount/modules/identification/real-name-identify.vue'),
          meta: { auth: true }
        },
        // 消息
        {
          path: 'message',
          name: 'message',
          component: () => import('../views/myAccount/modules/message'),
          redirect: {name: 'notification'},
          meta: { auth: true },
          children: [
            //  通知消息
            {
              path: 'notification',
              name: 'notification',
              component: () => import('../views/myAccount/modules/message/notification.vue'),
              meta: { auth: true }
            },
            // 互动消息
            {
              path: 'interaction',
              name: 'interaction',
              component: () => import('../views/myAccount/modules/message/interaction.vue'),
              meta: { auth: true }
            },
            // 聊聊
            {
              path: 'chat',
              name: 'chat',
              component: () => import('../views/myAccount/modules/message/chat.vue'),
              meta: { auth: true }
            },
            {
              path: 'active',
              name: 'active',
              component: () => import('../views/myAccount/modules/message/active.vue'),
              meta: { auth: true }
            },
            // 聊聊详情   对话页面
            {
              path: 'chat-detail',
              name: 'chat-detail',
              component: () => import('../views/myAccount/modules/message/chat-detail.vue'),
              meta: { auth: true }
            }
          ]
        },
        // 意见反馈
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('../views/myAccount/modules/feedback'),
          meta: { auth: true }
        },
        // 需求调研页面（选择类型）
        {
          path: 'require-survey',
          name: 'requireSurvey',
          component: () => import('../views/myAccount/modules/requireSurvey'),
          meta: { auth: true }
        },
        // 需求调研页面（调研表格）
        {
          path: 'survey-form',
          name: 'surveyForm',
          component: () => import('../views/myAccount/modules/requireSurvey/survey-form.vue'),
          meta: { auth: true }
        },
        {
          path: 'assignment',
          name: 'assignment',
          component: () => import('../views/myAccount/modules/assignment'),
          meta: { auth: true }
        },
        {
          path: 'agreement',
          name: 'agreement',
          component: () => import('../views/myAccount/modules/agreement'),
          meta: { auth: true }
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/myAccount/modules/settings'),
          redirect: {name:'personal-info'},
          meta: { auth: true },
          children: [
            {
              path: 'personal-info',
              name: 'personal-info',
              component: () => import('../views/myAccount/modules/settings/personal-info.vue'),
              meta: { auth: true }
            }
          ]
        }
       ]
     }

    ]

  }
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

//  路由守卫
router.beforeEach((to, from, next) => {
  // 获取token
  let token = localStorage.getItem('token')
  // 判断token是否存在
  if( token ) {
    // 如果存在再判断去的页面是否登录页面
    console.log('token存在',token)
    if(to.name === 'login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 如果不存在 判断去的页面是否需要登录权限
    if(to.meta.auth === true) {
      next('/login'+'?from='+from.fullPath)
    } else {
      next()
    }
  }
})

export default router