import routes from './routes' 
//import { sync } from 'vuex-router-sync'
 
import * as VueRouter  from 'vue-router'
//import { createRouter, createWebHistory } from 'vue-router'
//const VueRouter = require('vue-router').default;
//Vue.use(VueRouter)

const router = VueRouter.createRouter({   
  history: VueRouter.createWebHashHistory(),
  routes
}); 

export default router;