<template>
    <div>
        <h1>List of Articles</h1>
        <section class="grid grid-cols-2 gap-8">
            <NuxtLink v-for="article in data" v-bind:key="article.slug" :to="`${article._path}`">
                <img :src="`${article.cover}`" :alt="article.title" />
                <h2>{{ article.title }}</h2>
                <span>{{ article.date }}</span>
            </NuxtLink>
        </section>
    </div>
</template>

<script setup>
const { data } = await useAsyncData('articles-home', () => queryContent('/articles').only(['title', '_path', 'date', 'cover']).where({ published: true }).sort({ date: -1 }).find())
useHead({
    title: "List of Articles",
    meta: [
        { hid: "og:title", property: "og:title", content: "List of Articles" },
        { hid: "twitter:title", name: "twitter:title", content: "List of Articles" },
    ],
})
</script>