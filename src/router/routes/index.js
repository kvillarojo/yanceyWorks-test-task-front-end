import Home from "@/views/Home";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            allowAnonymous: false
        }
    },
    {
        path: '/companies',
        name: 'Company',
        component: () => import('@/views/Company/index'),
        meta: {
            allowAnonymous: false
        }
    },
    {
        path: '/employee',
        name: 'Employee',
        component: () => import('@/views/Employee/Employee'),
        meta: {
            allowAnonymous: false
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login'),
        meta: {
            allowAnonymous: true
        }
    }
]

export default routes;
