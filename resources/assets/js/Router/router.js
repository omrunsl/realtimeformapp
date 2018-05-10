import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import Signup from '../components/login/signup'
import Forum from '../components/forum/forum'
import Read from '../components/forum/read'
import Create from '../components/forum/create'
import Logout from '../components/login/Logout'
import CreateCategory from '../components/category/CreateCategory'

const routes = [
    { path: '/girisyap', component: Login },
    { path: '/cikisyap', component: Logout },
    { path: '/kayitol', component: Signup },
    { path: '/kategori', component: CreateCategory },
    { path: '/forum', component: Forum, name:'forum' },
    { path: '/sor', component: Create},
    { path: '/question/:slug', component: Read, name:'read' },
]


const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode : 'history'
})

export default router