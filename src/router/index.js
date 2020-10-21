import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@/router/routes";
import authRedirect from "@/middleware/authRedirect";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  return authRedirect(next, to)
})

export default router
