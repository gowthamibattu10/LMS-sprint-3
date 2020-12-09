import React, { Component } from 'react'
import BooksIssuedService from '../services/BooksIssuedService';

class ListBooksIssuedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            booksissued: []
        }
        this.addBooksIssued = this.addBooksIssued.bind(this);
        this.editBooksIssued = this.editBooksIssued.bind(this);
        this.deleteBooksIssued = this.deleteBooksIssued.bind(this);
    }

    deleteBooksIssued(issueId) {
        BooksIssuedService.deleteBooksIssued(issueId).then(res => {
            this.setState({ booksissued: this.state.booksissued.filter(booksissued => booksissued.issueId !== issueId) });
        });
    }
    viewBooksIssued(issueId) {
        this.props.history.push(`/view-booksissued/${issueId}`);
    }
    editBooksIssued(issueId) {
        this.props.history.push(`/add-booksissued/${issueId}`);
    }

    componentDidMount() {
        BooksIssuedService.getBooksIssued().then((res) => {
            this.setState({ booksissued: res.data });
        });
    }

    addBooksIssued() {
        this.props.history.push('/add-booksissued/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">BooksIssued List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addBooksIssued}> Add BooksIssued</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>IssueDate</th>
                                <th>Quantity</th>
                                <th>Duedate</th>
                                <th>User Name</th>
                                <th>Book Name</th>
                                <th>Actions</th>
                                {/* <th>User</th>
                                      <th>Books</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.booksissued.map(
                                    booksissued =>
                                        <tr key={booksissued.issueId}>
                                            <td>{booksissued.issueDate}</td>
                                            <td>{booksissued.quantity}</td>
                                            <td>{booksissued.dueDate}</td>
                                            <td>{booksissued.username}</td>
                                            <td>{booksissued.bookname}</td>
                                            <td>
                                                <button onClick={() => this.editBooksIssued(booksissued.issueId)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteBooksIssued(booksissued.issueId)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewBooksIssued(booksissued.issueId)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListBooksIssuedComponent