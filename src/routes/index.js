import LTodoHome from '@/views/body/home/index'
import LTodoManager from '@/views/body/manager/index'

export const routes = [
    {
        path: '/',
        name: '首页',
        component: LTodoHome
    },
    {
        path: '/history',
        name: '历史'
    },
    {
        path: '/manager',
        name: '管理',
        component: LTodoManager
    }
]
