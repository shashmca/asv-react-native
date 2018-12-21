"use strict"

//---------------------------------------------------
// State  ==> Todo => {id,title,completed}
//---------------------------------------------------

class Todo {
    constructor(title) {
        Todo.nextId++
        this.id = Todo.nextId;
        this.title = title;
        this.completed = false
    }
}
Todo.nextId = 0;

//---------------------------------------------------

class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title)
        this.todos = this.todos.concat(newTodo)
    }
    editTodo(id, newTitle) {
        this.todos = this.todos.map(todo => todo.id === id ? Object.assign({}, todo, { title: newTitle }) : todo)
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo)
    }
    completeAll() {
        let isAllCompleted = this.todos.every(todo => todo.completed);
        this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: !isAllCompleted }))
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }
    view(filter) {
        switch (filter) {
            case 'ALL': {
                this.todos.forEach(todo => console.log(todo))
            }
        }
    }
}

const todoService = new TodoService();
//---------------------------------------------------


