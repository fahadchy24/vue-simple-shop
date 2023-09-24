import { createRouter, createWebHistory } from "vue-router"
import ProductList from "../components/ProductList.vue"
import ProductDetails from "../components/ProductDetails.vue"
import { compileScript } from "vue/compiler-sfc"

const routes = [
    { path: "/", component: ProductList },
    { path: "/product/:id", component: ProductDetails }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router