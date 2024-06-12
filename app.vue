<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig();
useHead(() => {
  const canonical = `${config.public.baseUrl}${route.path}`;
  return {
    link: [
      { hid: "canonical", rel: "canonical", href: canonical }
    ]
  };
});
</script>