<script>

import axios from 'axios';
export default {

  name: 'App',

  data() {
    return {

      projects: [],

    }
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
    <h2>{{ title }}</h2>
  </div>
</template>


<style scoped></style>
