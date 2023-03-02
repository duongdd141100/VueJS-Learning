<script>
    export default {
        data() {
            return {
                count: 10,
                isHidden: true
            }
        },
        methods: {
            countDown() {
                this.count = this.count == 0 ? this.count : this.count - 1;
                if (this.count == 0) {
                    this.isHidden = false;
                }
            }

        }
    }
</script>
<template>
    <div ref="home1" id="home">
        <button @click="countDown">{{ count }}</button>
        <p ref="text" :hidden="isHidden">Happy New Year!!!</p>
    </div>
</template>