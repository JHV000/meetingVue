import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import about from './about'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/meeting',
    name: 'meeting',
    component: () => import(/* webpackChunkName: "about" */ '../views/meeting.vue')
  },
  {
    path: '/leave',
    name: '/leave',
    component: () => import(/* webpackChunkName: "about" */ '../views/leave.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import(/* webpackChunkName: "about" */ '../views/manage.vue'),
    children:[
      {
        path: '/meetingMage',
        name: 'meetingMage',
        component: () => import(/* webpackChunkName: "about" */ '../views/manageMage.vue'),
    },
    {
      path: '/checkMeeting',
      name: 'checkMeeting',
      component: () => import(/* webpackChunkName: "about" */ '../views/checkMeeting.vue'),
  }
  ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
    routes
})

export default router
