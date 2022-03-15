 
  //import Home from '../components/Home.vue'  
  
  
  import Index from '../components/Index.vue'; 
  
  console.log('Archivo de rutas');
  const routes = [
    // { path: '/register', name: 'register', component: Register, meta: { auth: false }},
    // { path: '/login',    name: 'login',    component: Login,    meta: { auth: false } }, 
    // ADMIN ROUTES
    
    //{ path: '/', name: 'home', component: Home },
   
    //{ path: '/index',           name: 'index',            component: AdminDashboard },
    { path: '/index',           name: 'index',            component: Index },
    { path: '/home',            name: 'home',            component:() => import('../components/Index.vue')},
    { path: '/departamentos',   name: 'departamentos',   component:() => import('../components/data/Departamentos.vue')  },
    { path: '/empleados',       name: 'empleados',       component:() => import('../components/data/Empleados.vue')      },
   
    
    //, meta: { auth: true }
    //DataAnatlityc
    { 
      path: '/dashboard', 
      name: 'dashboard', 
      component:() => import('../components/Index.vue') 
    },
    //{ path: '*', component:() => import('../pages/errors/404.vue') }
  ]
  
  export default routes;