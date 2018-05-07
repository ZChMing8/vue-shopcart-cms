import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Supermarket from "@/components/tabbar/supermarket";
import Cart from "@/components/tabbar/cart";

export default new Router({
  routes: [
    {
      path: "/sup",
      component: Supermarket
    },
    {
      path: "/",
      redirect: "/sup"
    },
    {
      path: "/cart",
      component: Cart
    },
  ],
  linkActiveClass: "mui-active"
})
