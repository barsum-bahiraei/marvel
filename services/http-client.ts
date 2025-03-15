import axios from 'axios';
import {md5} from 'js-md5';

// Your Marvel API keys
const publicKey = 'c3ac34542679cab826549b77e23984bb';
const privateKey = '939928c1c45a4a60a10e3f735160c2e393db88be';

// Create a timestamp
const ts = new Date().getTime().toString();

// Compute MD5 hash of (ts + privateKey + publicKey)
const hash = md5(ts + privateKey + publicKey);

// Create an Axios instance
const marvelInstance = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash
    }
});

export default {
    marvelInstance
}
