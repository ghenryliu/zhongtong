/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const zhongtongRouter = {
  path: '/',
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
      component: () => import('@/views/personalCenter'),
      name: 'personalCenter',
      // meta: { title: 'personalCenter', noCache: true }
    },

    {
      path: 'modifyPsw',
      component: () => import('@/views/modifyPsw'),
      name: 'modifyPsw',
      meta: { title: 'modifyPsw', noCache: true }
    },

    {
      path: 'adminList',
      component: () => import('@/views/adminList'),
      name: 'adminList',
      meta: { title: 'adminList', noCache: true }
    },

    {
      path: 'addAdmin',
      component: () => import('@/views/addAdmin'),
      name: 'addAdmin',
      meta: { title: 'addAdmin', noCache: true }
    },

    {
      path: 'editAdmin',
      component: () => import('@/views/editAdmin'),
      name: 'editAdmin',
      meta: { title: 'editAdmin', noCache: true }
    },

    {
      path: 'maintainList',
      component: () => import('@/views/maintainList'),
      name: 'maintainList',
      meta: { title: 'maintainList', noCache: true }
    },

    {
      path: 'approveMaintain',
      component: () => import('@/views/approveMaintain'),
      name: 'maintainList',
      meta: { title: 'maintainList', noCache: true }
    },

    {
      path: 'approveMaintainDetail',
      component: () => import('@/views/approveMaintainDetail'),
      name: 'approveMaintainDetail',
      meta: { title: 'approveMaintainDetail', noCache: true }
    },



  ]
}

export default zhongtongRouter
