import React, { Component } from 'react'
import PublisherService from '../services/PublisherService';

class CreatePublisherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            publisherId: this.props.match.params.publisherId,
            publisherName: '',
            contactno: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            pincode: ''
        }

        this.saveOrUpdatePublishers = this.saveOrUpdatePublishers.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.publisherId === '_add') {
            return
        } else {
            PublisherService.getPublisherById(this.state.publisherId).then((res) => {
                let publishers = res.data;
                this.setState({
                    publisherName: publishers.publisherName,
                    contactno: publishers.contactno,
                    email: publishers.email,
                    address1: publishers.address1,
                    address2: publishers.address2,
                    city: publishers.city,
                    state: publishers.state,
                    pincode: publishers.pincode
                });
            });
        }
    }
    saveOrUpdatePublishers = (e) => {
        e.preventDefault();
        let publishers = { publisherName: this.state.publisherName, contactno: this.state.contactno, email: this.state.email, address1: this.state.address1, address2: this.state.address2, city: this.state.city, state: this.state.state, pincode: this.state.pincode };
        console.log('publishers => ' + JSON.stringify(publishers));

        // step 5
        if (this.state.publisherId === '_add') {
            PublisherService.createPublisher(publishers).then(res => {
                this.props.history.push('/publishers');
            });
        } else {
            PublisherService.updatePublishers(publishers, this.state.publisherId).then(res => {
                this.props.history.push('/publishers');
            });
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    cancel() {
        this.props.history.push('/publishers');
    }

    getTitle() {
        if (this.state.publisherId === '_add') {
            return <h3 className="text-center">Add Publisher</h3>
        } else {
            return <h3 className="text-center">Update Publisher</h3>
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
                                        <label> Publisher Name: </label>
                                        <input placeholder="Publisher Name" name="publisherName" className="form-control"
                                            value={this.state.publisherName} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Contactno: </label>
                                        <input placeholder="Contactno" name="contactno" className="form-control"
                                            value={this.state.contactno} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email : </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address1 : </label>
                                        <input placeholder="address1" name="address1" className="form-control"
                                            value={this.state.address1} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address2 : </label>
                                        <input placeholder="address2" name="address2" className="form-control"
                                            value={this.state.address2} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> City : </label>
                                        <input placeholder="city" name="city" className="form-control"
                                            value={this.state.city} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> State : </label>
                                        <input placeholder="state" name="state" className="form-control"
                                            value={this.state.state} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label> Pincode : </label>
                                        <input placeholder="pincode" name="pincode" className="form-control"
                                            value={this.state.pincode} onChange={this.onChange} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdatePublishers}>Save</button>
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

export default CreatePublisherComponent