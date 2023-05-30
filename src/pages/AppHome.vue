<script>
export default {
    name: 'AppHome',
}
</script>

<!-- <template>
    <div class="container py-5">
        <h1>Homepage test</h1>

        <hr>
        <router-link :to="{ name: 'aboutUsPage' }">About us</router-link>
    </div>
</template> -->

<template>
    <div class="container py-5">
        <div class="jumbo text-center">
            <h1 class="display-4">Welcome to My Portfolio</h1>
            <hr class="my-4">
            <p>Learn more about me, check my projects or contact me for more information.</p>
            <div class="d-flex justify-content-center">
                <div class="mr-3">
                    <router-link class="btn btn-primary btn-lg" :to="{ name: 'aboutUsPage' }">Learn more about
                        me</router-link>
                </div>
                <div class="ml-3">
                    <router-link class="btn btn-success btn-lg" :to="{ name: 'projectsIndexPage' }"
                        style="margin-left: 30px;">View my
                        projects</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>