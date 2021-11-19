
import Home from './components/home.vue'
import ProductDetail from './views/views/shop/ProductDetail.vue'


const routers = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/',
                component: ProductDetail
            }
        ]
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/',
                name: 'login',
                component: ProductDetail
            },
        ]
    }
]

export default routers

