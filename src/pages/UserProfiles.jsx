import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import base_url from '../utils/bootapi';

const UserProfiles = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        getUserDetails();
    }, []);
    const getUserDetails= async () => {
        const userDetails = await axios.get(`${base_url}/api/users/getuser/${localStorage.getItem("userId")}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
        });
        console.log(userDetails);
        setUser(userDetails.data);
    }
    const inputChangeHandler = (e) => {
        const newUser = { ...user, [e.target.name]: e.target.value };
        setUser(newUser);
      };
    const updateUser = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(user);
        const updatedUserDetails = await axios.put(`${base_url}/api/users/updateuser/${localStorage.getItem("userId")}`, user, {
            headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
        });
        console.log(updatedUserDetails);
        if(updatedUserDetails !== null ){
            Swal
                .fire({
                    icon: "success",
                    title: "Hurreh!!!",
                    text: "You have updated Profile successfully",
                })
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oh no!",
                text: "Update Unsuccessful",
            });
        }
    }
    return (
        <div>
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right">

                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <h4 class="text-right">User Profile</h4>
                            <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="profile pic"/>
                            <span class="font-weight-bold">{user.name}</span>
                            <span class="text-black-50">{user.email}</span>
                        </div>
                    </div>
                    <div class="col-md-4 border-right">
                        <div class="p-3 py-5">
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels m-1">Name</label><input type="text" class="form-control" placeholder="first name" name="name" value={user.name} onChange={inputChangeHandler}/></div>
                                <div class="col-md-12"><label class="labels m-1">Password</label><input type="password" class="form-control" placeholder="enter password" name="password" value={user.password} onChange={inputChangeHandler} disabled/></div>
                                {/* <div class="col-md-12"><label class="labels m-1">Confirm Password</label><input type="password" class="form-control" placeholder="enter password" name="confpassword" value={user.password} onChange={inputChangeHandler}/></div> */}
                                <div class="col-md-12"><label class="labels m-1">Email</label><input type="email" class="form-control" placeholder="enter email" name="email" value={user.email} disabled/></div>
                                <div class="col-md-12"><label class="labels m-1">Contact No.</label><input type="number" class="form-control" placeholder="enter contact no" name="contactNo" value={user.contactNo} onChange={inputChangeHandler}/></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 border-right">
                        <div class="p-3 py-5">
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels m-1">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" name="address1" value={user.address1} onChange={inputChangeHandler}/></div>
                                <div class="col-md-12"><label class="labels m-1">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" name="address2" value={user.address2} onChange={inputChangeHandler}/></div>
                                <div class="col-md-12"><label class="labels m-1">City</label><input type="text" class="form-control" placeholder="enter city" name="city" value={user.city} onChange={inputChangeHandler}/></div>
                                <div class="col-md-12"><label class="labels m-1">State</label><input type="text" class="form-control" placeholder="enter state" name="state" value={user.state} onChange={inputChangeHandler}/></div>
                                <div class="col-md-12"><label class="labels m-1">Pincode</label><input type="number" class="form-control" placeholder="enter pincode" name="pincode" value={user.pincode} onChange={inputChangeHandler}/></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={updateUser}>Save Profile</button></div>
                </div>
            </div >
        </div >
    );
};

export default UserProfiles;