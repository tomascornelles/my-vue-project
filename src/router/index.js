import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyHello from '@/components/MyHello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/my',
      name: 'MyHello',
      component: MyHello
    }
  ],
  mode: 'history'
})
