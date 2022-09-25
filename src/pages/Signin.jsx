import "../css/Signin.css";
import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../utils/bootapi";
import swal from "sweetalert2";

const Signin = () => {

  useEffect(() => {
    document.title = "Signin";
  })
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isValidate(user)) {
      console.log(user)

      // try{
      //   axios.post(`${base_url}/token`, user).then((resp) => {
      //     console.log(resp);
      //     localStorage.setItem("userToken", resp.data.token);

      //     navigate("/user");
      //   });
      // }

      // axios.post(`${base_url}/token`, user).then(
      //   (resp) => {
      //     if (resp.data.length == 0) {
      //       swal.fire({
      //         icon: "error",
      //         title: "Oops...",
      //         text: "Wrong Credentials Entered or you have not registered yet.",
      //       });
      //     }
      //     else {
      //       localStorage.setItem("userToken", resp.data.token);
      //       localStorage.setItem("userEmail", user.email)
      //       const userDetails = axios.get(`${base_url}/api/users/getuserbyemail/${user.email}`);
      //       console.log(userDetails);


      //       //   if (response.data[0].admin == true) {
      //       //     window.location = "/admin";
      //       //     sessionStorage.setItem("admin", "admin");
      //       //   }
      //       //   // else if((localStorage.getItem("user")  null)){
      //       //   // };
      //       //   else {
      //       //     sessionStorage.setItem("username", response.data[0].name);
      //       //     const userdata = {
      //       //       name: response.data[0].name,
      //       //       email: response.data[0].email,
      //       //       city: response.data[0].city,
      //       //       phone: response.data[0].phone,
      //       //     };
      //       //     sessionStorage.setItem("userdata", JSON.stringify(userdata));
      //       //     sessionStorage.setItem("userSession", response.data[0].email);
      //       //     localStorage.setItem("user", response.data[0].email);
      //       //     cookie.save("userdata", JSON.stringify(userdata), { path: '/' });
      //       //     window.location = "/home";
      //       //   }
      //       // }
      //     }
      //   },
      //   (error) => {
      //     console.log(error);
      //     swal.fire({
      //       icon: "error",
      //       title: "Oh no!",
      //       text: "Server is down",
      //     });
      //   }
      // );

      const resp1 = await axios.post(`${base_url}/token`, user);
      console.log(resp1);
      localStorage.setItem("userToken", resp1.data.token);
      localStorage.setItem("userEmail", user.email)

      const resp2 = await axios.get(`${base_url}/api/users/getuserbyemail/${user.email}`);
      console.log(resp2);
      const userDetails = resp2.data;
      localStorage.setItem("userId", userDetails.id);
      if(userDetails.userRole.roleName === "ROLE_USER"){
        navigate("/user");
      }
      else if(userDetails.userRole.roleName === "ROLE_MANAGER"){
        navigate("/manager");
      }
      else if(userDetails.userRole.roleName === "ROLE_ADMIN"){
        navigate("/admin");
      }
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
  return (
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
                  <div class="col-md-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary ps-5 pe-5 p-2  mb-2"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                    <br />
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