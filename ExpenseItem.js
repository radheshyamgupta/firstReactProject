import './ExpenseItem.css'
import  './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
function ExpenseItem(props){

  
    return (
        <div className="expense-item">
            <ExpenseDate    date={props.date}/>,
             <ExpenseDetail title={props.title} location1={props.location1} price={props.price} />
        </div>
    )
}
export default ExpenseItem;