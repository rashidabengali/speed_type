import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Game from './views/Game.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import Profile from './views/Profile.vue'
import Race from './views/Race.vue'
import Multiplayergame from './views/Multiplayergame.vue'
import Leaderboard from './views/Leaderboard.vue'
import store from '@/store'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL || '/speed_type/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
      meta: {
        auth: true
      }
    },
    {
      path: '/multiplayergame/:id',
      name: 'multiplayergame',
      component: Multiplayergame,
      meta: {
        auth: true
      }
    },
    {
      path: '/race',
      name: 'race',
      component: Race,
      meta: {
        auth: true
      }
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        auth: true
      }
    },
    {
      path: '/instructions',
      name: 'intructions',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Instructions.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.currentUser) {
    next({
      path: '/signin'
    })
  } else {
    next()
  }
})
export default router
