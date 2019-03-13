/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const zhongtongRouter = {
  path: '/zhongtong',
  component: Layout,
  redirect: 'noredirect',
  name: 'zhongtong',
  meta: {
    title: 'zhongtong',
    icon: 'zhongtong'
  },
  children: [
    {
      path: 'personalCenter',
      component: () => import('@/views/zhongtong/personalCenter'),
      name: 'personalCenter',
      // meta: { title: 'personalCenter', noCache: true }
    },

    {
      path: 'modifyPsw',
      component: () => import('@/views/zhongtong/modifyPsw'),
      name: 'modifyPsw',
      meta: { title: 'modifyPsw', noCache: true }
    },

    {
      path: 'adminList',
      component: () => import('@/views/zhongtong/adminList'),
      name: 'adminList',
      meta: { title: 'adminList', noCache: true }
    },

    {
      path: 'addAdmin',
      component: () => import('@/views/zhongtong/addAdmin'),
      name: 'addAdmin',
      meta: { title: 'addAdmin', noCache: true }
    },

    {
      path: 'editAdmin',
      component: () => import('@/views/zhongtong/editAdmin'),
      name: 'editAdmin',
      meta: { title: 'editAdmin', noCache: true }
    },

    {
      path: 'maintainList',
      component: () => import('@/views/zhongtong/maintainList'),
      name: 'maintainList',
      meta: { title: 'maintainList', noCache: true }
    },

    {
      path: 'approveMaintain',
      component: () => import('@/views/zhongtong/approveMaintain'),
      name: 'maintainList',
      meta: { title: 'maintainList', noCache: true }
    },

    {
      path: 'approveMaintainDetail',
      component: () => import('@/views/zhongtong/approveMaintainDetail'),
      name: 'approveMaintainDetail',
      meta: { title: 'approveMaintainDetail', noCache: true }
    },



  ]
}

export default zhongtongRouter
