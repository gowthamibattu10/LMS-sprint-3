import React, { Component } from 'react'
import FeedbackService from '../services/FeedbackService'

class CreateFeedbackComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            feedbackDate: '',
            description: '',
            rating: '',
            comments: '',
            username: '',
            status: true
        }
        this.saveFeedback = this.saveFeedback.bind(this);
    }

    saveFeedback = (e) => {
        e.preventDefault();

        let feedback = {
            feedbackDate: this.state.feedbackDate,
            description: this.state.description,
            rating: this.state.rating,
            comments: this.state.comments,
            username: window.localStorage.getItem("userName")
        };

        FeedbackService.writeFeedback(feedback).then(res => {
            this.setState({ status: false });
            console.log(res);
        });
    }


    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });


    goback() {
        this.props.history.push('/operations');
    }

    render() {
        return (
            <div>
                {this.state.status ? (
                    <div>
                        <h2 className="text-center">Add Feedback</h2>

                        <div className="form-group">
                            <label> feedbackDate: </label>
                            <input placeholder="FeedbackDate" name="feedbackDate" className="form-control"
                                value={this.state.feedbackDate} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label> description: </label>
                            <input placeholder="description" name="description" className="form-control"
                                value={this.state.description} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label> rating: </label>
                            <input placeholder="rating" name="rating" className="form-control"
                                value={this.state.rating} onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label> comments: </label>
                            <input placeholder="comments" name="comments" className="form-control"
                                value={this.state.comments} onChange={this.onChange} />
                        </div>


                        <button onClick={this.saveFeedback} className="btn btn-success">
                            Submit
              </button>
                    </div>
                ) : (
                        <div>
                            <h2>Your Feedback is Succesfully Added</h2>
                            <button className="btn btn-success" onClick={() => this.goback()}> Go Back</button>
                        </div>
                    )}
            </div>
        );
    }
}

export default CreateFeedbackComponent;