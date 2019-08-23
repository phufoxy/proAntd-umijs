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
        component: '../pages/Dashboard/analysis',
      },
      {
        path: '/dashboard/about',
        name: 'About',
        icon: 'android',
        component: '../pages/Dashboard/about',
      },
      {
        path: '/dashboard/user',
        name: 'User',
        icon: 'user',
        component: '../pages/Dashboard/Userpage',
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
