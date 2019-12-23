/**
 * @description 企业管理
 */

import Layout from '@/layout'

const qy = {
    path: '/qy',
    component: Layout,
    redirect: '/qy/department',
    alwaysShow: true,
    meta: { title: '企业管理', icon: 'dashboard' },
    children: [
        {
            path: 'department',
            name: 'department',
            component: () => import('@/views/qy/department/index'),
            meta: { title: '部门管理', icon: 'dashboard' }
        },
        {
            path: 'employees',
            name: 'employees',
            component: () => import('@/views/qy/employees/index'),
            meta: { title: '模块管理', icon: 'dashboard' }
        }
    ]
}

export default qy
