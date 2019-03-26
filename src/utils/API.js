import axios from "axios";
const BASEURL_Start = "https://dog.ceo/api";
// for random : /breeds/image
// for breed /breed/breadname/images
export default {
  search: function(query) {
    return axios.get(BASEURL_Start + query);
  }
};
// https://dog.ceo/api/breed/Poodle/images/random