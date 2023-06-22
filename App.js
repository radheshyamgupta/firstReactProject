
// // import React, { useState } from 'react';
// // import './App.css';
// // import Form from './Form/Form';
// // import ExpenseItem from './ExpenseItem/ExpenseItem';

// // function App() {
// //   const [expenses, setExpenses] = useState([
// //     { title: "car insurance", price: 250, location: "mumbai" },
// //     { title: "bike insurance", price: 650, location: "kolkata" }
// //   ]);

// //   const addExpenseHandler = (formValue) => {
// //     setExpenses((prevExpenses) => [...prevExpenses, formValue]);
// //   }

// //   return (
// //     <div className="App">
// //       <div>
// //         <Form onForm={addExpenseHandler} />
// //       </div>

// //       {expenses.map((expense, index) => (
// //         <ExpenseItem
// //           key={index}
// //           title={expense.title}
// //           price={expense.price}
// //           location={expense.location}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState } from 'react';
// import './App.css';
// import Form from './Form/Form';
// import ExpenseItem from './ExpenseItem/ExpenseItem';

// function App() {
//   const [expenses, setExpenses] = useState([
//     { title: "car insurance", price: 250, location: "mumbai" },
//     { title: "bike insurance", price: 650, location: "kolkata" }
//   ]);

//   const [filter, setFilter] = useState('');

//   const addExpenseHandler = (formValue) => {
//     setExpenses((prevExpenses) => [...prevExpenses, formValue]);
//   }

//   const filterChangeHandler = (event) => {
//     setFilter(event.target.value);
//   }

//   const filteredExpenses = expenses.filter((expense) => {
//     return expense.title.toLowerCase().includes(filter.toLowerCase());
//   });

//   return (
//     <div className="App">
//       <div>
//         <Form onForm={addExpenseHandler} />
//         <input type="text" value={filter} onChange={filterChangeHandler} placeholder="Filter expenses" />
//       </div>

//       {expenses.map((expense, index) => (
//         <ExpenseItem
//           key={index}
//           title={expense.title}
//           price={expense.price}
//           location={expense.location}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import ExpenseItem from './ExpenseItem/ExpenseItem';

function App() {
  const [expenses, setExpenses] = useState([
    { title: "car insurance", price: 250, location: "mumbai" },
    { title: "bike insurance", price: 650, location: "kolkata" }
  ]);

  const [filter, setFilter] = useState('');

  const addExpenseHandler = (formValue) => {
    setExpenses((prevExpenses) => [...prevExpenses, formValue]);
  }

  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  }

  const filteredExpenses = expenses.filter((expense) => {
    const filterText = filter.toLowerCase();

    // return Object.values(expense).some((value) =>
    //   value.toString().toLowerCase().includes(filterText)
    // );
   
    
      return expense.price.toString().includes(filterText) 
            // ||  expense.location.toLowerCase().includes(filterText);
    });
    
  

  return (
    <div className="App">
      <div>
        <Form onForm={addExpenseHandler} />
        <input type="number" value={filter} onChange={filterChangeHandler} placeholder="search by price value" />
      </div>

      {filteredExpenses.map((expense, index) => (
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
