import VueRouter from 'vue-router'

import LoginPage from '@/view/login/LoginPage'

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: <div>foo</div>},
        {path:"/login", component: LoginPage}
    ]
})

export default router
