import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from '../services/UserService'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.operations = this.operations.bind(this);

    this.login = this.login.bind(this);

    this.state = {

      password: "",
      firstName: "",
      status: -1,
    };
  }


  operations() {
    window.localStorage.setItem("userName", this.state.firstName);
    this.props.history.push('/operations');
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



  login() {
    var name = this.state.firstName;
    var pass = this.state.password;
    UserService.login(name, pass)
      .then(response => {
        this.setState({
          status: response.data,

        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({

      password: "",
      firstName: "",
      status: -1,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.status === -1 ? (
          <div>
            <div className="form-group">
              <label htmlFor="firstName">UserName</label>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>


            <button onClick={this.login} className="btn btn-success">
              Submit
                          </button>
          </div>
        ) : (
            <div>
              {this.state.status === 1 ? (
                <div>
                  <h4>Welcome {this.state.firstName}</h4>
                  <button className="btn btn-success" onClick={this.operations}>
                    Profile
            </button>
                </div>
              ) : (
                  <div>
                    <h4>User Registration UnSuccessfull</h4>
                    <button className="btn btn-success" onClick={this.newUser}>
                      Go Back
              </button>
                  </div>
                )}
            </div>
          )}
      </div>
    );
  }
}