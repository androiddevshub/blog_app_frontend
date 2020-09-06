import Home from './components/home'
import Login from './components/loginpage'
import About from './components/about.vue'
import Registration from './components/registration'
import Dashboard from './components/dashboard.vue'

export default [
  {
    path:"/",
    component: Home
  },
  { 
    path:"/login",
    component: Login
  }, 
  {
    path:"/about", 
    component: About
  },
  {
    path:"/registration",
    component: Registration
  },
  {
    path:"/dashboard",
    component: Dashboard
  },
  
];