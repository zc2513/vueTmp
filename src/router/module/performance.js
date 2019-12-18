/**
 * @description 业绩管理
 */

import Layout from '@/layout'

const performance = {
  path: '/performance',
  component: Layout,
  redirect: '/performance/file',
  alwaysShow: true,
  meta: { title: '业绩管理', icon: 'dashboard' },
  children: [
    {
      path: 'file',
      name: 'file',
      component: () => import('@/views/performance/file/index'),
      meta: { title: '业绩档案', icon: 'dashboard' }
    }
  ]
}
export default performance
