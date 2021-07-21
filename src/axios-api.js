import axios from 'axios'

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'csrftoken';

const getAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    // headers:{
    //     'Access-Control-Allow-Origin' : '*',
    // },
    withCredentials: true,
    timeout: 7000,
})

export { getAPI }