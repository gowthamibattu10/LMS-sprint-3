import React, { Component } from 'react'

class operations extends Component {

  constructor(props) {
    super(props);

    this.state = {

      firstName: window.localStorage.getItem("userName"),
      status: -1,
    };
  }


  editUser(name) {
    window.localStorage.setItem("userName", this.state.firstName);
    this.props.history.push('/edit-user');
  }

  deleteUser(name) {

    window.localStorage.setItem("userName", this.state.firstName);
    this.props.history.push('/delete-user');
  }
  viewUser(name) {

    window.localStorage.setItem("userName", this.state.firstName);
    this.props.history.push('/view-user');
  }
  viewBooks() {

    this.props.history.push('/viewbooks');
  }
  givefeedback() {
    window.localStorage.setItem("userName", this.state.firstName);
    this.props.history.push('/givefeedback');
  }

  render() {
    return (
      <div >
        <button className="btn btn-success" onClick={() => this.editUser(this.state.firstName)}> Update Details
            </button>
        <br></br>
        <br></br>
        <button className="btn btn-success" onClick={() => this.deleteUser(this.state.firstName)}> Delete Account
            </button>
        <br></br>
        <br></br>
        <button className="btn btn-success" onClick={() => this.viewUser(this.state.firstName)}> View Profile
            </button><br></br>
        <br></br>
        <button className="btn btn-success" onClick={() => this.viewBooks(this.state.firstName)}> View Books
            </button><br></br><br></br>
        <button className="btn btn-success" onClick={() => this.givefeedback(this.state.firstName)}> Give feedback
           </button> </div>
    )
  }
}

export default operations