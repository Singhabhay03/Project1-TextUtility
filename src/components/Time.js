import React, {useState} from 'react'

function Time() {

const [time, setTime] = useState('Time');

const update = () => {
    setInterval(() => {
        let timeNow = new Date().toLocaleTimeString();
setTime(timeNow);
    }, 1000);
 
}

  return (
<>
<div className="container my-3">
<div className="card" style= {{width: "18rem"}}>
  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2mVEA98KcPtIm7wH7zfMGf41CDgLvC36qQ&usqp=CAU"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h1 className="clock"> {time}</h1>
    <button onClick={update} className="btn btn-success mx-5"> Get time </button>
  </div>
</div>
</div>
</>
  )
}

export default Time
