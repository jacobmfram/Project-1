
const apiKey = '281c7e89ab14ec4a101576aa20365488';

// AJAX REQUEST & CONTENT CREATION -------------------------

function AJAXRequest() {
  let queryURL = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`;
  // INITIALIZE AJAX REQUEST
  let xhr = new XMLHttpRequest();
  // OPEN AJAX REQUEST
  xhr.open('GET', queryURL, true);
  // FUNCTION TO RUN FOR REQUEST
  xhr.onload = function() {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      console.log(response);
      // for (let i = 0; i < 10; i++) {
      //   let gifDiv = document.createElement('div');
      //   gifDiv.innerHTML = `<img src="${response.data[i].images.fixed_height.url}"
      //   data-still="${response.data[i].images.fixed_height_still.url}"
      //   data-animate="${response.data[i].images.fixed_height.url}"
      //   state="animate" title="Rating: ${response.data[i].rating}">`;
      //   contentSection.appendChild(gifDiv);
      //   console.log(gifDiv);
      // }
    }
  }
  //SEND AJAX REQUEST
  xhr.send();
}

AJAXRequest();
