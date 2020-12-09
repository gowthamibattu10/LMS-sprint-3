import axios from 'axios';

const BOOkSISSUED_API_BASE_URL = "http://localhost:2020/booksissued/";

class BooksIssuedService {

    getBooksIssued() {
        return axios.get(BOOkSISSUED_API_BASE_URL);
    }

    createBooksIssued(booksissued) {
        return axios.post(BOOkSISSUED_API_BASE_URL, booksissued);
    }

    getBooksIssuedById(issueId) {
        return axios.get(BOOkSISSUED_API_BASE_URL + issueId);
    }

    updateBooksIssued(booksissued, issueId) {
        return axios.put(BOOkSISSUED_API_BASE_URL + issueId, booksissued);
    }

    deleteBooksIssued(issueId) {
        return axios.delete(BOOkSISSUED_API_BASE_URL + issueId);
    }
}

export default new BooksIssuedService()