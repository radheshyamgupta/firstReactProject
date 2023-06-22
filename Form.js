
import "./Form.css";
import React, { useState } from "react";

function Form(props) {
  const [inputTitle, setTitle] = useState("");
  const [inputPrice, setPrice] = useState("");
  const [inputLocation, setLocation] = useState("");
  const [inputDate, setDate] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const submitData = {
      title: inputTitle,
      price: inputPrice,
      location: inputLocation,
      date: inputDate,
    };
    props.onForm(submitData);
    setTitle("");
    setPrice("");
    setLocation("");
    setDate("");
  }

  const date = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const title = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const price = (e) => {
    setPrice(e.target.value);
  };

  const location = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" id="input" value={inputTitle} onChange={title} />

        <label htmlFor="price">Price</label>
        <input type="number" id="price" value={inputPrice} onChange={price} />

        <label htmlFor="location">Location</label>
        <input type="text" value={inputLocation} onChange={location} />

        <label htmlFor="date">Date</label>
        <input type="date" value={inputDate} onChange={date} />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Form;
