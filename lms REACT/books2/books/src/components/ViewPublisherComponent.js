import React, { Component } from 'react'
import PublisherService from '../services/PublisherService'

class ViewPublisherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            publisherId: this.props.match.params.publisherId,
            publishers: {}
        }
    }

    componentDidMount() {
        PublisherService.getPublisherById(this.state.publisherId).then(res => {
            this.setState({ publishers: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Publisher Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Publisher Id: </label>
                            <div> {this.state.publishers.publisherId}</div>
                        </div>
                        <div className="row">
                            <label> Publisher Name: </label>
                            <div> {this.state.publishers.publisherName}</div>
                        </div>
                        <div className="row">
                            <label> Contactno: </label>
                            <div> {this.state.publishers.contactno}</div>
                        </div>
                        <div className="row">
                            <label> Email : </label>
                            <div> {this.state.publishers.email}</div>
                        </div>
                        <div className="row">
                            <label> Address1 : </label>
                            <div> {this.state.publishers.address1}</div>
                        </div>
                        <div className="row">
                            <label> Address2 : </label>
                            <div> {this.state.publishers.address2}</div>
                        </div>
                        <div className="row">
                            <label> City : </label>
                            <div> {this.state.publishers.city}</div>
                        </div>
                        <div className="row">
                            <label> State : </label>
                            <div> {this.state.publishers.state}</div>
                        </div>
                        <div className="row">
                            <label> Pincode : </label>
                            <div> {this.state.publishers.pincode}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPublisherComponent