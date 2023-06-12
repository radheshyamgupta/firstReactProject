
function ExpenseDate(props){
    
    const date = props.date.toLocaleString('en-US', { day: '2-digit' });

    const month=props.date.toLocaleString('en-US',{month:'long'})
    const year=props.date.getFullYear()
return (
    <div>{date} {month} {year}</div>

)
}
  export default ExpenseDate