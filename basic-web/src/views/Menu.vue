<script>
    export default {
        props: ['component'],
        watch: {
            component: {
                handler() {
                    console.log(this.component)
                }
            }
        }
        // methods: {
        //     changeComponent: () => {
        //         console.log(this.component)
        //     }
        // }
    }
</script>
<template>
    <li>option 1</li>
    <li>option 1</li>

</template>