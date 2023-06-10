import { createRouter, createWebHistory, createMemoryHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
        path: "/", 
        component: () => import("../src/components/main.vue"), 
      },
    {
      path: "/footer",
      name: "/footer",
      component: () => import("../src/components/navs.vue"), 
    },
    {
      path: "/teachers",
      name: "teachers",
      component: () => import("../src/components/Teachers/teachers.vue"), 
    },
   
  ],
});

export default router;
