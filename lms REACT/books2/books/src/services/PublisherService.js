import axios from 'axios';

const PUBLISHER_API_BASE_URL = "http://localhost:2020/publishers/";

class PublisherService {

    getPublishers(){
        return axios.get(PUBLISHER_API_BASE_URL);
    }

    createPublisher(publishers){
        return axios.post(PUBLISHER_API_BASE_URL, publishers);
    }

    getPublisherById(publisherId){
        return axios.get(PUBLISHER_API_BASE_URL + publisherId);
    }

    updatePublishers(publishers, publisherId){
        return axios.put(PUBLISHER_API_BASE_URL  + publisherId, publishers);
    }

    deletePublisher(publisherId){
        return axios.delete(PUBLISHER_API_BASE_URL  + publisherId);
    }
}

export default new PublisherService()