import axios from 'axios';

export default axios.create({
    //baseURL: 'https://:aws:execute-api:us-east-1:926079816406:9dvbmeoem1/*/OPTIONS/',
    baseURL: 'https://vbnglcslnf.execute-api.us-east-1.amazonaws.com/prod',
    //baseURL: 'https://y5rgcm8zd0.execute-api.us-east-1.amazonaws.com/test/pets',
    //baseURL: 'https://6zjcsl5iid.execute-api.us-east-1.amazonaws.com/WhiskeyAPIStaging/',
    //baseURL: 'https://jsonplaceholder.typicode.com/posts',
    timeout: 3000,
    // params: {
    //      Key: {'itemId': 'id'}
    // },
    // headers: {
    //     "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    //     "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    //     "Access-Control-Allow-Origin": "*",
    // },
     body: JSON.stringify('success')
})

//THIS VERSION IS THE WORKING HELLO PUT AND HAS NO HEADER
//
// import axios from 'axios';
//
// export default axios.create({
//     //baseURL: 'https://:aws:execute-api:us-east-1:926079816406:9dvbmeoem1/*/OPTIONS/',
//     baseURL: 'https://9dvbmeoem1.execute-api.us-east-1.amazonaws.com/prod/',
//     //baseURL: 'https://y5rgcm8zd0.execute-api.us-east-1.amazonaws.com/test/pets',
//     //baseURL: 'https://6zjcsl5iid.execute-api.us-east-1.amazonaws.com/WhiskeyAPIStaging/',
//     //baseURL: 'https://jsonplaceholder.typicode.com/posts',
//     timeout: 3000,
//     // params: {
//     //      Key: {'itemId': 'id'}
//     // },
//     // headers: {
//     //     "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
//     //     "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
//     //     "Access-Control-Allow-Origin": "*",
//     // },
//     body: JSON.stringify('success')
// })
//
//
//
//
//THIS VERSION WORKS PERFECTLY WITH PUBLIC API USES GET AND HAS A HEADER
//
//import axios from 'axios';

//const KEY = '1qRS60RkX1aurXTqlK4Wv36eSRSmIiTQ2F7V1zrR';

// export default axios.create({
//     // baseURL: 'https://r1elapy211.execute-api.us-east-1.amazonaws.com/stage',
//     baseURL: 'https://jsonplaceholder.typicode.com/',
//     timeout: 3000,
//     // params: {
//     //     key: KEY
//     // },
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify('success')
// })