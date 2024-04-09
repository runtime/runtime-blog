import axios from 'axios';

const KEY = '1qRS60RkX1aurXTqlK4Wv36eSRSmIiTQ2F7V1zrR';

export default axios.create({
    baseURL: 'https://r1elapy211.execute-api.us-east-1.amazonaws.com/stage',
    //baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 3000,
    // params: {
    //     key: KEY
    // },
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    },
    body: JSON.stringify('success')
})










