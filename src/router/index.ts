import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: r => { (require as WebpackRequire).ensure(['../views/front/app'], () => { r(require('../views/front/app')) }) },
      redirect: 'articles',
      children: [
        { path: 'articles', component: r => { (require as WebpackRequire).ensure(['../views/front/list'], () => { r(require('../views/front/list')) }) } },
        { path: 'articles/:id', component: r => { (require as WebpackRequire).ensure(['../views/front/article'], () => { r(require('../views/front/article')) }) } }
      ]
    },
    {
      path: '/admin',
      component: r => { (require as WebpackRequire).ensure(['../views/back/app'], () => { r(require('../views/back/app')) }) },
      children: [
        { path: 'login', component: r => { (require as WebpackRequire).ensure(['../views/back/login'], () => { r(require('../views/back/login')) }) } },
        { path: 'classes', component: r => { (require as WebpackRequire).ensure(['../views/back/classes'], () => { r(require('../views/back/classes')) }) } },
        { path: 'articles', component: r => { (require as WebpackRequire).ensure(['../views/back/list'], () => { r(require('../views/back/list')) }) } },
        { path: 'articles/create', component: r => { (require as WebpackRequire).ensure(['../views/back/create'], () => { r(require('../views/back/create')) }) } },
        { path: 'articles/:id', component: r => { (require as WebpackRequire).ensure(['../views/back/create'], () => { r(require('../views/back/create')) }) } }
      ],
      redirect: '/admin/articles',
      beforeEnter(to, from, next) {
        let temp = Number(to.path === '/admin/login') + '-' + Number(sessionStorage.getItem('isLogin'))
        switch (temp) {
          case '1-1':
            next('/admin/articles')
            break
          case '0-0':
            next('/admin/login')
            break
          default:
            next()
            break
        }
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



export { router }