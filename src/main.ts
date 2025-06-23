import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import AdminLogin from './views/AdminLogin.vue'
import { auth } from './firebase/config'
import AOS from 'aos'
import 'aos/dist/aos.css'

// onAuthStateChanged se usa implícitamente en auth.onAuthStateChanged

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin, meta: { requiresAuth: true } },
  { path: '/admin/login', component: AdminLogin }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Inicializar AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

// Inicializar Firebase
auth.onAuthStateChanged(() => {
  console.log('Estado de autenticación actualizado')
})

// Protección de rutas
router.beforeEach(async (to, _from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = auth.currentUser

  if (to.path === '/admin/login' && currentUser) {
    next('/admin')
    return
  }

  if (requiresAuth && !currentUser) {
    next('/admin/login')
    return
  }

  next()
})

const app = createApp(App)
const head = createHead()
const pinia = createPinia()

// Configuración de plugins
app.use(head)
app.use(pinia)
app.use(router)
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  filterBeforeCreate: (toast: any) => {
    return toast.type === 'error' ? toast : false;
  }
})

app.mount('#app')