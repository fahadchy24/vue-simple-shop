<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const products = ref([])

onBeforeMount(() => {
    axios.get(`https://dummyjson.com/products?limit=8`)
        .then(res => {
            products.value = res.data.products
        })
})
</script>

<template>
    <div class="bg-black border-b-light-100 border-b h-20 text-white items-center justify-center flex p-5 text-2xl">All
        Products
    </div>
    <div class="flex flex-row flex-wrap justify-center items-center">
        <template v-for="product in products" :key="product.id">
            <div
                class="basis-1/4 relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <div class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                    <router-link :to="{ name: 'product', params: { id: product.id } }">
                        <img class="object-cover" :src="product.thumbnail" alt="product image" />
                    </router-link>
                    <span
                        class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{{
                            product.discountPercentage }}%
                        OFF</span>
                </div>
                <div class="mt-4 px-5 pb-5">
                    <router-link :to="{ name: 'product', params: { id: product.id } }">
                        <h5 class="text-xl tracking-tight text-slate-900">{{ product.title }}</h5>
                    </router-link>
                    <div class="mt-2 mb-5 flex items-center justify-between">
                        <p>
                            <span class="text-3xl font-bold text-slate-900">${{ product.price }}</span>
                        </p>
                        <div class="flex items-center">
                            <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{
                                product.rating }}</span>
                        </div>
                    </div>
                    <span
                        class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <router-link :to="{ name: 'product', params: { id: product.id } }">
                            Product Details
                        </router-link>
                    </span>
                </div>
            </div>
        </template>
    </div>
</template>

<style></style>