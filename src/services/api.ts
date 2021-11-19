import axios from "axios";
import md5 from "md5";

const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey: any = process.env.REACT_APP_PRIVATE_KEY;

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
