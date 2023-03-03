<script>
    export default {
        data() {
            return {
                objects: {
                    key1: 'value1',
                    key2: 'value2',
                    key3: 'value3'
                }
            }
        }
    }
</script>
<template>
    <li v-for="(value, key) in objects">
        <span>{{ key }}: {{ value }}</span>
    </li>
</template>