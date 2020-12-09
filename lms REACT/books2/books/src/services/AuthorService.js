import axios from 'axios';

const AUTHOR_API_BASE_URL = 'http://localhost:2020/author';

class AuthorService {

    fetchAuthors() {
        return axios.get(AUTHOR_API_BASE_URL + '/');
    }

    fetchAuthorById(authorId) {
        return axios.get(AUTHOR_API_BASE_URL + '/' + authorId);
    }
    deleteAuthor(authorId) {
        return axios.delete(AUTHOR_API_BASE_URL + '/' + authorId);
    }

    addAuthor(author) {
        return axios.post(AUTHOR_API_BASE_URL + '/', author);
    }

    editAuthor(author, authorId) {

        return axios.put(AUTHOR_API_BASE_URL + '/' + authorId, author);
    }

}
export default new AuthorService();
