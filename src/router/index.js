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
     // 下单页面 消息
     {
       path: 'place-order',
       name: 'placeOrder',
       component: () => import('../views/placeOrder/index.vue')
     },
     //  发布页面
     {
       path: 'post',
       name: 'post',
       component: () => import('../views/post/index.vue'),
       redirect: {name: 'type'},
       children: [
         // 选择发布类型
         {
          path: 'type',
          name: 'type',
          component: () => import('../views/post/type.vue')
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
           children: [
            //  我发布的
             {
               path: 'my-posts',
               name: 'myPosts',
               component: () => import('../views/myAccount/modules/myHomePage/posts.vue')
             },
             // 评论
             {
              path: "comments",
              name: 'comments',
              component: () => import('../views/myAccount/modules/myHomePage/comment.vue')
             }
           ]
         },
        //  购物车
         {
           path: 'my-cart',
           name: 'myCart',
           component: () => import('../views/myAccount/modules/myCart')
         },
        //  我的订单
         {
           path: 'my-order',
           name: 'myOrder',
           component: () => import('../views/myAccount/modules/myOrder')
         },
         // 下单
         {
          path: 'place-order',
          name: 'placeOrder',
          component: () => import('../views/myAccount/modules/myOrder/place-order.vue')
         },
         // 我的团购
         {
           path: 'my-groupon',
           name: 'myGroupon',
           component: () => import('../views/myAccount/modules/myGroupon')
         },
         // 拼团详情
         {
          path: 'groupon-detail',
          name: 'grouponDetail',
          component: () => import('../views/myAccount/modules/myGroupon/groupon-detail.vue'),
         },
         // 浏览历史
         {
          path: 'browsing-history',
          name: 'browsingHistory',
          component: () => import('../views/myAccount/modules/browsingHistory')
        },
        // 我的关注
        {
          path: 'my-intrest',
          name: 'myIntrest',
          component: () => import('../views/myAccount/modules/myIntrest')
        },
        // 钱包
        {
          path: 'wallet',
          name: 'wallet',
          component: () => import('../views/myAccount/modules/wallet')
        },
        // 认证
        {
          path: 'identification',
          name: 'identification',
          component: () => import('../views/myAccount/modules/identification')
        },
        // 采购认证
        {
          path: 'purchase-identify',
          name: 'purchaseIdentify',
          component: () => import('../views/myAccount/modules/identification/purchase-identify.vue')
        },
        // 供应商认证
        {
          path: 'supplier-identify',
          name: 'supplierIdentify',
          component: () => import('../views/myAccount/modules/identification/supplier-identify.vue')
        },
        // 实名认证
        {
          path: 'real-name-identify',
          name:'realNameIdentify',
          component: () => import('../views/myAccount/modules/identification/real-name-identify.vue')
        },
        // 消息
        {
          path: 'message',
          name: 'message',
          component: () => import('../views/myAccount/modules/message'),
          redirect: {name: 'notification'},
          children: [
            //  通知消息
            {
              path: 'notification',
              name: 'notification',
              component: () => import('../views/myAccount/modules/message/notification.vue')
            },
            // 互动消息
            {
              path: 'interaction',
              name: 'interaction',
              component: () => import('../views/myAccount/modules/message/interaction.vue')
            },
            // 聊聊
            {
              path: 'chat',
              name: 'chat',
              component: () => import('../views/myAccount/modules/message/chat.vue')
            },
            {
              path: 'active',
              name: 'active',
              component: () => import('../views/myAccount/modules/message/active.vue')
            },
            // 聊聊详情   对话页面
            {
              path: 'chat-detail',
              name: 'chat-detail',
              component: () => import('../views/myAccount/modules/message/chat-detail.vue')
            }
          ]
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('../views/myAccount/modules/feedback')
        },
        // 需求调研页面（选择类型）
        {
          path: 'require-survey',
          name: 'requireSurvey',
          component: () => import('../views/myAccount/modules/requireSurvey')
        },
        // 需求调研页面（调研表格）
        {
          path: 'survey-form',
          name: 'surveyForm',
          component: () => import('../views/myAccount/modules/requireSurvey/survey-form.vue')
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
          component: () => import('../views/myAccount/modules/settings'),
          redirect: {name:'personal-info'},
          children: [
            {
              path: 'personal-info',
              name: 'personal-info',
              component: () => import('../views/myAccount/modules/settings/personal-info.vue')
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

export default router
