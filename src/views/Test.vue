<template>
<div id="todo-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input 
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    >
    <button>Add</button>
  </form>
  <ul>
    <todo-item
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      :id="todo.id"
      v-on:remove1="remove(index)"
    ></todo-item>
  </ul>
    <button v-on:click.middle="great('mesg: ', $event)">great</button>
</div>
</template>

<script>
import todoItem from "@/components/todo-item.vue"
// import func from './vue-temp/vue-editor-bridge';

export default {
  components: {
    todoItem
  },
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishs'
        },
        {
          id: 2,
          title: 'Take out the trash'
        }
      ],
      nextTodoId: 3
    }
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    remove: function (index){
      this.todos.splice(index, 1)
    },
    great: function (message, event) {
      // if (event) {event.preventDefault}
      console.log(message)
    }
  }
}
</script>
