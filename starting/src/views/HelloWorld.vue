<script>
    export default {
        data() {
            return {
                count: 10,
                isShow: false
            }
        },
        methods: {
            showHelloWorld() {
                if (this.count == 0) {
                    this.isShow = true;
                    return;
                }
                this.count--;
            }
        }
    }
</script>

<template>
    <button @click="showHelloWorld">{{ count }}</button>
    <label v-show="isShow">Hello World</label>
</template>