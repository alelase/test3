<template>
    <div class="work-area-container">TODOS!

        <div>
            <input class="new-todo"
                   autofocus
                   autocomplete="off"
                   placeholder="What needs to be done?"
                   @keyup.enter="addTodo">
        </div>
        <TodoItem v-for="(todo, index) in filteredTodos"
                  :key="index"
                  :todo="todo"></TodoItem>

    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    import { mapActions } from 'vuex'

    const filters = {
        all: todos => todos,
        active: todos => todos.filter(todo => !todo.done),
        completed: todos => todos.filter(todo => todo.done)
    };

    export default {
        name: "WorkArea",
        components: {TodoItem},
        data () {
            return {
                visibility: 'all',
                filters: filters
            }
        },
        computed: {
            todos () {
                return this.$store.state.todos
            },
            allChecked () {
                return this.todos.every(todo => todo.done)
            },
            filteredTodos () {
                console.log("filters[this.visibility]", this.filters.all(this.todos));
                return filters[this.visibility](this.todos)
            },
            remaining () {
                return this.todos.filter(todo => !todo.done).length
            }
        },
        methods: {
            ...mapActions([
                'toggleAll',
                'clearCompleted'
            ]),
            addTodo (e) {
                const text = e.target.value
                if (text.trim()) {
                    this.$store.dispatch('addTodo', text)
                }
                e.target.value = ''
            }
        },
        // filters: {
        //     pluralize: (n, w) => n === 1 ? w : (w + 's'),
        //     capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
        // }
    }


</script>

<style scoped>

    .work-area-container {
        flex: 1;
        width: 100%;
        padding: 16px;
        overflow: auto;
        display: flex;
        flex-direction: column;
    }


    .new-todo {
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgb(0 0 3%);
    }

    .new-todo, .edit {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgb(0 0 20%);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

</style>