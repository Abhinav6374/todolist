import React from 'react';

const TodoList = (props) => {
    
    return (
        <>
        <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true"
         onClick={()=>{
            props.onSelect(props.itemval.id)
            }}/>
        <i className="fa fa-edit" aria-hidden="true"
         onClick={()=>{
            props.onSelect(props.itemval.id)
            }}/>
            <li>{props.text}</li>

        </div>
        </>
    )
};

export default TodoList;
