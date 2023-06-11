
import ExpenseItem from './Component/ExpenseItem';
function App() {
 const  expense=[
  {
  title:"Car insurance",
  price:250,
  date:new Date(2011,2,1),
  location1:"mumbai"
 },
 {
  title:"Bike insurance",
  price:250,
  date:new Date(2011,2,1),
  location1:"kandivali"
 }
]

  return (
    <div >
    <ExpenseItem title={expense[0].title} price={expense[0].price} location1={expense[0].location1} date={expense[0].date} ></ExpenseItem>
    <ExpenseItem title={expense[1].title} price={expense[1].price} location1={expense[1].location1} date={expense[1].date} ></ExpenseItem>
    </div>
  );
}

export default App;
