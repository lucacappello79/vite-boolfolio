<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsIndex',

    data() {
        return {
            projects: [],

            currentPage: 1,
        }
    },

    components: {
        ProjectCard,
    },

    created() {
        this.getProjects();
    },

    methods: {
        getProjects() {

            axios.get('http://127.0.0.1:8000/api/projects?page=' + this.currentPage).then(response => {
                //axios.get('http://127.0.0.1:8000/api/projects').then(response => {

                // this.projects = response.data.results;
                this.projects = response.data.results.data;

            });

        },

    },
}

</script>

<template>
    <div class="container py-5">

        <!-- <div v-if="projects.length > 0" class="container pt-5">
            <h1>My Projects2</h1>
            <hr>
            <div class="row">
                <div v-for="item in projects" class="col-4 mb-5">
                    <ProjectCard :project="item"></ProjectCard>
                </div>
            </div>
        </div> -->

        <!-- <div v-else class="loading-screen">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div> -->


        <h1>My Projects2</h1>
        <hr>
        <div class="row">
            <div v-for="item in projects" class="col-4 mb-5">
                <ProjectCard :project="item"></ProjectCard>
            </div>
        </div>




    </div>
</template>

<style lang="scss" scoped>
.loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-height: 600px;


}
</style>