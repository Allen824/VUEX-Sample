import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Itemview from '../views/ItemView.vue'
import TV from '../views/TV.vue'
import WM from '../views/WashingMachine.vue'
import ComputerView from '../views/ComputerView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView

  },
  {
    path: '/Items',
    name: 'Items',
    component: Itemview,
    children: [
      {
        path: '/Items/TVs',
        name: 'TVs',
        component: TV
      },
      {
        path:'/Items/WashingMachines',
        name:'WashingMachines',
        component: WM
      },
      {
        path: '/Items/Computers',
        name: 'Computers',
        component: ComputerView
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
