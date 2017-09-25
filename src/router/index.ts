import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


let router = new VueRouter({
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
      path: '/admin',
      component: () => import('../views/back/app'),
      children: [
        { path: 'login', component: () => import('../views/back/login') },
        { path: 'classes', component: () => import('../views/back/classes') },
        { path: 'articles', component: () => import('../views/back/list') },
        { path: 'articles/create', component: () => import('../views/back/create') },
        { path: 'articles/:id', component: () => import('../views/back/create') }
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