<template>
  <div class="hello">
    <h1>{{ todos }}</h1>
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