import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/pages/index.vue'
import dashboad from './components/pages/dashboad.vue'
//import Index from './components/pages/index.vue'
import pin from './components/pages/pin.vue'
import Device from './components/pages/device.vue'
import child from './components/pages/child.vue'
import childlist from './components/pages/childlist.vue'
import GoalList from './components/pages/goallistview.vue'
import GoalDetails from './components/pages/goaldetails.vue'
import Settings from './components/pages/settings.vue'
import Login from './components/pages/login.vue'
import Goal from './components/pages/goal.vue'
import Delete from './components/pages/delete.vue'
import NotFound from './components/pages/notFound.vue'
import Buefy from 'buefy'
import UnderTab from './components/modules/underTab.vue'
import 'buefy/lib/buefy.css'

//Vue.component('index', Index)


Vue.use(Buefy)
Vue.use(VueRouter)

Vue.component("under-tab", UnderTab);

const routes = [
    { path: "/", component: dashboad },
    { path: "/test", component: Index },
    { path: "/login", component: Login },
    { path: "/pin", component: pin },
    { path: "/device", component : Device},
    { path: "/goal/details", component: GoalDetails },
    { path: "/goal/list", component: GoalList },
    { path: "/settings", component: Settings },
    //{ path:"/", component: Index},
    { path: "/", component: Login },
    { path: "/child", component: child },
    { path: "/child/list", component: childlist },
    { path: "/goal", component: Goal },
    { path: "/delete", component: Delete },
    { path: "*", component: NotFound },
]
const router = new VueRouter({ mode: 'history', routes })

new Vue({
    router
}).$mount("#app")
