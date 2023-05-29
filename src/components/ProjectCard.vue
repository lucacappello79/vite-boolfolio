<script>
export default {
    name: 'ProjectCard',

    data() {
        return {


        }
    },

    props: {

        project: Object,
    }


}

</script>


<template>
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.content }}</p>
            <a href="#" class="btn btn-primary">Link TBD</a>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>
