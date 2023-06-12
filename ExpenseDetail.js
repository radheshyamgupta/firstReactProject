
function ExpenseDetail(props){
   const location1=props.location1
   const price=props.price
   const title=props.title
return(
   <div>
{title}, {location1},{price}
   </div>
  
)
}
 export default ExpenseDetail