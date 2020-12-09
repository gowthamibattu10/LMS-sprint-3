import React, { Component } from 'react'
import BookOrderService from '../services/BookOrderService';

class ViewBookOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            orderid: this.props.match.params.orderid,
            booksorder: {}
        }
    }

    componentDidMount() {
        BookOrderService.getBookOrderById(this.state.orderid).then(res => {

            this.setState({ booksorder: res.data });
        })

    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Books OrderDetails</h3>
                    <div className="card-body">

                        <div className="row">
                            <label> Quantity: </label>
                            <div> {this.state.booksorder.quantity}</div>
                        </div>
                        <div className="row">
                            <label> OrderDate: </label>
                            <div> {this.state.booksorder.orderDate}</div>
                        </div>
                        <div className="row">
                            <label> OrderStatus :</label>
                            <div> {this.state.booksorder.orderStatus}</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBookOrderComponent