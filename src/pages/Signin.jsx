import "../css/Signin.css";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../utils/bootapi";
import swal from "sweetalert2";
import { NavLocation } from '../components/Header';


const Signin = () => {

  useEffect(() => {
    document.title = "Signin";
  })
  const [user, setUser] = useState({})
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmailError("")
    }

    if (e.target.name === 'password') {
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
      console.log(user);
      const resp1 = await axios.post(`${base_url}/token`, user);
      console.log(resp1);
      localStorage.setItem("userToken", resp1.data.token);
      localStorage.setItem("userEmail", user.email)

      const resp2 = await axios.get(`${base_url}/api/users/getuserbyemail/${user.email}`);
      console.log(resp2);
      const userDetails = resp2.data;
      localStorage.setItem("userId", userDetails.id);
      if (userDetails.userRole.roleName === "ROLE_USER") {
        navigate("/user");
      }
      else if (userDetails.userRole.roleName === "ROLE_MANAGER") {
        navigate("/manager");
      }
      else if (userDetails.userRole.roleName === "ROLE_ADMIN") {
        navigate("/admin");
      }
    }
  }
  
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userId");
        navigate("/", { replace: true });
    }

  return (
    <>
    <div className='headere bg-success'>
            <ul className='header-menu align-content-center justify-content-end px-5 py-md-4'>
                    <Link to="/" className="link"><li>Home</li></Link>
                    <NavLocation />
                    {localStorage.getItem("userToken") === null ? <Link to="/signin" className="link"><li>Signin</li></Link> : <Link to="/" className="link" onClick={handleLogout}><li>Logout</li></Link>}
                    <Link to="/aboutus" className="link"><li>About Us</li></Link>
                </ul>
            </div>
      <div class="login-img">
        <div className="vh-100 d-flex">
          <div className="container w-75 m-auto ">
            <div className="row ">
              <div className="col-lg-5 ms-5 ">

              </div>
              <div className="col-lg-5 log ms-5 bg-success">
                <div className="m-auto w-75 pt-5 pb-5 align-self-center ">
                  <h1
                    className="text-center fw-bold mb-3 text-light"
                    // style={{ color: "#5e2e02" }}
                  >
                    PurePlay.com
                  </h1>
                  <h1 className="text-center display-4 text-light">Login</h1>

                  <form onSubmit={handleSubmit} className="row g-3 mt-3">
                    <div className="col-md-12">
                      <label for="email" class="form-label fs-5 text-light">
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
                      <label for="password" className="form-label fs-5 text-light">
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
                        class="btn btn-lg btn-dark ps-5 pe-5 p-2  mb-2"
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                      <br />
                      <h5 className="text-light">Don't have an account? Click <Link to="/signup" className="text-light">here</Link></h5>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin