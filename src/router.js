import Vue from 'vue'
import Router from 'vue-router'
import loginForm from './views/loginForm.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginForm
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import(/* webpackChunkName: "reg" */ './views/regForm.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[    /*home子路由*/
        {
          path:'list',
          name: 'list',
          component: () => import('./views/List.vue'),  /*懒加载*/
        },
        {
          path:'user',
          name: 'user',
          component: () => import('./views/User.vue'),
        },
        {
          path:'edit',
          name: 'edit',
          component: () => import('./views/Edit.vue'),
        },
      ]
    },
    {
      path:'/add',
      name: 'add',
      component: () => import('./views/Add.vue'),  /*懒加载无需通过上面import方式引入文件*/
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
