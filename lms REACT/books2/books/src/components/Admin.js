import React, { Component } from 'react'

export class Admin extends Component {
    Book() {
        this.props.history.push('/books');
    }
    Author() {
        this.props.history.push('/author');
    }
    Publisher() {
        this.props.history.push('/publishers');
    }
    viewallUsers() {
        this.props.history.push('/ListUsers');
    }
    BookOrder() {
        this.props.history.push('/booksorder');
    }
    feedback() {
        this.props.history.push('/listfeedback');
    }
    bookIssued() {
        this.props.history.push('/booksissued');
    }
    bookReturned() {
        this.props.history.push('/booksreturned');
    }


    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={() => this.Publisher()}> Publisher</button><br /><br />
                <button className="btn btn-success" onClick={() => this.Author()}> Author</button><br /><br />
                <button className="btn btn-success" onClick={() => this.viewallUsers()}> View All Users</button><br /><br />
                <button className="btn btn-success" onClick={() => this.BookOrder()}> BookOrder</button><br /><br />
                <button className="btn btn-success" onClick={() => this.feedback()}> Feedback Details</button><br /><br />
                <button className="btn btn-success" onClick={() => this.bookIssued()}> BookIssued</button><br></br><br></br>
                <button className="btn btn-success" onClick={() => this.bookReturned()}> BookReturned</button><br/><br/>
                <button className="btn btn-success" onClick={() => this.Book()}> Book</button><br /><br />
            </div>
        )
    }
}

export default Admin
