// The link for the movie

const baseInfoUrl = "https://ghibliapi.herokuapp.com/films";
const content = document.querySelector('.movies');
const movieInfo = document.querySelector('.more_info_movie');

// Feach function for feaching the info

async function fetchMovies() {
  const response = await fetch(baseInfoUrl);
  const movies = await response.json();
  console.log(movies);
  displayMovies(movies);
  return movies;
};


// Fuction display movie

async function displayMovies(movies) {
    const html = movies.map(movie => {
        return `
            <div class="movie-detail">
              <div class="information">
                <div class = "release_score">
                  <h2>${movie.title}</h2>
                  <div class="movie_data_release">${movie.release_date}</div>
                  <div class="movie_tr_score">${movie.rt_score}</div>
                </div>
                <p>${movie.description}</p>
                <ul class= "list_of_responsible">
                    <li>
                    ${movie.director}
                    </li>
                    <li>
                    ${movie.producer}
                    </li>
                </ul>
              </div>
            </div>`;
    }).join('');

    movieInfo.innerHTML = html;
}

fetchMovies();

