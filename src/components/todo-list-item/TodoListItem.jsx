import React from 'react';
import './index.css'

const TodoListItem = ({
                          id,
                          label,
                          onImportantChange,
                          onTodoDelete,
                          todoDone,
                          done = false,
                          important = false
                      }) => {

    const style = {
        textDecoration: done ? 'line-through' : 'none',
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };
    return (
        <span className="todo-list-item">
      <span
          onClick={() => {
              todoDone(id)
          }}
          className="todo-list-item-label"
          style={style}>
        {label}
      </span>

      <button type="button"
              onClick={() => onImportantChange(id)}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              onClick={() => onTodoDelete(id)}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
      </button>
    </span>
    );
};

export default TodoListItem;
