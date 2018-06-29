// SELECTORS ----------------------------------------------

const nowPlaying = document.getElementById('nowPlaying');

// AJAX REQUEST & CONTENT CREATION -------------------------

function NowPlaying() {
  let queryURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
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
        nowPlaying.appendChild(movieDiv);
      }
    }
  }
  //SEND AJAX REQUEST
  xhr.send();
}

NowPlaying();
