import axios from "axios";

const BASE_URL = (url) => `http://localhost:3000/${url}`;



const get = async (url, headers) => {
    const res = await axios.get(BASE_URL(url), { headers });
    return res.data;
}

export {
    get
}