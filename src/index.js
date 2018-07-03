import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboad from './components/pages/dashboad.vue'
import Pin from './components/pages/pin.vue'
import Device from './components/pages/device.vue'
import Child from './components/pages/child.vue'
import Childlist from './components/pages/childlist.vue'
import Message from './components/pages/message.vue'
import AddMessage from './components/pages/addmessage.vue'
import GoalList from './components/pages/goallistview.vue'
import GoalDetails from './components/pages/goaldetails.vue'
import Settings from './components/pages/settings.vue'
import Login from './components/pages/login.vue'
import Goal from './components/pages/goal.vue'
import Test from './components/pages/test.vue'
import Record　from './components/pages/record.vue'
import Graph from './components/modules/graph.vue'
import NotFound from './components/pages/notFound.vue'
import Buefy from 'buefy'
import UnderTab from './components/modules/underTab.vue'
import 'buefy/lib/buefy.css'

//Vue.component('index', Index)


Vue.use(Buefy)
Vue.use(VueRouter)

Vue.component("under-tab", UnderTab);

const routes = [
    { path: "/", component: Dashboad },
    { path: "/login", component: Login },
    { path: "/pin", component: Pin },
    { path: "/device", component : Device},
    { path: "/goal/details", component: GoalDetails },
    { path: "/goal/list", component: GoalList },
    { path: "/settings", component: Settings },
    { path: "/child", component: Child },
    { path: "/child/list", component: Childlist },
    { path: "/test", component: Test },
    { path: "/goal", component: Goal },
    { path: "/record", component: Record },
    { path: "/message", component: Message },
    { path: "/message/add", component: AddMessage },
    { path: "*", component: NotFound },
]
const router = new VueRouter({ mode: 'history', routes })

new Vue({
    router
}).$mount("#app")
