// SELECTORS ----------------------------------------------

const nowPlaying = document.getElementById('nowPlaying');

// BOOTSTRAP SELECTORS ------------------------------------

const moviePoster = document.getElementById('movie-poster');
const movieTitle = document.getElementById('movie-title');
const movieOverview = document.getElementById('movie-overview');
const releaseDate = document.getElementById('release-date');
const movieVotes = document.getElementById('movie-votes');

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
        movieDiv.className = 'card';
        movieDiv.style = 'width: 18rem;';
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


// <div class="card" style="width: 18rem;">
//   <img id="movie-poster" class="card-img-top" src="">
//   <div class="card-body">
//     <h5 id="movie-title" class="card-title">test</h5>
//     <p id="movie-overview" class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li id="release-date" class="list-group-item">Release Date:</li>
//     <li id="movie-votes" class="list-group-item">Votes Average:</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Find Tickets</a>
//     <a href="#" class="card-link">See Reviews</a>
//   </div>
