<template>
  <div class="home">
    <h1>Home Page</h1>
    <div v-for="project in projects" :key="project.id">
      <SingleProduct :project = "project"></SingleProduct>
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
