import routes from './routes' 
//import { sync } from 'vuex-router-sync'
 
import * as VueRouter from 'vue-router'
//let  VueRouter = require('vue-router').default;
//Vue.use(VueRouter)

const router = new VueRouter({  
  mode: 'history', 
  routes
}); 

export default router;