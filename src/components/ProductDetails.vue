<script setup>
import { useRoute } from 'vue-router'
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const route = useRoute()
const id = route.params.id
let product = ref({})

onBeforeMount(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => {
            product.value = res.data
        })
})
</script>

<template>
    <div class="bg-black border-b-light-100 border-b h-20 text-white items-center justify-center flex p-5 text-2xl">
        Product Details
    </div>
    <div class="overflow-hidden dark:bg-gray-900">
        <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div class="w-2/3 md:block hidden">
                <img class="w-full h-full" alt="image of a girl posing" :src="product.thumbnail" />
            </div>
            <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div class="border-b border-gray-200 pb-6">
                    <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
                        {{ product.title }}
                    </h1>
                </div>
                <div class="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p class="text-base leading-4 text-gray-800 dark:text-gray-300">Category</p>
                    <div class="flex items-center justify-center">
                        <p class="text-sm leading-none text-gray-600 dark:text-gray-300">
                            {{ product.category }}
                        </p>
                    </div>
                </div>
                <div class="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p class="text-base leading-4 text-gray-800 dark:text-gray-300">Brand</p>
                    <div class="flex items-center justify-center">
                        <p class="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                            {{ product.brand }}
                        </p>
                    </div>
                </div>
                <div
                    class="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 ">
                    {{ product.stock }} products availabile in stock
                </div>
                <div>
                    <p class="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
                        {{ product.description }}
                    </p>
                    <p class="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Product Rating: {{ product.rating
                    }}</p>
                    <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Discount Percentage: {{
                        product.discountPercentage }}%</p>
                    <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Price: ${{ product.price }}</p>
                </div>
                <button class="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    <router-link to="/">Back to home page</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<style></style>