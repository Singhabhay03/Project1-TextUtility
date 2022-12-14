import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';


function Login() {

  const userName = localStorage.getItem ('Name') ? localStorage.getItem ('Name') : 'Abhay'
  const userPassword = localStorage.getItem ('Password') ? localStorage.getItem ('Password') : 'test123'

    const[Name, setName] = useState();
  const[Password, setPassword] = useState();
  const[message, setMessage] = useState("Please enter your username and password!");
  const navigate =useNavigate();

  function handleName (event){
    setName (event.target.value);  
}
function handlePassword (event){
  setPassword (event.target.value);  
}


const loginPage = ()=> {
  if (Name === userName && Password === userPassword){
    // setMessage('Welcome ' + Name);
    navigate('/TextForm')
    
  }
  else if (Name !== userName)
   setMessage('Username not found');
   
  else if (Password !== userPassword)
   setMessage('Password is not valid');
}

  return (
    <>
      <section className="vh-80 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: "2rem"}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-3 text-uppercase">Login</h2>
              <p className="fw-bold p-2  mb-5 bg-success text-white" >{message} </p>

              <div className="form-outline form-white mb-4">
                <input onChange={handleName} type="email" placeholder='Username' value={Name} className="form-control form-control-lg" />
              </div>

              <div className="form-outline form-white mb-4">
                <input onChange={handlePassword} type="password" placeholder='Password' value={Password} className="form-control form-control-lg" />
              </div>

              <p className="small mb-4 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button onClick ={loginPage} className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <Link to="SignUp" className="text-white-50 fw-bold">Sign Up</Link></p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default Login
