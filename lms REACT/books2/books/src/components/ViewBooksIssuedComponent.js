import React, { Component } from 'react'
import BooksIssuedService from '../services/BooksIssuedService';

class ViewBooksIssuedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //this.props.match.params.issueId,
            issueId: this.props.match.params.issueId,
            booksissued: {}
        }
    }

    componentDidMount() {
        BooksIssuedService.getBooksIssuedById(this.state.issueId).then(res => {

            this.setState({ booksissued: res.data });
            //console.log(res.data);
        })
        //console.log(this.state.booksissued);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center" style={{ color: 'blue' }}> View BooksIssued Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label><b> Issued Date:</b> </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksissued.issueDate}</div>
                        </div>
                        <div className="row">
                            <label> <b>Quantity:</b> </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksissued.quantity}</div>
                        </div>
                        <div className="row">
                            <label> <b>DueDate :</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksissued.dueDate}</div>
                        </div>
                        <div className="row">
                            <label> <b>User Name:</b> </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksissued.username}</div>
                        </div>
                        <div className="row">
                            <label> <b>Book Title:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksissued.bookname}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBooksIssuedComponent