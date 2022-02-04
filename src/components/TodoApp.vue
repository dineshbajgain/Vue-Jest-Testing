<template>
  <div class="hello">
      <ul>
          <li v-for="todo in todos" :key="todo.id" data-text="todo" :class="todo.completed?'completed':''">
            {{todo.text}}
            <input type="checkbox" v-model="todo.completed" data-text="todo-checkbox" />
          </li>
      </ul>
      <form data-text="form" @submit.prevent="createTodo">
        <input data-text="new-todo" v-model="newTodo" />
      </form>
  </div>
</template>

<script lang="ts">
import getTodo from '../composables/getTodo'
// import {ref} from 'vue'

export default {
   setup(){
      const {todos,newTodo,createTodo} = getTodo()
      return{todos,newTodo,createTodo}
  }
}
</script>
<style scoped>
.completed{
  text-decoration: line-through;
  color: green;
}
</style>