<script>
    export default {
        data() {
            return {
                routes: import.meta.env.VITE_ROUTES.split(',')
            }
        }
    }
</script>
<template>
    <li v-for="route in routes">
        <a v-bind:href="route">{{ route }}</a>
    </li>
</template>