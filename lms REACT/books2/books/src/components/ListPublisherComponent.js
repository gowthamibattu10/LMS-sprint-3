import React, { Component } from 'react'
import PublisherService from '../services/PublisherService'

class ListPublisherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            publishers: []
        }
        this.addPublisher = this.addPublisher.bind(this);
        this.editPublisher = this.editPublisher.bind(this);
        this.deletePublisher = this.deletePublisher.bind(this);
    }

    deletePublisher(publisherId) {
        PublisherService.deletePublisher(publisherId).then(res => {
            this.setState({ publishers: this.state.publishers.filter(publishers => publishers.publisherId !== publisherId) });
        });
    }
    viewPublisher(publisherId) {
        this.props.history.push(`/view-publisher/${publisherId}`);
    }
    editPublisher(publisherId) {
        this.props.history.push(`/add-publisher/${publisherId}`);
    }

    componentDidMount() {
        PublisherService.getPublishers().then((res) => {
            this.setState({ publishers: res.data });
        });
    }

    addPublisher() {
        this.props.history.push('/add-publisher/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Publishers List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addPublisher}> Add Publisher</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Publisher Id</th>
                                <th> Publisher Name</th>
                                <th> contactno</th>
                                <th> Email</th>
                                <th> Address1</th>
                                <th> Address2</th>
                                <th> City</th>
                                <th> State</th>
                                <th> Pincode</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.publishers.map(
                                    publishers =>
                                        <tr key={publishers.publisherId}>
                                            <td> {publishers.publisherId} </td>
                                            <td> {publishers.publisherName} </td>
                                            <td> {publishers.contactno}</td>
                                            <td> {publishers.email}</td>
                                            <td> {publishers.address1}</td>
                                            <td> {publishers.address2}</td>
                                            <td> {publishers.city}</td>
                                            <td> {publishers.state}</td>
                                            <td> {publishers.pincode}</td>
                                            <td>
                                                <button onClick={() => this.editPublisher(publishers.publisherId)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deletePublisher(publishers.publisherId)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewPublisher(publishers.publisherId)} className="btn btn-info">View </button>
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

export default ListPublisherComponent