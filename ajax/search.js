// SELECTORS ----------------------------------------------

const form = document.getElementById('form');
const contentSection = document.getElementById('content-section');

// APIKEY & SEARCH ----------------------------------------

let value = '';

// AJAX REQUEST & CONTENT CREATION -------------------------

function AJAXRequest() {
  let queryURL = `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${apiKey}&language=en-US&page=1&include_adult=false&append_to_response=images&include_image_language=en,null`;
  // INITIALIZE AJAX REQUEST
  let xhr = new XMLHttpRequest();
  // OPEN AJAX REQUEST
  xhr.open('GET', queryURL, true);
  // FUNCTION TO RUN FOR REQUEST
  xhr.onload = function() {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      let results = response.results;
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        let movieDiv = document.createElement('div');
        movieDiv.className = 'movieItems';
        movieDiv.innerHTML = '<img src="https://image.tmdb.org/t/p/w200/' + response.results[i].poster_path + '">' + '<br>';
        movieDiv.innerHTML += response.results[i].title + '<br>';
        movieDiv.innerHTML += response.results[i].release_date + '<br>';
        movieDiv.innerHTML += response.results[i].overview + '<br>';
        movieDiv.innerHTML += response.results[i].vote_average;
        contentSection.appendChild(movieDiv);
      }
    }
  }
  //SEND AJAX REQUEST
  xhr.send();
}

function removePrevSearches() {
  while (contentSection.firstElementChild) {
    contentSection.removeChild(contentSection.firstElementChild);
  }
}

// LISTENERS -------------------------------------------------------------
// Runs request for searched items and stores previous searches in footer

form.addEventListener('submit', (event) => {
  event.preventDefault();
  removePrevSearches();
  value = document.getElementById('search').value;
  AJAXRequest();
});
