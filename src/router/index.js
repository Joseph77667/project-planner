import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddNew from '@/views/AddNew.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addProject',
    name: 'AddProject',
    component: AddNew
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
