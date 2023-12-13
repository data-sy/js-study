import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import MockDataBinding from '../views/MockDataBinding.vue'
import FormView from '../views/FormView.vue'
import LoginView from '../views/LoginView.vue'
import TableView from '../views/TableView.vue'
import A from '../views/AView.vue'
import B from '../views/BView.vue'
import MainComponent from '../components/MainComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/mockdatabinding',
    name: 'MockDataBinding',
    component: MockDataBinding
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
  {
    path: '/a',
    name: 'a',
    component: A
  },
  {
    path: '/b',
    name: 'b',
    component: B,
  },
  {
    path: '/maincomponent',
    name: 'maincomponent',
    component: MainComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
