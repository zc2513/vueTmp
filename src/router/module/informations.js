/**
 * @description 资讯管理
 */

import Layout from '@/layout'

const informations = {
    path: '/informations',
    component: Layout,
    redirect: '/informations/information',
    alwaysShow: true,
    meta: { title: '资讯管理', icon: 'dashboard' },
    children: [
        {
            path: 'information',
            name: 'information',
            component: () => import('@/views/informations/information/index'),
            meta: { title: '资讯管理', icon: 'dashboard' }
        },
        {
            path: 'onSite',
            name: 'onSite',
            component: () => import('@/views/informations/onSite/index'),
            meta: { title: '站内消息', icon: 'dashboard' }
        }
    ]
}

export default informations
