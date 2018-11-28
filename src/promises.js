'use strict';

let movieList = document.getElementById('movies');

function addMoviesList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise(function(resolve, response){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function(){
            if(xhr.status === 200){
                let json = JSON.parse(xhr.response);
                console.log(json);
                resolve(json.Search);
            }else{
                reject(xhr.statusText);
            }
        };
    
        xhr.onerror = function(error){
            reject(error)
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



let batman =  getData('http://www.omdbapi.com/?s=batman&apikey=f21b34af')
let superman = getData('http://www.omdbapi.com/?s=superman&apikey=f21b34af');

// batman.then(movies => 
//     movies.forEach(movie => 
//         addMoviesList(movie)))
//     .catch(error => console.log(error));

// superman.then(movies => 
//         movies.forEach(movie => 
//             addMoviesList(movie)))
//         .catch(error => console.log(error));

Promise.race([batman, superman])
    .then(movies => 
        movies.forEach(movie => 
            addMoviesList(movie)))
    .catch(error => console.log(error));