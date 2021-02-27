import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../components/Login.vue'),
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../components/ForgotPassword.vue'),
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/home',
        name: 'home-page',
        component: () => import('../components/Home.vue'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('../components/Dashboard.vue'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/addItem',
                name: 'addItem',
                component: () => import('../components/Add_item.vue'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/signup',
                name: 'signup',
                component: () => import('../components/Signup.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/refill',
                name: 'refill',
                component: () => import('../components/RefillStock.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/employees',
                name: 'employees',
                component: () => import('../components/Employees.vue'),
                meta: {
                    requiresAuth: true
                }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const requiresGuest = to.matched.some(x => x.meta.requiresGuest)
  
    if (requiresAuth && !auth.currentUser) {
        next('/')
    } else if(requiresGuest) {
        if(auth.currentUser){
            next('/')
        }else{
            next()
        }
    }else {
        next()
    }
})

export default router
