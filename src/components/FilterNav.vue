<template>
  <nav class="filter-nav">
    <button @click="filterBy('all')" :class="{active : current === 'all'}">All</button>
    <button @click="filterBy('ongoing')" :class="{active : current === 'ongoing'}">Ongoing</button>
    <button @click="filterBy('completed')" :class="{active : current === 'completed'}">Completed</button>
  </nav>
</template>

<script>
export default {
    props: ['current'],
    methods:{
        filterBy(status){
        this.$emit('filter', status)
        }
    }
}
</script>

<style>
.filer-nav{
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}
button{
    padding: 10px 20px;
    margin-right: 10px;
    border: 0;
    border-radius: 5px;
    background-color: #cae2da;
    color: rgb(28, 22, 22);
    cursor: pointer;
}
.active{
    background-color: #00ce89;
    color: white;
}
</style>