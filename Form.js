
import React, { useState } from "react";
import Display from "./Display/Display";
import  "./Form.css"
function Form() {
  const [formInput, setFormInput] = useState("");
  const [formNumber, setFormNumber] = useState("");
  const [update, setUpdate] = useState([]);
  const [emptyFieldError, setEmptyFieldError] = useState(false);
  const [negativeNumberError, setNegativeNumberError] = useState(false);
  const [ collage_nameInput ,setCollage_nameInput ]=useState("")

  const formHandler = (e) => {
    e.preventDefault();
    if (formInput === "" || formNumber === "" ||collage_nameInput ==="" ) {
        setEmptyFieldError(true);
        return;
      }
      if (formNumber < 0) {
        setNegativeNumberError(true);
        return;
      }
    const newItem = {
      FormInput: formInput,
      FormNumber: formNumber,
       CollageName:collage_nameInput 
    };
    setUpdate((prevUpdate) => [...prevUpdate, newItem]);
    setFormInput("");
    setFormNumber("");
    setCollage_nameInput("")
    setEmptyFieldError(false);
    setNegativeNumberError(false)

  };
  
  const handleCloseError = () => {
    setFormInput("");
    setFormNumber("");
    setCollage_nameInput("");
    setEmptyFieldError(false);
    setNegativeNumberError(false)
    

  };

  return (
    <div >
      <form>
        <div className="div">
        <label forHtml="username"> Username</label>
        <input
          type="text"
          name="formInput" 
          id="username"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
          required
        />
        <br/>
         <label forHtml="collage_name"> collageName</label>
         
        <input
          type="text"
          name="collage_nameInput" 
          id="collage_name"
          value={collage_nameInput 
        }
          onChange={(e) => setCollage_nameInput(e.target.value)}
          required
        />
        <br/>
         <label forHtml="age">User(age)</label>
        <input
          type="number"
          name="formNumber"
          id="age"
          value={formNumber}
          onChange={(e) => setFormNumber(e.target.value)}
          required
        />
         <br/>
        <button onClick={formHandler}>Add</button>
        </div>
      </form>
      {emptyFieldError && (
        <div>
          <p>Please fill in all the fields.</p>
          <button onClick={handleCloseError}>Close</button>
        </div>
      )}
      {
        negativeNumberError && (
        
            <div>
              <p> negative number are not allowed Try once again</p>
              <button onClick={handleCloseError}>Close</button>
            </div>
        )
      }

      <Display update={update} />
    </div>
  );
}

export default Form;
