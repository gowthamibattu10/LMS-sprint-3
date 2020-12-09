import React, { Component } from 'react';
import BooksReturnedService from '../services/BooksReturnedService';

class CreateBooksReturnedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            returnid: this.props.match.params.returnid,
            returnedDate: '',
            delayed_Days: '',
            penalty: '',
            penalty_Status: '',
            username: '',
            bookName: ''
        }
        this.onChange = this.onChange.bind(this);
        // this.onChangeObj=this.onChangeObj.bind(this);
        // this.onChangeObj1=this.onChangeObj1.bind(this);
        this.saveOrUpdateBooksReturned = this.saveOrUpdateBooksReturned.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.returnid === '_add') {
            return
        } else {
            BooksReturnedService.getBooksReturnedById(this.state.returnid).then((res) => {
                let booksreturned = res.data;
                this.setState({
                    returnedDate: booksreturned.returnedDate,
                    delayed_Days: booksreturned.delayed_Days,
                    penalty: booksreturned.penalty,
                    penalty_Status: booksreturned.penalty_Status,
                    username: booksreturned.username,
                    bookName: booksreturned.bookName
                });
            });
        }
    }
    saveOrUpdateBooksReturned = (e) => {
        e.preventDefault();
        let booksreturned = {
            returnedDate: this.state.returnedDate,
            delayed_Days: this.state.delayed_Days,
            penalty: this.state.penalty,
            penalty_Status: this.state.penalty_Status,
            username: this.state.username,
            bookName: this.state.bookName
        };
        console.log('booksreturned => ' + JSON.stringify(booksreturned));

        // step 5
        if (this.state.returnid === '_add') {
            BooksReturnedService.createBooksReturned(booksreturned).then(res => {
                this.props.history.push('/booksreturned');
            });
        } else {
            BooksReturnedService.updateBooksReturned(booksreturned, this.state.returnid).then(res => {
                this.props.history.push('/booksreturned');
            });
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    // onChangeObj=(e)=>this.setState(Object.assign(this.state.users,{[e.target.name]:e.target.value}));
    // onChangeObj1=(e)=>this.setState(Object.assign(this.state.books,{[e.target.name]:e.target.value}));


    cancel() {
        this.props.history.push('/booksreturned');
    }

    getTitle() {
        if (this.state.returnid === '_add') {
            return <h3 className="text-center">Add BooksReturned</h3>
        } else {
            return <h3 className="text-center">Update BooksReturned</h3>
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
                                        <label>ReturnedDate:</label>
                                        <input placeholder="ReturnedDate" name="returnedDate" className="form-control" value={this.state.returnedDate} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Delayed_Days</label>
                                        <input placeholder="Delated_Days" name="delayed_Days" className="form-control" value={this.state.delayed_Days} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Penalty</label>
                                        <input placeholder="Delated_Days" name="penalty" className="form-control" value={this.state.penalty} onChange={this.onChange} />
                                    </div>


                                    <div className="form-group">
                                        <label>Penalty_Status</label>
                                        <input placeholder="Penalty_Status" name="penalty_Status" className="form-control" value={this.state.penalty_Status} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input placeholder="UserName" name="username" className="form-control" value={this.state.username} onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Books</label>
                                        <input name="bookName" className="form-control" value={this.state.bookName} onChange={this.onChange} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateBooksReturned}>Save</button>
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



export default CreateBooksReturnedComponent