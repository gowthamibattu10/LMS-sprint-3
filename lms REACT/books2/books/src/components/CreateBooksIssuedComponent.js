import React, { Component } from 'react'
import BooksIssuedService from '../services/BooksIssuedService';


class CreateBooksIssuedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            issueId: this.props.match.params.issueId,
            issueDate: '',
            quantity: '',
            dueDate: '',
            username: '',
            bookname: ''
        }

        this.saveOrUpdateBooksIssued = this.saveOrUpdateBooksIssued.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.issueId === '_add') {
            return
        } else {
            BooksIssuedService.getBooksIssuedById(this.state.issueId).then((res) => {
                let booksissued = res.data;
                this.setState({
                    issueDate: booksissued.issueDate,
                    quantity: booksissued.quantity,
                    dueDate: booksissued.dueDate,
                    username: booksissued.users,
                    bookname: booksissued.bookname
                });
            });
        }
    }
    saveOrUpdateBooksIssued = (e) => {
        e.preventDefault();
        let booksissued = {
            issueDate: this.state.issueDate,
            quantity: this.state.quantity,
            dueDate: this.state.dueDate,
            username: this.state.username,
            bookname: this.state.bookname
        };
        console.log('booksissued => ' + JSON.stringify(booksissued));

        // step 5
        if (this.state.issueId === '_add') {
            BooksIssuedService.createBooksIssued(booksissued).then(res => {
                this.props.history.push('/booksissued');
            });
        } else {
            BooksIssuedService.updateBooksIssued(booksissued, this.state.issueId).then(res => {
                this.props.history.push('/booksissued');
            });
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    cancel() {
        this.props.history.push('/booksissued');
    }

    getTitle() {
        if (this.state.issueId === '_add') {
            return <h3 className="text-center">Add BooksIssued</h3>
        } else {
            return <h3 className="text-center">Update BooksIssued</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>IssueDate:</label>
                                        <input placeholder="IssueDate" name="issueDate" className="form-control" value={this.state.issueDate} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input placeholder="Quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>DueDate</label>
                                        <input placeholder="DueDate" name="dueDate" className="form-control" value={this.state.dueDate} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>UserName</label>
                                        <input name="username" className="form-control" value={this.state.username} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>BookName</label>
                                        <input name="bookname" className="form-control" value={this.state.bookname} onChange={this.onChange} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateBooksIssued}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateBooksIssuedComponent