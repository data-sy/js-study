import { createRouter, createWebHistory } from 'vue-router'

import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import SalesList from '../views/SalesList.vue'
import ImageInsert from '../views/ImageInsert.vue'
import SpringTest from '../views/SpringTest.vue'
import ApiTest from '../views/ApiTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductList
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/update',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: ImageInsert
  },
  {
    path: '/springtest',
    name: 'Springtest',
    component: SpringTest
  },
  {
    path: '/apitest',
    name: 'Apitest',
    component: ApiTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
