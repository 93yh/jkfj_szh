import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'jkBG',
    component: HomeView,
    children: [
      {
        path: '/Dxxm',
        name: 'Dxxm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Dxxm" */ '../components/DxxmView.vue'),
      },
      {
        path: '/Gywm',
        name: 'Gywm',
        component: () => import(/* webpackChunkName: "Gywm" */ '../components/GywmView.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
