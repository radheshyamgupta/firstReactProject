
import './Expense.css'
import React, { useState } from 'react'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  const [deleted, setDeleted] = useState(false)

  function deleteExpense() {
    setDeleted(true)
  }

  if (deleted) {
    return null 
  }

  return (
    <div className="mydiv">
      <h2>{props.price}</h2>
      <h2>{title}</h2>
      <h2>{props.location}</h2>
      <button onClick={deleteExpense} className="button">
        Delete Expense
      </button>
    </div>
  )
}

export default ExpenseItem
