import { create } from 'apisauce';
//import axios from 'axios';

let apiInstance; // TODO: Need to create

async function fetchData(baseURL, relURL, params={}) {
    const res = await create({baseURL}).get(relURL,params);

//    const url=baseURL+relURL;
//    const res = await axios({
//        url,
//        params, //configurable to POST - DATA
//        data: params,
//        method: 'get', //configurable to POST Aswell - use endpoint method....
//     });
   return res;
}


export default fetchData;

