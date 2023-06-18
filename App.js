
import './App.css';
import ExpenseItem from './ExpenseItem/ExpenseIte';
function App() {
  const arr=[{title:"car insurance",price:250,location:"mumbai"},
{title:"bike insurance", price:650,location:"kolkata"}]
  return (
    <div className="App">
      <ExpenseItem title={arr[0].title} price={arr[0].price} location={arr[0].location}></ExpenseItem>
      <ExpenseItem title={arr[1].title} price={arr[1].price} location={arr[1].location}></ExpenseItem>
    </div>
  );
}

export default App;
