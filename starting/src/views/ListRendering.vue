<script>
    export default {
        data() {
            return {
                users: [
                    {
                        id: 1411,
                        name: 'duong',
                        isActive: true
                    },
                    {
                        id: 1602,
                        name: 'hung',
                        isActive: true
                    },
                    {
                        id: 1603,
                        name: 'quang',
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
            <th>No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Active</th>
        </tr>
        <template v-for="(user, index) in users">
            <tr v-if="user.isActive">
                <td>{{ index + 1 }}</td>
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.isActive }}</td>
            </tr>
        </template>
    </table>
</template>