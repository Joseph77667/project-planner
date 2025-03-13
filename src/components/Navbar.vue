<template>
    <nav class="navbar">
        
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'AddProject'}">Add New</router-link>
        
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
    text-align: center;
    margin: 40px auto;
}
.navbar a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #333;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
}
a.router-link-active{
    border-bottom: 2px solid #00ce89;
    padding-bottom: 4px;
}

</style>