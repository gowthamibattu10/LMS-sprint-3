import React, { Component } from 'react'
import FeedbackService from '../services/FeedbackService'

class ViewFeedbackComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            feedback: {}
        }
    }
    componentDidMount() {
        FeedbackService.viewFeedBackByUser(this.state.username).then(res => {
            this.setState({ feedback: res.data });
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> ViewFeedback</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> feedbackDate: </label>
                            <div> {this.state.feedback.feedbackDate}</div>
                        </div>
                        <div className="row">
                            <label> description: </label>
                            <div> {this.state.feedback.description}</div>
                        </div>
                        <div className="row">
                            <label> rating: </label>
                            <div> {this.state.feedback.rating}</div>
                        </div>
                        <div className="row">
                            <label> comments: </label>
                            <div> {this.state.feedback.comments}</div>
                        </div>
                        <div className="row">
                            <label> username: </label>
                            <div> {this.state.feedback.username}</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFeedbackComponent