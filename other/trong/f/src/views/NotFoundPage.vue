<template>
    <AppHeader />
    <div class="page">
        <p>Page not found
            <router-link to="/">
                Main Page
            </router-link>
        </p>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
export default {
    name: 'NotFoundPage',
}
</script>