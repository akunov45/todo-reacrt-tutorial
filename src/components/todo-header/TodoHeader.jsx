import React from 'react';
import './index.css'
const TodoHeader = ({toDo, done}) => {
    return (
        <div>
            <div className="app-header d-flex">
                <h1>Todo List</h1>
                {/*<h2>{toDo} more to do, {done} done</h2>*/}
            </div>
        </div>
    );
};

export default TodoHeader;
