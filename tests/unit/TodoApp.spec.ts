import { shallowMount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue',()=>{
    it('should render todo text',()=>{
        const wrapper = shallowMount(TodoApp);
        const todo = wrapper.get('[data-text="todo"]');
        expect(todo.text()).toBe("Learn Vue Testing")
    })

    it('should add new todo',()=>{
        const wrapper = shallowMount(TodoApp)
        expect(wrapper.findAll('[data-text="todo"]')).toHaveLength(1)
    })
})