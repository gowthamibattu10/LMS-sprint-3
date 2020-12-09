import React, { Component } from 'react'
import BooksReturnedService from '../services/BooksReturnedService';

class ViewBooksReturnedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            returnid: this.props.match.params.returnid,
            booksreturned: {}
        }
    }

    componentDidMount() {
        BooksReturnedService.getBooksReturnedById(this.state.returnid).then(res => {

            this.setState({ booksreturned: res.data });
            //console.log(res.data);
        })
        //console.log(this.state.booksissued);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center" style={{ color: 'blue' }}> View BooksReturned Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> <b>ReturnedDate:</b> </label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksreturned.returnedDate}</div>
                        </div>
                        <div className="row">
                            <label> <b>Delayed_Days</b> </label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksreturned.delayed_Days}</div>
                        </div>
                        <div className="row">
                            <label> <b>Penalty</b></label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksreturned.penalty}</div>
                        </div>
                        <div className="row">
                            <label> <b>Penalty-Status</b></label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksreturned.penalty_Status}</div>
                        </div>

                        <div className="row">
                            <label> <b>User Name:</b></label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksreturned.username}</div>
                        </div>
                        <div className="row">
                            <label><b>Book Title :</b> </label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <div> {this.state.booksreturned.bookName}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewBooksReturnedComponent