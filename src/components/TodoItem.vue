<template>
    <div class="todo" :class="{ completed: todo.done, editing: editing }">
        <!--<div class="task">{{todo.text}}</div>-->
        <div class="view">
            <div class="read">
                <input class="toggle"
                       type="checkbox"
                       :checked="todo.done"
                       @change="toggleTodo(todo)">
                <label class="label"  v-text="todo.text" v-show="!editing" @dblclick="editing = true"></label>
                <button class="destroy" @click="removeTodo(todo)"></button>
            </div>

            <div class="edit">
                <input
                       v-show="editing"
                       v-focus="editing"
                       :value="todo.text"
                       @keyup.enter="doneEdit"
                       @keyup.esc="cancelEdit"
                       @blur="doneEdit" />
            </div>
        </div>

    </div>

</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "TodoItem",
        props: ['todo'],
        data () {
            return {
                editing: false
            }
        },
        methods: {
            ...mapActions([
                'editTodo',
                'toggleTodo',
                'removeTodo'
            ]),
            doneEdit (e) {
                const value = e.target.value.trim()
                const { todo } = this
                if (!value) {
                    this.removeTodo(todo)
                } else if (this.editing) {
                    this.editTodo({
                        todo,
                        value
                    });
                    this.editing = false
                }
            },
            cancelEdit (e) {
                e.target.value = this.todo.text;
                this.editing = false
            }
        }
    }
</script>

<style scoped>
    .task {
        background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E);
    }

    .view {
        display: flex;
        align-items: center;
    }

    .view .read {
        flex: 1;
        display: flex;
    }

    .view .edit {
        flex: 1;
    }

    .view .toggle {
        width: 32px;
    }

    .todo .view .destroy {
        visibility: hidden;
        width: 32px;
        height: 32px;
        border: none;
        background: transparent;
        cursor: pointer;
        margin: auto 0;
        font-size: 30px;
        color: #cc9a9a;
        margin-bottom: 11px;
        transition: color 0.2s ease-out;
    }

    .todo .view .destroy:after {
        content: '×';
    }

    .todo .view .read:hover .destroy {
        visibility: visible;
    }

    .todo .view label {
        flex: 1;
    }
</style>