import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddNew from '@/views/AddNew.vue'
import EditProject from '@/views/EditProject.vue'

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
  {
    path: '/editProject/:id',
    name: 'EditProject',
    component: EditProject,
    props : true
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
