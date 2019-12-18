/**
 * @description 订阅管理
 */

import Layout from '@/layout'

const dep = {
  path: '/dep',
  component: Layout,
  redirect: '/dep/module',
  alwaysShow: true,
  meta: { title: '订阅管理', icon: 'dashboard' },
  children: [
    {
      path: 'module',
      name: 'module',
      component: () => import('@/views/dep/module/index'),
      meta: { title: '模块管理', icon: 'dashboard' }
    },
    {
      path: 'record',
      name: 'record',
      component: () => import('@/views/dep/record/index'),
      meta: { title: '订阅记录', icon: 'dashboard' }
    }
  ]
}

export default dep
