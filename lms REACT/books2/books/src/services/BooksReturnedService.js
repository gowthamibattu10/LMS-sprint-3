import axios from 'axios';

const BOOkSRETURNED_API_BASE_URL = "http://localhost:2020/booksreturned/";

class BooksReturnedService {

    getBooksReturned(){
        return axios.get(BOOkSRETURNED_API_BASE_URL);
    }

    createBooksReturned(booksreturned){
        return axios.post(BOOkSRETURNED_API_BASE_URL,booksreturned);
    }

    getBooksReturnedById(returnid){
        return axios.get(BOOkSRETURNED_API_BASE_URL + returnid);
    }

    updateBooksReturned(booksreturned, returnid){
        return axios.put(BOOkSRETURNED_API_BASE_URL+ returnid, booksreturned);
    }

    deleteBooksReturned(returnid){
        return axios.delete(BOOkSRETURNED_API_BASE_URL+ returnid);
    }
}

export default new BooksReturnedService ()