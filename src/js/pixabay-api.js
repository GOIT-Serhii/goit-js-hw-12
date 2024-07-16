import axios from 'axios';


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = "44781960-4338c4c6360104e4623fadff2";



axios.defaults.baseURL = BASE_URL;

function getPictures({q = "", page = 1, pageSize = 20, imageType = 'photo', orientation = 'horizontal', safeSearch = 'true' } = {}) {


return axios
        .get('', {
                params: {
                        key: API_KEY,
                        q,
                        page,
                        per_page: pageSize,
                        image_type: imageType,
                        orientation,
                        safesearch: safeSearch
                }
        })
        .then(({ data }) => data);
}


export { getPictures }
