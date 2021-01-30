import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/shop-cart-d0315/us-central1/api'
});

export default instance;