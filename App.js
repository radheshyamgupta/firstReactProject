
import React, { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import ExpenseItem from './ExpenseItem/ExpenseItem';

function App() {
  const [expenses, setExpenses] = useState([
    { title: "car insurance", price: 250, location: "mumbai" },
    { title: "bike insurance", price: 650, location: "kolkata" }
  ]);

  const addExpenseHandler = (formValue) => {
    setExpenses((prevExpenses) => [...prevExpenses, formValue]);
  }

  return (
    <div className="App">
      <div>
        <Form onForm={addExpenseHandler} />
      </div>

      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          price={expense.price}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;

