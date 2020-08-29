// The link for the movie

const baseInfoUrl = "https://ghibliapi.herokuapp.com/films";
const content = document.querySelector('.movies');
const movieInfo = document.querySelector('.more_info_movie');

// Fetch function for fetching the info

async function fetchMovies() {
  const response = await fetch(baseInfoUrl);
  const movies = await response.json();
  console.log(movies);
  displayMovies(movies);
  return movies;
};


// Fuction display movie

function displayMovies(movies) {
  const rank = movies.sort(function rank(x, y) {
     return y.rt_score - x.rt_score
    });
    const html = rank.map(movie => {
        return `
            <div class="movie-detail">
              <div class="information">
                <div class = "release_score">
                  <h2>${movie.title}</h2>
                  <div class="movie_data_release">${movie.release_date}</div>
                  <div class="movie_tr_score">${movie.rt_score}</div>
                </div>
                <p class="description">${movie.description}</p>
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



