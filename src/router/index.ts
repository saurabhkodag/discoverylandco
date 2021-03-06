import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import gallery from '../views/gallery/gallery.vue'
import worldgall from '../views/ourWorld/worldgallerymain.vue'
import home from '../views/home/Home.vue'
import about from '../views/about/About.vue'
import experience from '../views/experience/experience.vue'
import press from '../views/press/press.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/Gallery',
    name: 'Gallery',
    component: gallery
  },
  {
    path: '/ourWorlds',
    name: 'ourWorlds',
    component: worldgall
  },
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/about',
    name: 'About',
    component: about
  },
  {
    path: '/Experiences',
    name: 'experinece',
    component: experience
  },
  {
    path: '/press',
    name: 'press',
    component: press
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
