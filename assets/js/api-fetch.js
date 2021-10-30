
// Created a function that wraps around the fetch request
const getNew = function(){

// Fetch grabs the API data and converts it to JSON:
fetch(`https://ghibliapi.herokuapp.com/films`)
  .then(function (response) {

    console.log(response);
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })

//  If successful, the data below should generate to the DOM under the "random-art" class:
  .then(function (data) {
    const artElement = document.querySelector('.random-art');
    const randomMovie = function () {
    const movie = Math.floor(Math.random() * 21);
    
    artElement.innerHTML = `
      <article>
        <h1>${data[movie].title}</h1>
        <p>Director: ${data[movie].director}</p>
        <p>Original Release Date: ${data[movie].release_date}</p>
        <a href="${data[movie].image}"><img src="${data[movie].image}" alt="${data[movie].title}" width="400" height="600"></a>
        <h3>Click image to enlarge</h3>
        <p>Original Destription: ${data[movie].description}</p>
      </article>
      <section>
        <button type="button" class="new-movie" onclick="getNew()">Or click here for a random Ghibli!</button>
      </section>
      `
    };
    randomMovie();
    console.log(data);
  })

// If the API data isn't found, the error message below should be recieved by the user:
  .catch(function (err) {
    console.log(err);
    const artElement = document.querySelector('.random-art')
    artElement.innerHTML = `<h2>404 - Page Not Found!</h2>`
  });
}

getNew();


