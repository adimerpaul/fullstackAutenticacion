
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'pagina1', component: () => import('pages/Pagina1.vue'), meta: { requiresAuth: true }},
      { path: 'pagina2', component: () => import('pages/Pagina2.vue'), meta: { requiresAuth: true }},
      { path: 'pagina3', component: () => import('pages/Pagina3.vue'), meta: { requiresAuth: true }},
      { path: 'login', component: () => import('pages/LoginPage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
