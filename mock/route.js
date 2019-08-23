export default {
  '/api/auth_routes': {
    '/form/advanced-form': { authority: ['admin', 'user'] },
  },
  '/api/menus': {
    routes: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
          },
          {
            path: '/dashboard/about',
            name: 'about',
          },
        ],
      },
    ],
  },
};
