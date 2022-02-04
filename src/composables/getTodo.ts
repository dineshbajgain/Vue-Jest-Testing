import {ref} from 'vue'
interface Todo{
    id:number,
    text:string,
    completed:boolean
}
const getTodo=()=>{
    const todos = ref<Todo[]>([{
        id:1,
        text:"Learn Vue Testing",
        completed: false
    }])
    const newTodo = ref('')
    const createTodo=()=>{
        todos.value.push({
            id:2,
            text: newTodo.value,
            completed:false
        })
        newTodo.value = ''
    }
    return {todos,newTodo,createTodo}
}
export default getTodo