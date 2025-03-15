import axios from 'axios';
import {md5} from 'js-md5';

// Your Marvel API keys
const publicKey = process.env.NUXT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.NUXT_APP_MARVEL_PRIVATE_KEY;

// Create a timestamp
const ts = new Date().getTime().toString();

// Compute MD5 hash of (ts + privateKey + publicKey)
const hash = md5(ts + privateKey + publicKey);
console.log(process.env.NUXT_APP_MARVEL_BASE_API)
// Create an Axios instance
const marvelInstance = axios.create({
    baseURL: process.env.NUXT_APP_MARVEL_BASE_API,
    params: {
        ts,
        apikey: publicKey,
        hash
    }
});

export default {
    marvelInstance
}
