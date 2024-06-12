<template>
    <nav v-if="value && value.links && value.links.length">
        <h2>Table of Contents</h2>
        <ul>
            <li v-for="link in value.links" :key="link.id" :class="`pl-${link.depth}`">
                <a :href="'#' + link.id">{{ link.text }}</a>
                <ul v-if="link.children && link.children.length">
                    <li v-for="child in link.children" :key="child.id" :class="`pl-${child.depth}`">
                        <a :href="'#' + child.id">{{ child.text }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['value']
}
</script>