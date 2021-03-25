import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "One",
      },
      {
        id: 2,
        title: "Two",
      },
      {
        id: 3,
        title: "Three",
      },
      {
        id: 4,
        title: "Four",
      }
    ]
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo){
      commit("add_todo", todo);
    },
    deleteTodo({ commit }, id){
      commit("delete_todo", id);
    },
    updateTodo({commit}, todo){
      commit("update_todo", todo);
    }
  },

  mutations: {
    add_todo(state, todo){
      state.todos.push(todo);
      //console.log(todo);
    },
    delete_todo(state, id){
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state, todo){
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index != -1){
        state.todos[index] = todo;
        //console.log(todo);
      }
    },
  },
  
  modules: {
  }
})
