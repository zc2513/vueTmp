/**
 * @description 资质管理
 */

import Layout from '@/layout'

const aptitude = {
    path: '/aptitude',
    component: Layout,
    redirect: '/aptitude/enterprise',
    alwaysShow: true,
    meta: { title: '资质管理', icon: 'dashboard' },
    children: [
        {
            path: 'enterprise',
            name: 'enterprise',
            component: () => import('@/views/aptitude/enterprise/index'),
            meta: { title: '企业资质管理', icon: 'dashboard' }
        }
    ]
}
export default aptitude
