'use strict';

var movieList = document.getElementById('movies');

function addMoviesList(movie) {
    var img = document.createElement('img');
    img.stc = movie.Poster;
    movieList.appendChild(img);
}

function getData(url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var json = JSON.parse(xhr.response);
            console.log(json);
            done(json.Search);
        } else {
            console.log(xhr.statusText);
        }
    };

    xhr.onerror = function (error) {
        console.log(error);
    };

    xhr.send();
}

var search = 'spider man';

getData('http://www.omdbapi.com/?s=' + search, function (movies) {
    movies.forEach(function (movie) {
        addMoviesList(movie);
    });
});