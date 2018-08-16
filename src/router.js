import appManage from '@/pages/appManage/appManage'
import App from '@/App'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'App',
            component: App,
            redirect: '/appManage',
            children:[]
        },
        {
            path: '/appManage',
            name: 'appManage',
            component: appManage
        }
    ]
})
