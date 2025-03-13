<template>
  <h1>New Project</h1>
  <form @submit.prevent="addProject">
    <label>Project Name - </label>
    <input type="text" v-model="name">
    <label>Project Description - </label>
    <input type="text" v-model="description">
    <button>Add</button>
  </form>
</template>

<script>
export default {
    data(){
        return {
            name: '',
            description: ''
        }
    },
    methods:{
        addProject(){
            fetch('http://localhost:3000/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    description: this.description,
                    completed: false
                })
            })
            .then(() => {
                this.$router.push({name: 'home'})
            })
        }
    }
}
</script>

<style>
form{
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
label{
    display: block;
    color: #292727;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
}
input{
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 0;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
}
textarea{
    max-width: 100%;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
}
form button{
    display: block;
    background-color: #00ce89;
    color: white;
    padding: 10px 30px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    margin: 20px auto 0;
}
</style>