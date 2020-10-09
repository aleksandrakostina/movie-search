const API_KEY = '9b67fc54';
const URL = `https://www.omdbapi.com`;

export function getRating(search, page = 1) {
  return fetch(URL+`/?s=${search}&page=${page}&apikey=${API_KEY}`)
  .then(response => {
    if(response.ok) {
      return response.json();
    }
  })
  .then(data => {
    return data;
  }) 
 .catch(err => {
    throw new Error(err);
 });
}

export function getResult(ImdbID) {
  fetch(URL+`/?i=${ImdbID}&apikey=${API_KEY}`)
  .then(response => {
    if(response.ok) {
      return response.json();
    }
  })
  .then(data => {
    console.log(data)
    return data;
  }) 
 .catch(err => {
    throw new Error(err);
 });
}