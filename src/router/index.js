import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from 'components/home/home'
import recharge from 'components/recharge/recharge'
import withdrawals from 'components/withdrawals/withdrawals'
import informationDetails from 'components/information/informationDetails'
import forgetPassword from 'components/information/forgetPassword'
import recommend from 'components/recommend/recommend'
import login from 'components/login/login'
import homepage from 'components/homepage/homepage'
import register from 'components/register/register'
import forgetPasswordSingle from 'components/forgetPassword/forgetPassword'
import TKTransaction from 'components/TKTransaction/TKTransaction'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homepage',
      component: homepage
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
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
        },
        {
          path: '/forgetPassword',
          name: 'forgetPassword',
          component: forgetPassword
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: recommend
        },
        {
          path: '/homepage',
          name: 'homepage',
          component: homepage
        },
        {
          path: '/TKTransaction',
          name: 'TKTransaction',
          component: TKTransaction
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgetPasswordSingle',
      name: 'forgetPasswordSingle',
      component: forgetPasswordSingle
    }
  ]
})
