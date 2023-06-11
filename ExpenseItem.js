import './ExpenseItem.css'
function ExpenseItem(props){

  
    return (
        <div className="expense-item">
            <h2 >Expense Item</h2>
                <div className='expenseName'> expenseName:{props.title}</div>
                <div className='date'>Date:{props.date.toDateString()}</div>
                <div className='expensePrice'>expensePrice:${props.price}</div>
                <div className='LocationOfExpenditure'>expenseLocation:{props.location1}</div>
        </div>
    )
}
export default ExpenseItem;