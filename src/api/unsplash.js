import axios from "axios";

const UNSPLASH_ACCESS_KEY = "2Ki88sVoms33y2TLex-bdJDLD5VmnsV81hotMu9rlww";
export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
});
