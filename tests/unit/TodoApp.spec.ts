import { shallowMount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue',()=>{
    let wrapper:any;
    beforeEach(()=>{
        wrapper= shallowMount(TodoApp);
    })
    it('should render todo text',()=>{
        const todo = wrapper.get('[data-text="todo"]');
        expect(todo.text()).toBe("Learn Vue Testing")
    }) 

    it('should add new todo',async()=>{
        expect(wrapper.findAll('[data-text="todo"]')).toHaveLength(1)

        await wrapper.get('[data-text="new-todo"]').setValue('New Todo')
        await wrapper.get('[data-text="form"]').trigger('submit')

        expect(wrapper.findAll('[data-text="todo"]')).toHaveLength(2)
    })

    it('should be able to complete todo',async()=>{
        await wrapper.get('[data-text="todo-checkbox"]').setValue(true)

        expect(wrapper.get('[data-text="todo"]').classes()).toContain('completed')
    })

})