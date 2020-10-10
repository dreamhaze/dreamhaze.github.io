<template>
    <section>
        <h1>User {{ user.name }} </h1>
        <hr>
        <h3>
            {{ user.email }} 
        </h3>
        <p>{{ user.phone }}, {{ user.username }}</p>
    </section>
</template>
<script>
export default {
    validate({params}) {
        return /^\d+$/.test(params.id)
    },
    async asyncData({$axios, params}) {
        const user = await $axios.$get('http://jsonplaceholder.typicode.com/users/' + params.id)
        return {user}
    }
}
</script>