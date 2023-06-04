<script>
export default {
    name: 'ProjectShow',

    data() {
        return {

            project: {},

            projectSlug: '',

        }
    },

    mounted() {

        // console.log(this.$route);
        this.projectSlug = this.$route.params.slug

    },

    methods: {

        getProject() {

            axios.get('http://127.0.0.1:8000/api/projects/' + this.projectSlug).then(response => {

                this.project = response.data.project;
            })
        }
    },

}
</script>

<template>
    <div>
        <h1 class="container py-5">{{ project.title }}</h1>
    </div>
</template>