import React, {useState} from 'react';

const AddTodo = ({addTodo}) => {
    const [text, setText] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if (!text) return;
        addTodo(text)
        setText('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={text}
                       onChange={e=>setText(e.target.value)}/>
                <input type="submit"/>
            </form>

        </div>
    );
};

export default AddTodo;
