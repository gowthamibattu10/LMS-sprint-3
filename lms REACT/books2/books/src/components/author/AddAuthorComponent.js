import React, { Component } from 'react'
import AuthorService from "../../services/AuthorService";

class AddAuthorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            contactno: ''
        }
        this.saveAuthor = this.saveAuthor.bind(this);

    }

    saveAuthor = (e) => {
        e.preventDefault();
        let author = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            contactno: this.state.contactno
        };
        AuthorService.addAuthor(author)
            .then(res => {
                this.setState({ message: 'Author added successfully.' });
                this.props.history.push('/author/');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
                    <div className="form-group">
                        <label> First Name: </label>
                        <input type="text" placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label> Email Id: </label>
                        <input type="text" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label> ContactNo: </label>
                        <input type="text" placeholder="contactno" name="contactno" className="form-control" value={this.state.contactno} onChange={this.onChange} />
                    </div>
                    <button className="btn btn-success" onClick={this.saveAuthor}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddAuthorComponent;