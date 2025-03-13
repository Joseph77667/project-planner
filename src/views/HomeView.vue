<template>
  <div class="home">
    <h3>All Projects</h3>
    <div v-for="project in projects" :key="project.id">
      <SingleProduct :project = "project" 
      @delete-project="deleteProject"
      @complete="completeProject"></SingleProduct>
    </div>
  </div>
</template>

<script>

import SingleProduct from '../components/SingleProduct'
export default {
  components: { SingleProduct },
  name: 'HomeView',
  data(){
    return {
      projects  : []
    }
  },
  methods:{
    deleteProject(id){
      this.projects = this.projects.filter(project => project.id !== id)
    },
    completeProject(id){
      let findProject = this.projects.find(project => project.id === id);
      findProject.completed = !findProject.completed
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
    .then(response => response.json())
    .then(data => {
      this.projects = data
    })
    .catch(error => console.error(error))
  }
}
</script>
