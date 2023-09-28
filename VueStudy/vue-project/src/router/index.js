import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import MockDataBinding from '../views/MockDataBinding.vue'
import FormView from '../views/FormView.vue'
import LoginView from '../views/LoginView.vue'
import TableView from '../views/TableView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting : 라우트 레벨에서 코드를 분할하는 방법
    // this generates a separate chunk (about.[hash].js) for this route
      // 이 라우트에 대한 chunck 파일이 분리되어 생성됩니다.
    // which is lazy-loaded when the route is visited.
      // 이 라우트에 방문했을 때 lazy-load(지연 로드) 됩니다.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
