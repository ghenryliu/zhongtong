// /** When your routing table is too long, you can split it into small modules**/
//
// import Layout from '@/views/layout/Layout'
//
// const chartsRouter = {
//   path: '/charts',
//   component: Layout,
//   redirect: 'noredirect',
//   name: 'Charts',
//   meta: {
//     title: 'charts',
//     icon: 'chart'
//   },
//   children: [
//     // {
//     //   path: 'keyboard',
//     //   component: () => import('@/views/charts/keyboard'),
//     //   name: 'KeyboardChart',
//     //   meta: { title: 'keyboardChart', noCache: true }
//     // },
//     // {
//     //   path: 'line',
//     //   component: () => import('@/views/charts/line'),
//     //   name: 'LineChart',
//     //   meta: { title: 'lineChart', noCache: true }
//     // },
//     // {
//     //   path: 'mixchart',
//     //   component: () => import('@/views/charts/mixChart'),
//     //   name: 'MixChart',
//     //   meta: { title: 'mixChart', noCache: true }
//     // },
//
//     {
//       path: 'personalCenter',
//       component: () => import('@/views/zhongtong/personalCenter'),
//       name: 'personalCenter',
//       meta: { title: 'personalCenter', noCache: true }
//     },
//
//     {
//       path: 'modifyPsw',
//       component: () => import('@/views/charts/modifyPsw'),
//       name: 'modifyPsw',
//       meta: { title: 'modifyPsw', noCache: true }
//     },
//
//     {
//       path: 'adminList',
//       component: () => import('@/views/charts/adminList'),
//       name: 'adminList',
//       meta: { title: 'adminList', noCache: true }
//     },
//
//     {
//       path: 'addAdmin',
//       component: () => import('@/views/charts/addAdmin'),
//       name: 'addAdmin',
//       meta: { title: 'addAdmin', noCache: true }
//     },
//
//     {
//       path: 'editAdmin',
//       component: () => import('@/views/charts/editAdmin'),
//       name: 'editAdmin',
//       meta: { title: 'editAdmin', noCache: true }
//     },
//
//     {
//       path: 'maintainList',
//       component: () => import('@/views/charts/maintainList'),
//       name: 'maintainList',
//       meta: { title: 'maintainList', noCache: true }
//     },
//
//
//
//   ]
// }
//
// export default chartsRouter
