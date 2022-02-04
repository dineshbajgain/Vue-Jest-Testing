import { shallowMount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue',()=>{
    it('should render todo text',()=>{
        const wrapper = shallowMount(TodoApp);
        const todo = wrapper.get('[data-text="todo"]');
        expect(todo.text()).toBe("Learn Vue Testing")
    }) 

    it('should add new todo',async()=>{
        const wrapper = shallowMount(TodoApp)
        expect(wrapper.findAll('[data-text="todo"]')).toHaveLength(1)

        await wrapper.get('[data-text="new-todo"]').setValue('New Todo')
        await wrapper.get('[data-text="form"]').trigger('submit')

        expect(wrapper.findAll('[data-text="todo"]')).toHaveLength(2)
    })

    it('should be able to complete todo',async()=>{
        const wrapper = shallowMount(TodoApp)

        await wrapper.get('[data-text="todo-checkbox"]').setValue(true)

        expect(wrapper.get('[data-text="todo"]').classes()).toContain('completed')
    })

})