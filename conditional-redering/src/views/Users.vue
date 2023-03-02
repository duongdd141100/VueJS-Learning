<script>
    export default {
        data() {
            return {
                users: [
                    {
                        id: 1,
                        name: 'duongdd',
                        isActive: true
                    },
                    {
                        id: 2,
                        name: 'hungpv',
                        isActive: true
                    },
                    {
                        id: 3,
                        name: 'hieupm',
                        isActive: false
                    }
                ]
            }
        }
    }
</script>
<template>
    <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>active</th>
        </tr>
        <template v-for="user in users" :key="user.id">
            <tr v-if="user.isActive">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.isActive }}</td>
            </tr>
        </template>
    </table>
</template>