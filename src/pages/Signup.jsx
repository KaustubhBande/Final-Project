import "../css/Signin.css";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import base_url from "../utils/bootapi";

const SignUp = () => {

  useEffect(() => {
    document.title = "Signup";
  })
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    contactNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: 0,
    userRole: {
      roleId: 1
    }
  })
  const [nameError, setNameError] = useState("");
  const [ContactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [Address1Error, setAddress1Error] = useState("");
  const [Address2Error, setAddress2Error] = useState("");
  const [CityError, setCityError] = useState("");
  const [StateError, setStateError] = useState("");
  const [PincodeError, setPincodeError] = useState("");

  const handleChange = (e) => {

    if (e.target.name === 'name') {
      setNameError("")
    }

    if (e.target.name === 'contactNo') {
      setContactError("")
    }

    if (e.target.name === 'email') {
      setEmailError("")
    }

    if (e.target.name === 'password') {
      setPasswordError("")
    }

    if (e.target.name === 'confirmpassword') {
      setConfirmPasswordError("")
    }

    if (e.target.name == 'address1') {
      setAddress1Error("")
    }

    if (e.target.name == 'address2') {
      setAddress2Error("")
    }

    if (e.target.name == 'city') {
      setCityError("")
    }

    if (e.target.name == 'state') {
      setStateError("")
    }

    if (e.target.name == 'pincode') {
      setPincodeError("")
    }

    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const isValidate = (user) => {
    let isValid = true;

    if (user.name == "" || user.name == undefined || user.name == null) {
      setNameError("Name required");
      isValid = false;
    }

    if (user.name != "" || user.name != null) {
      if (!isNaN(user.name)) {
        setNameError("Name is Invalid");
        isValid = false;
      }
    }

    if (user.email == "" || user.email == undefined || user.email == null) {
      setEmailError("Email required");
      isValid = false;
    }

    if (user.email != "" || user.email != null) {
      if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        setEmailError("Invalid Email format");
        isValid = false;
      }
    }

    if (user.contactNo == "" || user.contactNo == undefined || user.contactNo == null) {
      setContactError("Contact Is required");
      isValid = false;
    }

    if (user.contactNo != "" || user.contactNo != null) {
      if (! /^\d{10}$/.test(user.contactNo)) {
        setContactError("Invalid Contact Number");
        isValid = false;
      }
    }

    if (user.password == "" || user.password == undefined || user.password == null) {
      setPasswordError("Password required");
      isValid = false;
    }

    if (user.password != "" || user.password != null) {
      if (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(user.password)) {
        setPasswordError("Invalid format");
        isValid = false;
      }
    }

    if (user.confirmPassword == "" || user.password == undefined || user.password == null) {
      setConfirmPasswordError("Confirm Password required");
      isValid = false;
    }

    if (user.confirmPassword != "" || user.confirmPassword != null) {
      if (user.confirmPassword !== user.password) {
        setConfirmPasswordError("Password doesn't match, Type again");
        isValid = false;
      }
    }

    if (user.address1 == "" || user.address1 == undefined || user.address1 == null) {
      setAddress1Error("Address1 is required");
      isValid = false;
    }

    if (user.address1 != "" || user.address1 != null) {
      if (!isNaN(user.address1)) {
        setAddress1Error("Address1 is Invalid");
        isValid = false;
      }
    }

    if (user.address2 == "" || user.address2 == undefined || user.address2 == null) {
      setAddress2Error("Address2 is required");
      isValid = false;
    }

    if (user.address2 != "" || user.address2 != null) {
      if (!isNaN(user.address2)) {
        setAddress2Error("Address2 is Invalid");
        isValid = false;
      }
    }

    if (user.city == "" || user.city == undefined || user.city == null) {
      setCityError("City is required");
      isValid = false;
    }

    if (user.city != "" || user.city != null) {
      if (!isNaN(user.city)) {
        setCityError("City is Invalid");
        isValid = false;
      }
    }

    if (user.state == "" || user.state == undefined || user.state == null) {
      setStateError("State is required");
      isValid = false;
    }

    if (user.state != "" || user.state != null) {
      if (!isNaN(user.state)) {
        setStateError("State is Invalid");
        isValid = false;
      }
    }

    if (user.pincode == "" || user.pincode == undefined || user.pincode == null) {
      setPincodeError("Pincode is required");
      isValid = false;
    }

    if (user.pincode != "" || user.state != null) {
      if (!/^\d{6}$/.test(user.pincode)) {
        setPincodeError("Pincode is Invalid");
        isValid = false;
      }
    }
    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isValidate(user)) {
      console.log("pass");
      console.log(user);
      const resp = await axios.get(`${base_url}/api/users/getuserbyemail/${user.email}`);
      if (resp.data.id === null) {
        Swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Email ID already present, try Signing up with different email ID.",
        });
      }
      else {
        const resp2 = await axios.post(`${base_url}/api/users/adduser`, user);
        console.log(resp2);
        Swal.fire({
          icon: "success",
          title: "Congrats!!!",
          text: "You have signed up successfully",
        });
        navigate("/signin");
      }
    }
  }

  return (
    <div className="login-img ">
      <div style={{ marginTop: 100 }}>
        <div style={styles.containers} className="bg-success text-light">

          <div className="mb-3 bg-success text-light">
            <h3 style={{ textAlign: "center", marginBottom: 50 }}>SignUp</h3>
          </div>
        </div>
        <br />
        <br />

        <div style={styles.container} className="bg-success text-light" >
          <div className="mb-3">
            <label>Name</label>
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              className="form-control"
            />
            {nameError != "" && <p className="text-warning">{nameError}</p>}
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control"
              required
            />
            {emailError != "" && <p className="text-warning">{emailError}</p>}
          </div>

          <div className="mb-3">
            <label>Contact</label>
            <input
              type="number"
              name="contactNo"
              value={user.contactNo}
              onChange={handleChange}
              className="form-control"
            />
            {ContactError != "" && <p className="text-warning">{ContactError}</p>}
          </div>

          <div className="mb-3">
            <label>Address1</label>
            <input
              type="text"
              name="address1"
              value={user.address1}
              onChange={handleChange}
              className="form-control"
            />
            {Address1Error != "" && <p className="text-warning">{Address1Error}</p>}
          </div>

          <div className="mb-3">
            <label>Address2</label>
            <input
              type="text"
              name="address2"
              value={user.address2}
              onChange={handleChange}
              className="form-control"
            />
            {Address2Error != "" && <p className="text-warning">{Address2Error}</p>}
          </div>

          <div className="mb-3">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleChange}
              className="form-control"
            />
            {CityError != "" && <p className="text-warning">{CityError}</p>}
          </div>

          <div className="mb-3">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={user.state}
              onChange={handleChange}
              className="form-control"
            />
            {StateError != "" && <p className="text-warning">{StateError}</p>}
          </div>

          <div className="mb-3">
            <label>Pincode</label>
            <input
              type="number"
              name="pincode"
              value={user.pincode}
              onChange={handleChange}
              className="form-control"
            />
            {PincodeError != "" && <p className="text-warning">{PincodeError}</p>}
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="form-control"
            ></input>
            {passwordError != "" && <p className="text-warning">{passwordError}</p>}
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              className="form-control"
            ></input>
            {confirmPasswordError != "" && <p className="text-warning">{confirmPasswordError}</p>}
          </div>

          <div className="mb-3" >
            <button
              onClick={handleSubmit}
              className="btn btn-dark"
              type="submit"
              style={styles.signinButton}
            >
              SignUp
            </button>
            <br /><br /><br />
            <h5 >Already have an account? Click <Link to="/signin" className="text-light">here</Link></h5>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignUp;

const styles = {
  containers: {
    backgroundColor: "#f3a81d",
    // color:"white",
    width: 600,
    height: 80,
    padding: 20,
    position: "relative",
    top: 0,
    left: 300,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#db0f62",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  container: {
    backgroundColor: "#f3a81d",
    // color:"white",
    width: 600,
    height: "auto",
    padding: 20,
    position: "relative",
    top: 0,
    left: 300,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#db0f62",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  signinButton: {
    position: "relative",
    width: "100%",
    height: 40,
    // backgroundColor: "#1F60F0",
    // color: "#eee",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};