import React, { Component } from 'react'
import AuthorService from "../../services/AuthorService";

class ListAuthorComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            authors: [],
            message: null
        }
        this.addAuthor = this.addAuthor.bind(this);
        this.editAuthor = this.editAuthor.bind(this);
        this.deleteAuthor = this.deleteAuthor.bind(this);
        this.reloadAuthorList = this.reloadAuthorList.bind(this);
    }

    componentDidMount() {
        this.reloadAuthorList();
    }

    reloadAuthorList() {
        AuthorService.fetchAuthors()
            .then((res) => {
                this.setState({ authors: res.data })
            });
    }

    deleteAuthor(authorid) {
        AuthorService.deleteAuthor(authorid)
            .then(res => {
                this.setState({ message: 'Author deleted successfully.' });
                this.setState({ authors: this.state.authors.filter(authors => authors.authorid !== authorid) });
            })

    }

    editAuthor(authorid) {
        window.localStorage.setItem("authorid", authorid);
        this.props.history.push('/edit-author');
    }

    addAuthor() {
        window.localStorage.removeItem("authorid");
        this.props.history.push('/add-author');
    }
    

    render() {
        return (
            <div>
                <h2 className="text-center">Author Details</h2>
                <button className="btn btn-danger" onClick={() => this.addAuthor()}> Add Author</button>
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <th> Author First Name</th>
                            <th> Author Last Name</th>
                            <th> Author Email Id</th>
                            <th> Contact no</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.authors.map(
                                author =>
                                    <tr key={author.authorid}>
                                        <td> {author.firstName} </td>
                                        <td> {author.lastName}</td>
                                        <td> {author.email}</td>
                                        <td> {author.contactno}</td>
                                        <td>

                                            <button className="btn btn-success" onClick={() => this.deleteAuthor(author.authorid)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editAuthor(author.authorid)}> Edit</button>
                                            
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListAuthorComponent;