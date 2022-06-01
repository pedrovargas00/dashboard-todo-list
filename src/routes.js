import HomeView from './$views/home.view.svelte'
import UserView from './$views/user.view.svelte'
import TasksView from './$views/tasks.view.svelte'
import LoginView from './$views/login.view.svelte'
import TestView from './$views/test.view.svelte'
import RegisterView from './$views/register.view.svelte'

const routes = [
    {
        name: '/',
        component: HomeView
    },

    {
        name: 'register',
        component: RegisterView,
        onlyIf: {guard: !isLogin, redirect: '/'}
    },

    {
        name: 'login',
        component: LoginView,
        onlyIf: {guard: needLogin, redirect: 'home'}
    },

    {
        name: 'home',
        component: UserView,
        onlyIf: {guard: isLogin, redirect: 'login'}
    },

    {
        name: 'tasks',
        component: TasksView,
        onlyIf: {guard: isLogin, redirect: 'home'}
    },

    {
        name: 'test',
        component: TestView
    }
]

function needLogin() {
   
   const token = localStorage.getItem('token')

   return !token
}

function isLogin() {
    
    const token = localStorage.getItem('token')

    if (token)
        return token
}

export { routes }