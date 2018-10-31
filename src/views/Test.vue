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
  <div :style="{ fontSize: postFontSize + 'em' }">
  <ul>
    <todo-item
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      :id="todo.id"
      v-on:remove1="remove(index)"
       v-on:enlarge-text="postFontSizeFn"
    ></todo-item>
  </ul>
  
  </div>
    <button v-on:click.middle="great('mesg: ', $event)">great</button>
    <slot-test >
      <!-- 111 -->
      <!-- <template slot-scope="user">{{user.slots}}</template> -->
      <template slot-scope="user">
        {{user.data}}
      </template>
      <footer slot="footer">this is slotfooter</footer>
    </slot-test>

    <input >
    <br>
    <input v-focus>

    <div id="hook-arguments-example" v-demo:foo.a.b="postFontSize"></div>
</div>
</template>

<script>
import todoItem from "@/components/todo-item.vue";
import slotTest from "@/components/slotTest.vue";
// import func from './vue-temp/vue-editor-bridge';

export default {
  components: {
    todoItem,
    slotTest
  },
  data() {
    return {
      postFontSize: 1,
      newTodoText: "",
      todos: [
        {
          id: 1,
          title: "Do the dishs"
        },
        {
          id: 2,
          title: "Take out the trash"
        }
      ],
      nextTodoId: 3
    };
  },
  methods: {
    postFontSizeFn: function(xem) {
      this.postFontSize += xem;
    },
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = "";
    },
    remove: function(index) {
      this.todos.splice(index, 1);
    },
    great: function(message, event) {
      if (event) {
        event.preventDefault;
      }
      console.log(message);
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        console.log(  el)
        el.focus()
        el.value = 123
        el.id = '11'
        // el.blur()
      }
    },
    demo: {
      bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
          'name: '       + s(binding.name) + '<br>' +
          'value: '      + s(binding.value) + '<br>' +
          'expression: ' + s(binding.expression) + '<br>' +
          'argument: '   + s(binding.arg) + '<br>' +
          'modifiers: '  + s(binding.modifiers) + '<br>' +
          'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    }
  }
};
</script>
