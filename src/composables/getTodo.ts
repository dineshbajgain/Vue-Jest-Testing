import {ref} from 'vue'
interface Todo{
    id:number,
    text:string,
    completed:boolean
}
const getTodo=()=>{
    const todos = ref<Todo[]>([{
        id:1,
        text:"Learn Vue Testing.",
        completed: false
    }])
    return {todos}
}
export default getTodo