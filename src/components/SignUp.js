import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const handleClick = (e) => {
    localStorage.setItem('Name', Name)
    localStorage.setItem('Email', Email)
    localStorage.setItem('Password', Password)
    localStorage.setItem('ConfirmPassword', ConfirmPassword)
    alert ("You are registered now, please click on Login !!")
    
  }

  return (
    <>
      <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-3">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    

                    <form >

                      <div className="form-outline mb-2">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={Name} onChange={e => setName(e.target.value)} />
                        <label className="form-label" for="form3Example1cg">Username</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={Email} onChange={e => setEmail(e.target.value)} />
                        <label className="form-label" for="form3Example3cg">Email</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="password" id="form3Example4cg" className="form-control form-control-lg" value={Password} onChange={e => setPassword(e.target.value)} />
                        <label className="form-label" for="form3Example4cg">Password</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input type="password" id="form3Example4cdg" className="form-control form-control-lg" value={ConfirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        <label className="form-label" for="form3Example4cdg">Confirm password</label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-3">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label className="form-check-label" for="form2Example3g">
                          I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleClick}>Register</button>
                      </div>

                      <p className="text-center text-muted mt-4 mb-0">Have already an account? <Link to="/" className="fw-bold text-body"><u>Login here</u></Link></p>

                    </form>

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

export default SignUp
