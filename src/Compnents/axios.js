import axios from 'axios';
import {baseurl} from './constact/constact'
 console.log(baseurl)
const instance = axios.create({
     
    baseURL: baseurl,
   
  });

export default instance  