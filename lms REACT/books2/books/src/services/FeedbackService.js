import axios from 'axios';
const Feedback_API_BASE_URL =  "http://localhost:2020/feedback/";

class FeedbackService
{
    getFeedback()
    {
       return axios.get(Feedback_API_BASE_URL);
    }
    writeFeedback(feedback){
        return axios.post(Feedback_API_BASE_URL, feedback);
    }

   updateFeedback(feedback,id)
    {
        return axios.put(Feedback_API_BASE_URL + id, feedback);
    }
    viewFeedBackByUser(username)
    {
    return axios.get(Feedback_API_BASE_URL  + username);
    }
}
export default new FeedbackService()