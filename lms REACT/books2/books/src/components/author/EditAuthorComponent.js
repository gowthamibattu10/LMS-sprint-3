import React, { Component } from 'react'
import AuthorService from "../../services/AuthorService";

class EditAuthorComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authorid: '',
            firstName: '',
            lastName: '',
            email: '',
            contactno: '',

        }
        this.saveAuthor = this.saveAuthor.bind(this);
        this.loadAuthor = this.loadAuthor.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.loadAuthor();
    }

    loadAuthor() {
        console.log(window.localStorage.getItem("authorid"));
        AuthorService.fetchAuthorById(window.localStorage.getItem("authorid"))
            .then((res) => {
                let author = res.data;

                this.setState({
                    authorid: author.authorid,
                    firstName: author.firstName,
                    lastName: author.lastName,
                    email: author.email,
                    contactno: author.contactno
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveAuthor = (e) => {
        e.preventDefault();
        let authors = {
            authorid: this.state.authorid,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            contactno: this.state.contactno
        };
        console.log(authors);
        AuthorService.editAuthor(authors, this.state.authorid)
            .then(res => {

                this.props.history.push('/author');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Book</h2>
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
                        <input type="text" placeholder="Email Address" name="email" className="form-control" value={this.state.email} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label> ContactNO: </label>
                        <input type="text" placeholder="Contact no" name="contactno" className="form-control" value={this.state.contactno} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success" onClick={this.saveAuthor}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditAuthorComponent;