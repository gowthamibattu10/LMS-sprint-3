import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:2020/booksorder/";

class BookOrderService {

    getBookOrder() {
        return axios.get(ORDER_API_BASE_URL);
    }

    createBookOrder(booksorder) {
        return axios.post(ORDER_API_BASE_URL, booksorder);
    }
    getBookOrderById(orderid) {
        return axios.get(ORDER_API_BASE_URL + orderid);
    }

    updateBookOrder(booksorder, orderid) {
        return axios.put(ORDER_API_BASE_URL + orderid, booksorder);
    }

    deleteBookOrder(orderid) {
        return axios.delete(ORDER_API_BASE_URL + orderid);
    }

}
export default new BookOrderService();