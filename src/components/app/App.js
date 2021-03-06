import React from 'react';
import TodoHeader from "../todo-header/TodoHeader";
import './index.css'
import SearchPanel from "../search-panel/SearchPanel";
import TodoList from "../todo-list/TodoList";
import AddTodo from "../add-todo/AddTodo";
import ItemStatusFilter from "../item-status-filter";

class App extends React.Component {
    state = {
        todos: [
            {label: 'Drink Coffee', important: false, id: 1, done: false},
            {label: 'Make Awesome App', important: false, id: 2, done: false},
            {label: 'Have a lunch', important: false, id: 3, done: false}
        ],
        searchTodo: '',
        status: 'All'
    }


    onChange = (text) => {
        this.setState({searchTodo: text})
    }
    searchTodo = (todos, text) => {
        if (!text) return todos
        const todo = todos.filter((todo) => todo.label.toLowerCase().includes(text.toLowerCase()))
        return todo;
    }
    addTodo = (todoText) => {

        const oldId = this.state.todos.map((item) => item.id)

        let myNewId = oldId[oldId.length - 1] + 1;
        if (!myNewId) {
            myNewId = 0
        }
        const newTodo = {label: todoText, important: false, id: myNewId, done: false}
        const addNewTodo = this.setState({todos: [...this.state.todos, newTodo]})
        return addNewTodo;

    }
    setStatus = (text) => {
        this.setState({status: text})
    }
    filterStatus = () => {
        if ('All' === this.state.status) {
            return this.state.todos
        } else if ('Active' === this.state.status) {
            return this.state.todos.filter((todo) => !todo.done)
        } else if ('Done' === this.state.status) {
            return  this.state.todos.filter((todo) => todo.done)
        }
    }

    onTodoDelete = (id) => {
        const oldTodo = this.state.todos.filter((todo) => todo.id !== id)

        return this.setState({todos: [...oldTodo]})
    }

    todoDone = (idEl) => {
        let oldId = this.state.todos.findIndex((todo) => todo.id === idEl)


        let oldTodo = this.state.todos[oldId]
        const newTodo = {...oldTodo, done: !oldTodo.done}


        let old = this.state.todos.slice(0, oldId)

        let next = this.state.todos.slice(oldId + 1)

        let todoNew = [...old, newTodo, ...next]

        return this.setState({todos: [...todoNew]});


    }
    onImportantChange = (id) => {
        let oldId = this.state.todos.findIndex((todo) => todo.id === id)
        let oldTodo = this.state.todos[oldId]
        const newTodo = {...oldTodo, important: !oldTodo.important}
        let old = this.state.todos.slice(0, oldId)
        let next = this.state.todos.slice(oldId + 1)
        let todoNew = [...old, newTodo, ...next]
        return this.setState({todos: [...todoNew]});
    }

    render() {
        const filteredTodo = this.filterStatus()
        const newTodo = this.searchTodo(filteredTodo, this.state.searchTodo)

        return (
            <div className="todo-app">
                <TodoHeader/>
                <div className="top-panel d-flex">
                    <SearchPanel onChange={this.onChange}/>
                    <ItemStatusFilter setStatus={this.setStatus}
                                      changeStatus={this.filterStatus}/>
                </div>
                <TodoList
                    todos={newTodo}
                    onImportantChange={this.onImportantChange}
                    onTodoDelete={this.onTodoDelete}
                    todoDone={this.todoDone}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default App;
