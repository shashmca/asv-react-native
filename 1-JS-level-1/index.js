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
        //.
    }
    editTodo(id, newTititle) {
        //.
    }
    completeTodo(id) {
        //.
    }
    completeAll() {
        //
    }
    deleteTodo(id) {
        //
    }
    clearCompleted() {
        //
    }
    view(filter) {
        // filter ==> ALL | ACTIVE | COMPLETED
    }
}

const todoService = new TodoService();
todoService.addTodo('item-1');

