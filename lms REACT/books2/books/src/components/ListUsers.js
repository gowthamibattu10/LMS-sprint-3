import React, { Component } from 'react'
import UserService from '../services/UserService'

export class ListUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }

        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        UserService.getAll()
            .then((res) => {
                this.setState({ users: res.data })

            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users Details</h2>
                ]
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>MobileNo</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.userid}>
                                        <td>{user.userid}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.password}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobileno}</td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListUsers