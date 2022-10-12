const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.des&api_key=60a23d17752e09d68bf7b538e9292802&page=4';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=60a23d17752e09d68bf7b538e9292802&query="'

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results);
}


function showMovies(movies){

    main.innerHTML = '';

    movies.forEach(movie => {

        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');

        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" srcset="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
                ${overview}
        </div>
    
          `
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }

}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})