import React, { Component } from 'react'
import UserService from '../services/UserService'
import { Link } from "react-router-dom"

class viewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            password: "",
            firstName: "",
            lastName: "",
            mobileNo: "",
            email: "",
            address: null,
            state: false
        }
    }


    componentDidMount() {
        this.viewuser();
    }



    viewuser() {

        UserService.getbyname(window.localStorage.getItem("userName"))
            .then((response) => {
                this.setState({
                    id: response.data.userid,
                    password: response.data.password,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    mobileNo: response.data.mobileno,
                    email: response.data.email,
                    address: response.data.address,
                    status: true
                });
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            });
    }
    goback() {
        this.props.history.push('/operations');
    }

    render() {
        return (

            <div>
                {this.state.status ? (
                    <div>
                        <h6>Id         :   {this.state.id}</h6>
                        <h6>FirstName  :   {this.state.firstName}</h6>
                        <h6>LastName   :   {this.state.lastName}</h6>
                        <h6>Password   :   {this.state.password}</h6>
                        <h6>Email      :   {this.state.email}</h6>
                        <h6>MobileNo   :   {this.state.mobileNo}</h6>
                        <h6>Address1   :   {this.state.address.address1}</h6>
                        <h6>Address2   :   {this.state.address.address2}</h6>
                        <h6>City       :   {this.state.address.city}</h6>
                        <h6>State      :   {this.state.address.state}</h6>
                        <h6>PinCode    :   {this.state.address.pincode}</h6>

                        <button className="btn btn-success" onClick={() => this.goback()}> Go Back</button>
                    </div>
                ) : (
                        <div></div>
                    )}
            </div>
        )
    }
}

export default viewUser;