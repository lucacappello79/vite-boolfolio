<script>
export default {
    name: 'AppHome',
}
</script>

<template>
    <div class="container py-5">
        <h1>Homepage</h1>

        <hr>
        <router-link :to="{ name: 'aboutUsPage' }">About us</router-link>
    </div>
</template>

<style lang="scss" scoped></style>