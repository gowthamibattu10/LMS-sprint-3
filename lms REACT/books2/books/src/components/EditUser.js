import React, { Component } from 'react'
import UserService from '../services/UserService'

class EditUser extends Component {

    constructor(props){
        super(props);
        this.state ={
            userid: 0,
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
            status: true
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
        this.onChangeAddress1 = this.onChangeAddress1.bind(this);
        this.onChangeAddress2 = this.onChangeAddress2.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangePincode = this.onChangePincode.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        UserService.getbyname(window.localStorage.getItem("userName"))
            .then((response) => {
              
                this.setState({
                userid: response.data.userid,
                password: response.data.password,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                mobileno: response.data.mobileno,
                email:response.data.email,
                address:response.data.address
                })
                console.log(response.data);
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

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

    saveUser = (e) => {
        e.preventDefault();
        var user = {
            userid:this.state.userid,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobileno:this.state.mobileno,
            email:this.state.email,
            address:this.state.address
          };
          console.log(user.userid);
        UserService.update(user)
            .then(res => {
                this.setState({status : false});
                console.log(res);
            });
    }

    goback(){
      window.localStorage.setItem("userName", this.state.firstName);
      this.props.history.push('/operations');
    }

    render() {
        return (
            <div>
               {this.state.status ? (
                 <div>
                <h2 className="text-center">Update User Details</h2>
  
              <div className="form-group">
                <label htmlFor="firstName">FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                  value={this.state.firstName}
                  onChange={this.onChange}
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
                  onChange={this.onChange}
                  name="lastName"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  value={this.state.password}
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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
              ):(
                <div>
                   <h2>Your Account Details Has Been Succesfully Updated</h2>
                   <button className="btn btn-success" onClick={() => this.goback()}> Go Back</button>
                </div>
             )}
            </div>
        );
    }
}

export default EditUser;