import React, { Component } from 'react'
import BookOrderService from '../services/BookOrderService';

class ListBookOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            booksorder: []
        }
        this.addBookOrder = this.addBookOrder.bind(this);
        this.editBookOrder = this.editBookOrder.bind(this);
        this.deleteBookOrder = this.deleteBookOrder.bind(this);
    }

    deleteBookOrder(orderid) {
        BookOrderService.deleteBookOrder(orderid).then(res => {
            this.setState({ booksorder: this.state.booksorder.filter(booksorder => booksorder.orderid !== orderid) });
        });
    }
    viewBookOrder(orderid) {
        this.props.history.push(`/view-booksorder/${orderid}`);
    }
    editBookOrder(orderid) {
        this.props.history.push(`/add-booksorder/${orderid}`);
    }

    componentDidMount() {
        BookOrderService.getBookOrder().then((res) => {
            this.setState({ booksorder: res.data });
        });
    }

    addBookOrder() {
        this.props.history.push('/add-booksorder/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Books Order List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addBookOrder}> Add Books Order</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>

                                <th>Quantity</th>
                                <th>orderDate</th>
                                <th>orderStatus</th>
                                <th>Actions</th>
                                {/* 
                                      <th>Books</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.booksorder.map(
                                    booksorder =>
                                        <tr key={booksorder.orderid}>
                                            <td>{booksorder.quantity}</td>
                                            <td>{booksorder.orderDate}</td>
                                            <td>{booksorder.orderStatus}</td>
                                            {/*
                                                 <td>{bookissued.books}</td> */}
                                            <td>
                                                <button onClick={() => this.editBookOrder(booksorder.orderid)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteBookOrder(booksorder.orderid)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewBookOrder(booksorder.orderid)} className="btn btn-info">View </button>
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

export default ListBookOrderComponent