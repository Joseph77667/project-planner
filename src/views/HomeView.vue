<template>
  <div class="home">
    <h3>Home</h3>
    <FilterNav @filter="current = $event" :current="current"></FilterNav>
    <div v-for="project in filterProjects" :key="project.id">
      <SingleProduct :project = "project" 
      @delete-project="deleteProject"
      @complete="completeProject"></SingleProduct>
    </div>
  </div>
</template>

<script>

import FilterNav from '../components/FilterNav'
import SingleProduct from '../components/SingleProduct'
export default {
  components: {
    FilterNav, SingleProduct },
  name: 'HomeView',
  data(){
    return {
      projects  : [],
      current : 'all'
    }
  },
  computed:{
    filterProjects(){
      if(this.current === 'all'){
        return this.projects
      }else if(this.current === 'completed'){
        return this.projects.filter(project => project.completed)
      }else if(this.current === 'ongoing'){
        return this.projects.filter(project => !project.completed)
      }
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
