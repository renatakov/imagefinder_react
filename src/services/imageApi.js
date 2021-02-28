import axios from "axios";

function getFetch(query, page) {
  let key = `18650828-2cd427c2862082afea365d547`;
  let perPage = 12;

  let url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return axios.get(url).then((response) => {
    console.log(response.data.hits);
    return response.data.hits;
  });
}

export default { getFetch };
