import React, { Component } from 'react'
import UserService from '../services/UserService'
import { Link } from "react-router-dom"

class DeleteUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mssg: ""
        }
    }


    componentDidMount() {
        this.deleteuser();
    }



    deleteuser() {
        console.log(" Delte fun");
        UserService.delete(window.localStorage.getItem("userName"))
            .then((response) => {
                this.setState({
                    mssg: response.data
                });
                console.log(this.state.mssg);
            }).catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <h2>Your Account has been Deleted Succesfully</h2>
                <Link
                    to={"/add"}
                    className="badge badge-warning"
                >
                    GO Back
              </Link>
            </div>
        )
    }
}

export default DeleteUser;