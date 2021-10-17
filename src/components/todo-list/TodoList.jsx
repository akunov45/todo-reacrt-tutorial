import React from 'react';
import TodoListItem from "../todo-list-item/TodoListItem";
import './index.css'

const TodoList = ({onDone, todos, onImportantChange, onTodoDelete, todoDone }) => {
    const elements = todos.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem {...item }
                              onDone={onDone}
                              onImportantChange={onImportantChange}
                              onTodoDelete={onTodoDelete}
                              todoDone={todoDone}
                />
            </li>
        );
    });
    return (
        <div>
            <ul className="list-group todo-list">
                { elements }
            </ul>
        </div>
    );
};

export default TodoList;
