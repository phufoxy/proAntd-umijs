export default [
  {
    path: '/dashboard',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        icon: 'smile',
        component: '../pages/Dashboard/Analysis',
      },
      {
        path: '/dashboard/about',
        name: 'About',
        icon: 'android',
        component: '../pages/Dashboard/About',
      },
      {
        path: '/dashboard/user',
        name: 'User',
        icon: 'user',
        component: '../pages/Dashboard/UserPage',
      },
      {
        path: '/dashboard/room',
        name: 'Room',
        icon: 'appstore',
        component: '../pages/Dashboard/RoomPage',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/',
        name: 'user',
        icon: 'user',
        component: '../pages/User/Login',
      },
      {
        component: './404',
      },
    ],
  },
];
