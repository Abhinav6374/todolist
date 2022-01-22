import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    if(!inputList){

    }else{
      const allInputData ={ id: new Date().getTime().toString(), name:inputList}
    setItems([...items, allInputData])
    setInputList("");
    }
  };

  const deleteItems = (index) => {
     const updatedItems=items.filter((arrElem)=>{
        return index !== arrElem.id;
    });
    setItems(updatedItems)
};

  const editItems = ()=>{
    
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add Item Here"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listofItems}> + </button>

          <ol>
            {items.map((itemval) => {
              return (
                <TodoList
                  //id={index}
                  key={itemval.id}
                  text={itemval.name}
                  onSelect={deleteItems}
                  onSelect={editItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
