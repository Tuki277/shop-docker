import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', body){
    return axios({
        method: method,
        // url: `${Config.API_URL}/${endpoint}`,
        url: `http://171.244.8.156:1000/api/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })
}