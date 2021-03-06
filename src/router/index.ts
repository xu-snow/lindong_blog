import Vue from 'vue'
import VueRouter from 'vue-router'
import { REGISTER_PATH } from '../constant/path'
import { authorisation } from '@/req'
import { fetchItem } from '@/handle'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/front/app'),
      redirect: 'articles',
      children: [
        { path: 'articles', component: () => import('../views/front/list') },
        { path: 'articles/:id', component: () => import('../views/front/article') }
      ]
    },
    {
      path: REGISTER_PATH,
      component: () => import('../views/register/login')
    },

    {
      path: '/admin',
      meta: { requireAuth: true },
      component: () => import('../views/back/app'),
      children: [
        { path: 'classes', component: () => import('../views/back/classes') },
        { path: 'articles', component: () => import('../views/back/list') },
        { path: 'articles/create', component: () => import('../views/back/create') },
        { path: 'articles/:id', component: () => import('../views/back/create') },
        { path: '*', redirect: '/admin/articles' }

      ],
      redirect: '/admin/articles',
      beforeEnter(to, from, next) {
        fetchItem(authorisation.isLogin, undefined, (res) => {
          if (res && res.islogin) {
            next()
          } else {
            next(renderRegisterParams(to))
          }
        })
      }
    },
    {
      path: '*',
      redirect: '/articles'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})


// router.beforeEach((to, from, next) => {
//   // if (process.env.NODE_ENV === 'production') {
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     sessionStorage.getItem('isLogin')
//       ? next()
//       : next(renderRegisterParams(to))
//   } else {
//     next()
//   }
//   // } else {
//   //   next()
//   // }
// })

const renderRegisterParams = function (route) {
  return { path: REGISTER_PATH, query: { redirect: route.fullPath } }
}


export { router, renderRegisterParams }