'use strict';

var movieList = document.getElementById('movies');

function addMoviesList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise(function (resolve, response) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.response);
                console.log(json);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();
    });
}

// let search = 'spider man';

// getData(`http://www.omdbapi.com/?s=${search}&apikey=f21b34af`)
//     .then(movies => 
//         movies.forEach(movie => 
//             addMoviesList(movie)))
//             .catch(error => console.log(error));

// function go(num){
//     return new Promise(function(resolve,reject){
//         let delay = Math.ceil(Math.random()*3000);
//         console.log(delay);
//         setTimeout(()=>{
//             if(delay > 2000){
//                 reject(num);
//             }else{
//                 resolve(num);
//             }
//             resolve(num)
//         }, delay);
//     });
// }

// let p1 = go(1);
// let p2 = go(2);
// let p3 = go(3);

// Promise.all([p1,p2,p3])
//     .then(value => console.log(value))
//     .catch(error => console.log(error));


var batman = getData('http://www.omdbapi.com/?s=batman&apikey=f21b34af');
var superman = getData('http://www.omdbapi.com/?s=superman&apikey=f21b34af');

// batman.then(movies => 
//     movies.forEach(movie => 
//         addMoviesList(movie)))
//     .catch(error => console.log(error));

// superman.then(movies => 
//         movies.forEach(movie => 
//             addMoviesList(movie)))
//         .catch(error => console.log(error));

Promise.race([batman, superman]).then(function (movies) {
    return movies.forEach(function (movie) {
        return addMoviesList(movie);
    });
}).catch(function (error) {
    return console.log(error);
});