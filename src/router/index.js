import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'
Vue.use(Router)

/* export default new Router({
  mode: 'history',
  routes
}) */

const router = new Router({
  // mode: 'history',
  routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

// router.beforeResolve

router.afterEach((to, from) => {
  // logining = false
})

/**
 * 1. 导航被触发
 * 2. 在失活的组件 (即将离开的页面组件) 里调用离开守卫 beforeRouteLeave
 * 3. 调用全家前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate/ beforeRouteEnter
 * 5. 调用独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件 (即将进入的页面组件) 里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发dom更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传递给next的回调函数
 */

export default router
