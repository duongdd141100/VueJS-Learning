<script>
    import Header from './Header.vue'
    import Menu from './Menu.vue'
    import Body from './Body.vue'
    export default {
        data() {
            return {
                component: 'a'
            }
        },
        components: {
            Header,
            Menu,
            Body
        },
        watch: {
            component: {
                handler() {
                    console.log(this.component)
                }
            }
        }
    }
</script>
<template>
    <div class="template-container">
        <Header class="header" />
        <Menu class="menu" :component="component" />
        <Body class="body" />
    </div>
</template>

<style>
    .template-container {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(20, 1fr);
    }
    .header {
        grid-column: 1 / 13;
        padding-bottom: 30px;
        margin: 0;
        background-color: rgb(10, 152, 152);
    }
    .menu {
        background-color: antiquewhite;
        grid-column: 1 / 3;
        grid-row: 2/21;
        height: 100%;
    }
</style>