import "../css/Signin.css";
import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Signin = () => {

  const [user, setUser] = useState({})
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setEmailError("")
    }

    if (e.target.name == 'password') {
      setPasswordError("")
    }
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const isValidate = (user) => {
    let isValid = true;
    if (user.email == "" || user.email == undefined || user.email == null) {
      setEmailError("Email is required")
      isValid = false;

    }

    if (user.password == "" || user.password == undefined || user.password == null) {
      setPasswordError("Password is required")
      isValid = false
    }

    if (user.email != "" && user.email != null) {
      if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        setEmailError("Invalid format")
        isValid = false
      }
    }
    return isValid
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValidate(user)) {
      console.log(user)
      // if(res.user == "Admin"){
      //   navigate("/admin")
      // }
    }

  }

   //return (
  //   <div className='container'>
  //     <table>
  //       <tr>
  //       <td rowSpan={5}>
  //         </td>
  //         <td text-align='center'>
  //     <form onSubmit={handleSubmit}>
  //       <h3>Sign In</h3>
  //       <div className="mb-3">
  //         <label>Email address</label>
  //         <input
  //           type="email"
  //           name='email'
  //           className="form-control"
  //           placeholder="Enter email"
  //           onChange={handleChange}
  //         />
  //         {emailError != "" && <p className="text-danger">{emailError}</p>}
  //       </div>
  //       <div className="mb-3">
  //         <label>Password</label>
  //         <input
  //           type="password"
  //           name='password'
  //           onChange={handleChange}
  //           className="form-control"
  //           placeholder="Enter password"
  //         />
  //         {passwordError != "" && <p className="text-danger">{passwordError}</p>}
  //       </div>
  //       <div className="mb-3">
  //         <div className="custom-control custom-checkbox">
  //           <input
  //             type="checkbox"
  //             className="custom-control-input"
  //             id="customCheck1"
  //           />
  //           <label className="custom-control-label" htmlFor="customCheck1">
  //             Remember me
  //           </label>
  //         </div>
  //       </div>
  //       <div className="d-grid">
  //         <button type="submit" onClick={handleSubmit} className="btn btn-primary">
  //           Submit
  //         </button>
  //       </div>
  //       <p className="forgot-password text-right">
  //         Forgot <a href="#">password?</a>
  //       </p>
  //     </form>
  //     </td>
  //     </tr>
  //     </table>
  //   </div>
    
  //)
  return(
    <div class="login-img">
      <div className="vh-100 d-flex">
        <div className="container w-75 m-auto ">
          <div className="row">
            <div className="col-lg-5 ms-5 ">

            </div>
            <div className="col-lg-5 log ms-5 ">
              <div className="m-auto w-75 pt-5 pb-5 align-self-center ">
                <h1
                  className="text-center fw-bold mb-3"
                  style={{ color: "#5e2e02" }}
                >
                  PurePlay.com
                </h1>
                <h1 className="text-center display-4">Login</h1>

                <form onSubmit={handleSubmit} className="row g-3 mt-3">
                  <div className="col-md-12">
                    <label for="email" class="form-label fs-5">
                      Email-ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-md-12 mt-4">
                    <label for="password" className="form-label fs-5">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                      required
                    />
                  </div>
                  {/* <div className="col-md-12 mt-5 text-center">
                    <h5 className="fs-5">
                      Not Registered??
                      <Link
                        to="/register"
                        className="text-decoration-none fs-5"
                      >
                        &nbsp; &nbsp;Register here
                      </Link>
                    </h5>
                  </div> */}
                  {/* <div class="col-md-12 mt-5 text-center">
                    <Link to="/forget" class="text-decoration-none fs-5">
                      Forgot password?
                    </Link>
                  </div> */}
                  <div class="col-md-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary ps-5 pe-5 p-2  mb-2"
                    >
                      Login
                    </button>
                    <br/>
                    <h5 >Don't have an account? Click <Link to="/signup">here</Link></h5>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin