<script>

import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {

  name: 'App',

  data() {
    return {

      projects: [],

    }
  },

  components: {
    ProjectCard
  },

  created() {

    this.getProjects();

  },


  methods: {

    getProjects() {

      axios.get('http://127.0.0.1:8000/api/projects').then(response => {

        this.projects = response.data.results;

      });

    }
  },

}






</script>


<template>
  <div class="container pt-5">
    <h1>My projects</h1>

    <!-- <table class="table table-striped">
      <thead>
        <th>Title</th>
        <th>Slug</th>
        <th>Content</th>
      </thead>
      <tbody>
        <tr v-for="item in projects">
          <td>{{ item.title }}</td>
          <td>{{ item.slug }}</td>
          <td>{{ item.content }}</td>
        </tr>
      </tbody>
    </table> -->


    <div class="row">
      <div v-for="item in projects" class="col-4 mb-5">
        <ProjectCard :project="item"></ProjectCard>
      </div>
    </div>




  </div>
</template>


<style scoped></style>
