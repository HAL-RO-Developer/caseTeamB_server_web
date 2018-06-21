import Vue from 'vue'
import VueRouter from 'vue-router'
//import Index from './components/pages/index.vue'
import pin from './components/pages/pin.vue'
import Login from './components/pages/login.vue'
import Goal from './components/pages/goal.vue'
import Delete from './components/pages/delete.vue'
import NotFound from './components/pages/notFound.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

//Vue.component('index', Index)


Vue.use(Buefy)
Vue.use(VueRouter)

const routes = [
     { path: "/pin", component: pin },
    //{ path:"/", component: Index},
    { path: "/" , component: Login },
    { path: "/goal" , component: Goal },
    { path: "/delete" , component: Delete },
    { path: "*", component: NotFound },
]
const router = new VueRouter({  mode: 'history', routes })

new Vue({
    router
}).$mount("#app")
