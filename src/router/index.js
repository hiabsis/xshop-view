import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/views/shop/Home.vue'
import ProductDetail from '../views/views/shop/ProductDetail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shop/product/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/shop/product/detail',
        name: 'productDetail',
        component: ProductDetail
    }
]

const router = new VueRouter({
    routes
})

