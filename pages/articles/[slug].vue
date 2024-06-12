<template>
  <article class="max-w-prose mx-auto">
    <header clas="flex flex-col">
      <h1 class="text-center">{{ data.title }}</h1>
      <i class="text-sm">Published on {{ publishedDate(data.date) }}</i>
      <img :src="data.cover" :alt="data.title" />
    </header>
    <TableOfContents v-if="data.enable_toc" :value="data.body.toc" />
    <ContentRenderer :value="data" class="article-content" />
  </article>
</template>

<script setup>
const { params } = await useRoute();
const { data } = await useAsyncData(`article-${params.slug}`, () => queryContent(`/articles/${params.slug}`).findOne());
const content = await data.value;
const config = useRuntimeConfig();
useHead({
  title: content.title,
  meta: [
    { hid: 'description', name: 'description', content: content.description },
    { hid: 'keywords', name: 'keywords', content: content.keywords.join(',') },
    { hid: "twitter:title", name: "twitter:title", content: content.title },
    { hid: "twitter:description", name: "twitter:description", content: content.description },
    { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
    { hid: "twitter:image", name: "twitter:image", content: `${config.public.baseUrl}${content.cover}` },
    { hid: "og:description", property: "og:description", content: content.description },
    { hid: "og:image", property: "og:image", content: `${config.public.baseUrl}${content.cover}` },
    { hid: "og:image:type", property: "og:image:type", content: "image/png" },
    { hid: "og:type", property: "og:type", content: "website" }
  ]
})

const publishedDate = function (date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
</script>