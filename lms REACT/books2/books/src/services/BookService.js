import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:2020/books';

class BookService {

    fetchBooks() {
        return axios.get(USER_API_BASE_URL + '/');
    }

    fetchBookBySubject(subject) {
        return axios.get(USER_API_BASE_URL + '/subject');
    }
    deleteBook(bookId) {
        return axios.delete(USER_API_BASE_URL + '/' + bookId);
    }

    addBook(book) {
        return axios.post(USER_API_BASE_URL + '/', book);
    }

    editBook(book, id) {
        return axios.put(USER_API_BASE_URL + '/' + id, book);
    }

}
export default new BookService();
