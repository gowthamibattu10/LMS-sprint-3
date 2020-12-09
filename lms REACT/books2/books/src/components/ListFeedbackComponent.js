import React, { Component } from 'react'
import FeedbackService from '../services/FeedbackService'
class ListFeedbackComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Feedback: []

        }

        // this.removeFeedback = this.removeFeedback.bind(this);
    }


    componentDidMount() {
        FeedbackService.getFeedback().then((res) => {
            this.setState({ Feedback: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Feedback List</h2>
                <div className="row">

                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> id</th>
                                <th> feedbackDate</th>
                                <th> description</th>
                                <th> comments</th>
                                <th> rating</th>
                                <th>username</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Feedback.map(
                                    feedback =>
                                        <tr key={feedback.id}>
                                            <td> {feedback.id} </td>
                                            <td> {feedback.feedbackDate} </td>
                                            <td> {feedback.description}</td>
                                            <td> {feedback.comments}</td>
                                            <td> {feedback.rating}</td>
                                            <td>{feedback.username}</td>

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

export default ListFeedbackComponent