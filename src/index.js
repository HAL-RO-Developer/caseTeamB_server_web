import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/pages/index.vue'
import dashboad from './components/pages/dashboad.vue'
import Login from './components/pages/login.vue'
import NotFound from './components/pages/notFound.vue'
import Buefy from 'buefy'
import UnderTab from './components/modules/underTab.vue'
import 'buefy/lib/buefy.css'



Vue.use(Buefy)
Vue.use(VueRouter)

Vue.component("under-tab", UnderTab);

const routes = [
    { path: "/", component: dashboad },
    { path: "/test", component: Index },
    { path: "/login" , component: Login },
    { path: "*", component: NotFound },
]
const router = new VueRouter({  mode: 'history', routes })

new Vue({
    router
}).$mount("#app")
