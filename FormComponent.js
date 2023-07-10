// import React,{useState} from 'react'

// export const FormComponent = () => {
//  const [id,setId]=useState("")
//  const [price,setprice]=useState("")
//  const [dish,setdish]=useState("")
//  const [table,settable]=useState("")
//  const [final,setFinal]=useState([])
//  const idhandler=(e)=>{
//     setId(e.target.value)
//  }
//  const numberHandler=(e)=>{
// setprice(e.target.value)
//  }
//  const dishhandler=(e)=>{
//     setdish(e.target.value)
//  }
// const buttonhandler=()=>{
//     setFinal([...final,{id,price,dish,table}])
// }

//   return (
//     <div>
//         <label>id</label>
//        <input type='number' value={id}  onChange={idhandler}/>
//        <label>price</label>
//        <input type='number'  value={price} onChange={numberHandler}/> 
//        <label>dish</label>
//         <input type='text'   value ={dish} onChange={dishhandler}/>
//         <label>add</label>
//         <button onClick={buttonhandler}>add</button>
//         <select>
//             <option >
// table 1
//             </option>
//             <option >
// table 2
//             </option>
//             <option >
// table 3
//             </option>
//         </select>

// {final.map((entry)=>{
//     return <div>
//             <h3>{entry.price}</h3>
//     <h3>{entry.id}</h3>
  
//     <h3>{entry.dish}</h3>
    

//         </div>
    
// })}
//     </div>

//   )
// }

import React, { useState, useEffect } from 'react';

export const FormComponent = () => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");
  const [final, setFinal] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");

  const idHandler = (e) => {
    setId(e.target.value);
  };

  const numberHandler = (e) => {
    setPrice(e.target.value);
  };

  const dishHandler = (e) => {
    setDish(e.target.value);
  };

  const buttonHandler = () => {
    const entry = { id, price, dish, table: selectedTable };
    setFinal([...final, entry]);
    localStorage.setItem("entries", JSON.stringify([...final, entry]));
    setDish("");
    setPrice("");
    setId("");
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...final];
    updatedEntries.splice(index, 1);
    setFinal(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  useEffect(() => {
    const storedEntries = localStorage.getItem("entries");
    if (storedEntries) {
      setFinal(JSON.parse(storedEntries));
    }
  }, []);

  return (
    <div>
      <label>id</label>
      <input type='number' value={id} onChange={idHandler} />
      <label>price</label>
      <input type='number' value={price} onChange={numberHandler} />
      <label>dish</label>
      <input type='text' value={dish} onChange={dishHandler} />
      <label>add</label>
      <button onClick={buttonHandler}>add</button>
      <select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
        <option value="table 1">Table 1</option>
        <option value="table 2">Table 2</option>
        <option value="table 3">Table 3</option>
      </select>

      <div >
        {final
          .filter((entry) => entry.table === selectedTable)
          .map((entry, index) => (
             <div key={index} >
              <div><h3> ID: {entry.id},Price:{entry.price}, Dish name:{entry.dish}, Table number:{entry.table}</h3></div>
              <button onClick={() => deleteEntry(index)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};
