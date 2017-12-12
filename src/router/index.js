import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from 'components/home/home'
import recharge from 'components/recharge/recharge'
import withdrawals from 'components/withdrawals/withdrawals'
import informationDetails from 'components/informationDetails/informationDetails'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/withdrawals',
      name: 'withdrawals',
      component: withdrawals
    },
    {
      path: '/informationDetails',
      name: 'informationDetails',
      component: informationDetails
    }
  ]
})
