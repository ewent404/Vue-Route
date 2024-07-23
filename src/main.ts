import { createApp } from 'vue'
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import UserList from '@/components/UserList.vue'
import UserDetails from '@/components/UserDetails.vue'
import { useAuth } from '@/composables/useAuth'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/users',
    component: UserList,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/detail',
        component: UserDetails,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const isAuthenticated = localStorage.getItem('isAuthenticated')
router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.meta.requiresAuth && isAuthenticated === 'False') {
      next('/login')
    } else {
      next()
    }
  }
)

createApp(App).use(router).use(ElementPlus).mount('#app')
