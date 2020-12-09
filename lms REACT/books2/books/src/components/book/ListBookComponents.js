import React, { Component } from 'react'
import BookService from "../../services/BookService";

class ListBookComponents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            message: null
        }

        this.reloadBookList = this.reloadBookList.bind(this);
    }

    componentDidMount() {
        this.reloadBookList();
    }

    reloadBookList() {
        BookService.fetchBooks()
            .then((res) => {
                this.setState({ books: res.data })
            });
    }





    render() {
        return (
            <div>
                <h2 className="text-center">Book Details</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>

                            <th> title </th>
                            <th> subject </th>
                            <th>author </th>
                            <th>publisher </th>
                            <th>publishedYear </th>
                            <th>isbn_code </th>
                            <th>quantity </th>
                            <th>shelf_details </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(
                                book =>
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.subject}</td>
                                        <td>{book.authors}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.publishedYear}</td>
                                        <td>{book.isbn_code}</td>
                                        <td>{book.quantity}</td>
                                        <td>{book.shelf_details}</td>

                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListBookComponents;