import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/account/Login'
import Emp from '@/components/account/Emp'
import Test from '@/components/test'
import leilei from '@/components/testaa'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '登录1',
      component: Login
    },
    {
      path: '/',
      name: '登录2',
      component: Login
    },
    {
      path: '/emp',
      name: '员工管理',
      component: Emp
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/leilei',
      name: 'leilei',
      component: leilei
    }
  ]
})
