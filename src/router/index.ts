// import VueRouter from 'vue-router'
import {createRouter, createWebHashHistory} from 'vue-router'

// import LoginPage from '@/page/login'
// import TestPage from '@/page/test/test-page.vue'
import HomePage from '@/page/home/home-page.vue'
import CalculatorPage from '@/page/calculator/calculator-page.vue'

// import LoginPage from './view/login/LoginPage'


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  // { path: '/', component: LoginPage },
  { path: '/', component: HomePage },
  // { path: '/test', component: TestPage },
  { path: '/calculator', component: CalculatorPage },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(process.env.BASE_URL),
  routes, // `routes: routes` 的缩写
})

export default router
