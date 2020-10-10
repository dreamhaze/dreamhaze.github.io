<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Nuxt SSR</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" >
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <nuxt-link exact active-class="active" class="nav-link" to="/">
                    Home
                </nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">
                    About 
                </nuxt-link>
            </li> 
            <li class="nav-item">
                <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">
                    Users 
                </nuxt-link>
            </li> 
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto"> 
                <li class="nav-item" v-if="!hasToken">
                    <nuxt-link no-prefetch active-class="active" class="nav-link" to="/login">
                        Login
                    </nuxt-link>
                </li>
                <li class="nav-item" v-else>
                    <a @click.prevent="logout" no-prefetch class="nav-link" href="#">
                        LogOut
                    </a>
                </li>
            </ul>
        </form>
    </div>
    </nav>
</template>
<script>
export default {
    computed: {
        hasToken() {
            return this.$store.getters.hasToken
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.push('/login')
        }
    }
}
</script>