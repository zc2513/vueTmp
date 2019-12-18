/**
 * @description 众创工厂模块
 */

import Layout from '@/layout'

const weWork = {
  path: '/weWork',
  component: Layout,
  redirect: '/weWork/project',
  meta: { title: '众创空间', icon: 'dashboard' },
  children: [
    {
      path: 'project',
      name: 'project',
      component: () => import('@/views/weWork/project/index'),
      meta: { title: '项目管理', icon: 'dashboard' }
    },
    {
      path: 'demand',
      name: 'demand',
      component: () => import('@/views/weWork/demand/index'),
      meta: { title: '需求管理', icon: 'dashboard' }
    },
    {
      path: 'grade',
      name: 'grade',
      component: () => import('@/views/weWork/grade/index'),
      meta: { title: '等级管理', icon: 'dashboard' }
    },
    {
      path: 'papers',
      name: 'papers',
      component: () => import('@/views/weWork/papers/index'),
      meta: { title: '证件审核', icon: 'dashboard' }
    },
    {
      path: 'theTender',
      name: 'theTender',
      component: () => import('@/views/weWork/theTender/index'),
      meta: { title: '招标信息', icon: 'dashboard' }
    },
    {
      path: 'advertising',
      name: 'advertising',
      component: () => import('@/views/weWork/advertising/index'),
      meta: { title: '广告位管理', icon: 'dashboard' }
    },
    {
      path: 'leaveAmessage',
      name: 'leaveAmessage',
      component: () => import('@/views/weWork/leaveAmessage/index'),
      meta: { title: '留言管理', icon: 'dashboard' }
    },
    {
      path: 'advertisingPutOn',
      name: 'advertisingPutOn',
      component: () => import('@/views/weWork/advertisingPutOn/index'),
      meta: { title: '广告投放管理', icon: 'dashboard' }
    },
    {
      path: 'entrustFactory',
      name: 'entrustFactory',
      component: () => import('@/views/weWork/entrustFactory/index'),
      meta: { title: '委托工厂管理', icon: 'dashboard' }
    },
    {
      path: 'activity',
      name: 'activity',
      component: () => import('@/views/weWork/activity/index'),
      meta: { title: '活动管理', icon: 'dashboard' }
    },
    {
      path: 'siteConfiguration',
      name: 'siteConfiguration',
      component: () => import('@/views/weWork/siteConfiguration/index'),
      meta: { title: '站点配置管理', icon: 'dashboard' }
    },
    {
      path: 'paymentRecords',
      name: 'paymentRecords',
      component: () => import('@/views/weWork/paymentRecords/index'),
      meta: { title: '支付记录管理', icon: 'dashboard' }
    },
    {
      path: 'order',
      name: 'order',
      component: () => import('@/views/weWork/order/index'),
      meta: { title: '订单管理', icon: 'dashboard' }
    },
    {
      path: 'myGiftBag',
      name: 'myGiftBag',
      component: () => import('@/views/weWork/myGiftBag/index'),
      meta: { title: '我的礼包', icon: 'dashboard' }
    },
    {
      path: 'bankCar',
      name: 'bankCar',
      component: () => import('@/views/weWork/bankCar/index'),
      meta: { title: '银行卡管理', icon: 'dashboard' }
    },
    {
      path: 'valueAddedServices',
      name: 'valueAddedServices',
      component: () => import('@/views/weWork/valueAddedServices/index'),
      meta: { title: '增值服务项', icon: 'dashboard' }
    },
    {
      path: 'bigGiftBag',
      name: 'bigGiftBag',
      component: () => import('@/views/weWork/bigGiftBag/index'),
      meta: { title: '大礼包管理', icon: 'dashboard' }
    },
    {
      path: 'invoice',
      name: 'invoice',
      component: () => import('@/views/weWork/invoice/index'),
      meta: { title: '发票管理', icon: 'dashboard' }
    },
    {
      path: 'freeLook',
      name: 'freeLook',
      component: () => import('@/views/weWork/freeLook/index'),
      meta: { title: '免费查看管理', icon: 'dashboard' }
    },
    {
      path: 'websiteTemp',
      name: 'websiteTemp',
      component: () => import('@/views/weWork/websiteTemp/index'),
      meta: { title: '企业网站模板管理', icon: 'dashboard' }
    },
    {
      path: 'giving',
      name: 'giving',
      component: () => import('@/views/weWork/giving/index'),
      meta: { title: '赠送管理', icon: 'dashboard' }
    }
  ]
}

export default weWork

