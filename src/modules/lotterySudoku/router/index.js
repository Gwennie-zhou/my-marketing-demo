import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const activities = () => import('../views/activities') // 抽奖活动页
const redeem = () => import('../views/redeem') // 兑奖页 

const routes = [
  {
    path: '/',
    redirect: '/activities'
  },
  {
    path: '/activities',
    name: 'activities',
    component: activities
  },
  {
    path: '/redeem',
    name: 'redeem',
    component: redeem
  }
]

const router = new VueRouter({
  routes
})

export default router