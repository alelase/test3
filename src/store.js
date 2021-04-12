import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const STORAGE_KEY = 'todos-vuejs';

export default new Vuex.Store({
    state: {
        todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    actions: {
        addTodo ({ commit }, text) {
            commit('addTodo', {
                text,
                done: false
            })
        },

        removeTodo ({ commit }, todo) {
            commit('removeTodo', todo)
        },

        toggleTodo ({ commit }, todo) {
            commit('editTodo', { todo, done: !todo.done })
        },

        editTodo ({ commit }, { todo, value }) {
            commit('editTodo', { todo, text: value })
        },

        toggleAll ({ state, commit }, done) {
            state.todos.forEach((todo) => {
                commit('editTodo', { todo, done })
            })
        },

        clearCompleted ({ state, commit }) {
            state.todos.filter(todo => todo.done)
                .forEach(todo => {
                    commit('removeTodo', todo)
                })
        }
    },
    mutations: {
        addTodo (state, todo) {
            state.todos.push(todo);
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
        },

        removeTodo (state, todo) {
            state.todos.splice(state.todos.indexOf(todo), 1)
        },

        editTodo (state, { todo, text = todo.text, done = todo.done }) {
            const index = state.todos.indexOf(todo);

            state.todos.splice(index, 1, {
                ...todo,
                text,
                done
            });
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
        }
    }
})
