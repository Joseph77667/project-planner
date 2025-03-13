<template>
  <h1>Edit</h1>
  <form @submit.prevent="editProject">
    <label>Project Name - </label>
    <input type="text" v-model="name">
    <label>Project Description - </label>
    <textarea type="text" rows="3" v-model="description"></textarea>
    <button>Edit Project</button>
  </form>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            name: '',
            description: ''
        }
    },
    mounted(){
            fetch('http://localhost:3000/projects/' + this.id)
            .then(response => response.json())
            .then(data => {
                this.name = data.name;
                this.description = data.description;
            })
            .catch(error => console.error(error))
        },
    methods:{

        editProject(){
            fetch('http://localhost:3000/projects/' + this.id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    description: this.description
                })
            })
            .then(() => {
                this.$router.push({name: 'home'})
            })
        }
    },
}
</script>

<style>

</style>