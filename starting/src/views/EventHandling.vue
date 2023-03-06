<script>
    export default {
        data() {
            return {
                message: 'message',
            }
        },
        methods: {
            click(event) {
                console.log('Click Basic');
            },
            clickStop() {
                console.log('Click Stop');
            },
            clickOnce() {
                console.log('Click Once');
            },
            keyupEnter() {
                console.log('Keyup Enter');
            }
        }
    }
</script>
<template>
    <button @click="click($event)">Click hear</button>

    <button @click.stop="clickStop">Click Stop</button>

    <button @click.once="clickOnce">Click Once</button>

    <input @keyup.enter="keyupEnter" v-model="message"/>

    <p>{{ message }}</p>
</template>