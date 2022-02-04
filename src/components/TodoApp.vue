<template>
  <div class="hello">
      <ul>
          <li v-for="todo in todos" :key="todo.id" data-text="todo">
            {{todo.text}}
          </li>
      </ul>
  </div>
</template>

<script lang="ts">
import getTodo from '../composables/getTodo'
// import {ref} from 'vue'

export default {
   setup(){
      const {todos} = getTodo()
      return{todos}
  }
}
</script>