import React, { Component } from 'react'
import BooksReturnedService from '../services/BooksReturnedService';

class ListBooksReturnedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            booksreturned: []
        }
        this.addBooksReturned = this.addBooksReturned.bind(this);
        this.editBooksReturned = this.editBooksReturned.bind(this);
        this.deleteBooksReturned = this.deleteBooksReturned.bind(this);
    }

    deleteBooksReturned(returnid) {
        BooksReturnedService.deleteBooksReturned(returnid).then(res => {
            this.setState({ booksreturned: this.state.booksreturned.filter(booksreturned => booksreturned.returnid !== returnid) });
        });
    }
    viewBooksReturned(returnid) {
        this.props.history.push(`/view-booksreturned/${returnid}`);
    }
    editBooksReturned(returnid) {
        this.props.history.push(`/add-booksreturned/${returnid}`);
    }

    componentDidMount() {
        BooksReturnedService.getBooksReturned().then((res) => {
            this.setState({ booksreturned: res.data });
        });
    }

    addBooksReturned() {
        this.props.history.push('/add-booksreturned/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">BooksReturned List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addBooksReturned}> Add BooksReturned</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>ReturnedDate:</th>
                                <th>Delayed_Days</th>
                                <th>Penalty</th>
                                <th>Penality_Status</th>
                                <th>User Email</th>
                                <th>Book Title</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.booksreturned.map(
                                    booksreturned =>
                                        <tr key={booksreturned.returnid}>
                                            <td>{booksreturned.returnedDate}</td>
                                            <td>{booksreturned.delayed_Days}</td>
                                            <td>{booksreturned.penalty}</td>
                                            <td>{booksreturned.penalty_Status}</td>
                                            <td>{booksreturned.username}</td>
                                            <td>{booksreturned.bookName}</td>
                                            <td>
                                                <button onClick={() => this.editBooksReturned(booksreturned.returnid)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "8px" }} onClick={() => this.deleteBooksReturned(booksreturned.returnid)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewBooksReturned(booksreturned.returnid)} className="btn btn-info">View </button>
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

export default ListBooksReturnedComponent