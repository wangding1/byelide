import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
import AppView from '../views/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => h('div', {}, '404')
    },
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'home',
      component: AppView
      // children: [
      //   {
      //     path: 'dataSource',
      //     name: 'dataSource',
      //     component: () => import('../views/DataSourceView.vue')
      //   },
      //   {
      //     path: 'layout',
      //     name: 'layout',
      //     component: () => import('../views/PageLayoutView.vue')
      //   },
      //   {
      //     path: 'actions',
      //     name: 'actions',
      //     component: () => import('../views/ActionsView.vue')
      //   }
      // ]
    }
  ]
})

export default router
