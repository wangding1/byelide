import { createRouter, createWebHistory } from 'vue-router'
import { h, defineAsyncComponent } from 'vue'
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
      redirect: '/app/dataSource'
    },
    {
      path: '/app',
      name: 'home',
      component: AppView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: defineAsyncComponent(() => import('../views/DataSourceView.vue')),
          children: [
            {
              path: ':id',
              component: defineAsyncComponent(
                () => import('../views/DataSourceContent/DataSourceContent.vue')
              )
            },
            {
              path: '',
              redirect: '/app/dataSource/1'
            }
          ]
        },
        {
          path: 'layout',
          name: 'layout',
          component: defineAsyncComponent(() => import('../views/PageLayoutView.vue'))
        },
        {
          path: 'actions',
          name: 'actions',
          component: defineAsyncComponent(() => import('../views/ActionsView.vue'))
        }
      ]
    },
    {
      path: '/runner',
      name: 'runner',
      component: () => import('../views/RunnerView.vue')
    }
  ]
})

export default router
