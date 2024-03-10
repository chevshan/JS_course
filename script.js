"use strict";

const numberOfFilms = prompt("Скок посмотрел? ;)", "да");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt("Какой фильм последний Вы смотрели?", "");
const lastMovieRating = prompt("И как Вам?", "");

const movies = {
    lastMovie: {}
}
movies.lastMovie = lastMovieRating;

console.log(movies.lastMovie);