import React, { useState } from "react";
//import {todo} from "../image/2762094.png"

const Test = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const addItem = () => {
    if (!inputData) {
      alert("Please Fill the Data");
    } else if (inputData && !toggleSubmit) {
      setItem(
        item.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItem([...item, allInputData]);
      setInputData("");
    }
  };

  // delete All
  const deleteItem = (index) => {
    const updatedItem = item.filter((elem) => {
      return index !== elem.id;
    });
    setItem(updatedItem);
  };

  const editItem = (id) => {
    let newEditItem = item.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  

  return (
    <>
      <div className="main_div">
        <div className="center_div">
        <br />
          <h1>TODO LIST</h1>
          <br />
          <div className="todo_style">
            <input
              type="text"
              placeholder="Add Item Here ..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fa fa-edit add-btn"
                title="Edit item"
                onClick={addItem}
              ></i>
            )}
          </div>
         
          <ol>
            {item.map((elem) => {
              return (
                <div className="todo" key={elem.id}>
                  <li>{elem.name}</li>
                  <i
                    className="fa fa-edit add-btn"
                    title="Edit item"
                    onClick={() => editItem(elem.id)}
                  ></i>
                  <i
                    className="fa fa-trash-alt add-btn"
                    title="Delete item"
                    onClick={() => deleteItem(elem.id)}
                  ></i>
                </div>
              );
            })}
            </ol>
            
          
         
        </div>
      </div>
      ;
    </>
  );
};

export default Test;
