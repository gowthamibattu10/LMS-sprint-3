import React, { Component } from 'react'
import BookService from "../../services/BookService";

class EditBookComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            subject: '',
            author: '',
            publisher: '',
            publishedYear: '',
            isbn_code: '',
            quantity: '',
            shelf_details: ''
        }
        this.saveBook = this.saveBook.bind(this);
        this.loadBook = this.loadBook.bind(this);
    }

    componentDidMount() {
        this.loadBook();
    }

    loadBook() {
        BookService.fetchBookBySubject(window.localStorage.getItem("subject"))
            .then((res) => {
                let books = res.data;
                this.setState({
                    id: books.id,
                    title: books.title,
                    subject: books.subject,
                    author: books.author,
                    publisher: books.publisher,
                    publishedYear: books.publishedYear,
                    isbn_code: books.isbn_code,
                    shelf_details: books.shelf_details

                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveBook = (e) => {
        e.preventDefault();
        let books = { id: this.state.id, title: this.state.title, subject: this.state.subject, author: this.state.author, publisher: this.state.publisher, publishedYear: this.state.publishedYear, isbn_code: this.state.isbn_code, shelf_details: this.state.shelf_details };
        BookService.editBook(books, this.state.id)
            .then(res => {
                this.setState({ message: 'Book updated successfully.' });
                this.props.history.push('/books');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Book</h2>
                <form>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" placeholder="title" name="title" className="form-control" value={this.state.title} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>subject:</label>
                        <input type="text" placeholder="subject" name="subject" className="form-control" value={this.state.password} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Author:</label>
                        <input type="text" placeholder="author" name="author" className="form-control" value={this.state.author} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>publisher:</label>
                        <input type="text" placeholder="publisher" name="publisher" className="form-control" value={this.state.publisher} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>publishedYear:</label>
                        <input type="number" placeholder="publishedYear" name="publishedYear" className="form-control" value={this.state.publishedYear} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>isbn_code</label>
                        <input type="text" placeholder="isbn_code" name="isbn_code" className="form-control" value={this.state.isbn_code} onChange={this.onChange} />
                    </div>


                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" placeholder="quantity" name="quantity" className="form-control" value={this.state.quantity} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>shelf_details</label>
                        <input type="text" placeholder="shelf_details" name="shelf_details" className="form-control" value={this.state.shelf_details} onChange={this.onChange} />
                    </div>
                    <button className="btn btn-success" onClick={this.saveBook}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditBookComponent;