import "./Form.css"
import   React , { useState} from 'react'

function Form(){
    const [inputTitle,setTitle] = useState('')
const [inputPrice,setPrice]=useState('')
const [inputLocation,setLocation] =useState('')
const [inputDate,setDate]= useState('')

 function submitHandler(e){
    e.preventDefault()
 const submitData={
    title:inputTitle,
    price:inputPrice,
    location:inputLocation,
    date:inputDate

}
console.log(submitData)
}
const date=(e)=>{
    e.preventDefault()
    setDate(e.target.value)
}

    const title = (e)=>{
e.preventDefault()
setTitle(e.target.value)

    }
    const price=(e)=>{
        setPrice(e.target.value)
    }
    const location=(e)=>{
        setLocation(e.target.value)
    }

    return(
    
<div className="Form">
    <form  onSubmit={submitHandler}>
    <label for="title">Title</label>
    <input type="text" id="input" onChange={title}></input>
    <label for="number">Price</label>
    <input type="number" id="price"  onChange={price}></input>
    <label for="location" id="location"> Location</label>
    <input type="text" onChange={location}></input>
    <lable for="date" >Date</lable>
    <input type="date" onChange={date}></input>
    <button type="submit" >ADD</button>
    </form>
    
</div>
    )
}
export default Form