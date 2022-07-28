import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

export default function TextForm() {

 const [text, setText] = useState(); 
 const navigate =useNavigate();

 const handleUpChange = () =>{
   let newText = text.toUpperCase();
   setText (newText)
 } 
 const handleDownChange = () =>{
  let newText = text.toLowerCase();
  setText (newText)
} 

 const handleOnChange = (event) => {
   setText (event.target.value);
 }
 const logOut = ()=> {
    navigate('/')
    
  }
 return (
    
      <>
      <div className="container my-3">
  <h2>Enter your text here </h2>
  <div className="form-group">
    <textarea className="form-control" value = {text} onChange= {handleOnChange}id="exampleFormControlTextarea1" rows="10"></textarea>
  </div>
  <button type="button" className="btn btn-primary my-3" onClick= {handleUpChange} >Convert to UpperCase</button>
  <button type="button" className="btn btn-success mx-2" onClick= {handleDownChange}>Convert to LowerCase</button>
</div>
<button onClick ={logOut} type="button" className="btn btn-danger mx-2 my-2" >Logout</button>
    </>
  )
}
