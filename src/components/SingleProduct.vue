<template>
    <div class="project" :class="{completed: project.completed}">
        <div class="flexing">
            <h2 @click="showDetails = !showDetails">{{ project.name }}</h2>
            <div class="icons">
                <span class="material-symbols-outlined" @click="deleteProject">
                    delete
                </span>
                <span class="material-symbols-outlined">
                    edit
                </span>
                <span class="material-symbols-outlined" @click="completeProject">
                    done
                </span>
            </div>
        </div>
        <p v-if="showDetails">{{ project.description }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            api: 'http://localhost:3000/projects/',
            showDetails: false
        }
    },
    props: ['project'],
    methods:{
        deleteProject(){
            let deleteRoute = this.api + this.project.id;
            fetch(deleteRoute, {
                method: 'DELETE'
            })
            .then(() => {
                this.$emit('delete-project', this.project.id);
            })
        },
        completeProject(){
            let updateRoute = this.api + this.project.id;
            fetch(updateRoute, {
                method: 'PATCH',
                headers: {
                    Content_Type: 'application/json'
                },
                body: JSON.stringify({
                    completed: !this.project.completed
                })
            })
            .then(() => {
                this.$emit('complete', this.project.id);
            })
        }
    }
}
</script>

<style>
.project {
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    margin: 10px 0;
    padding: 10px 20px;
    border-left: 6px solid rgb(11, 228, 11);
    border-radius: 5px;
}
.completed {
    border-left: 6px solid crimson;
}
h2{
    cursor: pointer;
}
.flexing {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.icons {
    display: flex;
    gap: 10px;
}
.icons span:hover {
    color: #777;
    cursor: pointer;
}

</style>