import React, { Component } from "react";
import UserService from '../services/UserService'


export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress1 = this.onChangeAddress1.bind(this);
    this.onChangeAddress2 = this.onChangeAddress2.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangePincode = this.onChangePincode.bind(this);
    
    this.saveUser = this.saveUser.bind(this);
    this.newUser= this.newUser.bind(this);

    this.state = {
      id: null,
      password: "",
      firstName: "", 
      lastName: "",
      mobileno:"",
      email:"",
      address:{
        address1:"",
        address2:"",
        city:"",
        state:"",
        pincode:""
      },
    
      submitted: false
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeMobileNumber(e) {
    this.setState({
      mobileno: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeAddress1(e) {
    this.setState(Object.assign(this.state.address,{address1:e.target.value}));
  }

  onChangeAddress2(e) {
    this.setState(Object.assign(this.state.address,{address2:e.target.value}));
  }

  onChangeCity(e) {
    this.setState(Object.assign(this.state.address,{city:e.target.value}));
  }

  onChangeState(e) {
    this.setState(Object.assign(this.state.address,{state:e.target.value}));
  }
  
  onChangePincode(e) {
    this.setState(Object.assign(this.state.address,{pincode:e.target.value}));
  }
  
  saveUser() {
    var user = {
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobileno:this.state.mobileno,
      email:this.state.email,
      address:this.state.address
    };

    console.log(user.mobileNo);
    UserService.create(user)
      .then(response => {
        this.setState({
            id:this.state.id,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobileno:this.state.mobileno,
            email:this.state.email,
            submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
        id: null,
        password: "",
        firstName: "", 
        lastName: "",
        mobileno:"",
        email:"",
        address:{
          address1:"",
          address2:"",
          city:"",
          state:"",
          pincode:""
        },
        submitted: false
      });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newUser}>
                Go Back
              </button>
            </div>
          ) : (
            <div>
  
              <div className="form-group">
                <label htmlFor="firstName">FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                  value={this.state.firstName}
                  onChange={this.onChangeFirstName}
                  name="firstName"
                />
              </div>


              <div className="form-group">
                <label htmlFor="lasttName">LastName</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                  value={this.state.lastName}
                  onChange={this.onChangeLastName}
                  name="lastName"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  required
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  name="password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobileno">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileno"
                  required
                  value={this.state.mobileno}
                  onChange={this.onChangeMobileNumber}
                  name="mobileno"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  required
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address1">Address1</label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  required
                  value={this.state.address.address1}
                  onChange={this.onChangeAddress1}
                  name="address1"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address2">Address2</label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  required
                  value={this.state.address.address2}
                  onChange={this.onChangeAddress2}
                  name="address2"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  required
                  value={this.state.address.city}
                  onChange={this.onChangeCity}
                  name="city"
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  required
                  value={this.state.address.state}
                  onChange={this.onChangeState}
                  name="state"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pincode">PinCode</label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  required
                  value={this.state.address.pincode}
                  onChange={this.onChangePincode}
                  name="pincode"
                />
              </div>

              <button onClick={this.saveUser} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}
