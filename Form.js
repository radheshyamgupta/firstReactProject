import "./Form.css"
function Form(){
    function title (e){
e.preventDefault()
console.log(e.target.value)

    }
    function price(e){
console.log(e.target.value)
    }
    function location(e){
console.log(e.target.value)
    }

    return(
    
<div className="Form">
    
    <label for="title">Title</label>
    <input type="text" id="input" onChange={title}></input>
    <label for="number">Price</label>
    <input type="number" id="price"  onChange={price}></input>
    <label for="location" id="location"> Location</label>
    <input type="text" onChange={location}></input>
    <button  >ADD</button>
</div>
    )
}
export default Form