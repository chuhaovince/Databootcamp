// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];


for (var i = 0; i < movieScores.length; i++) {
  function score(i) {
    return movieScores[i] > 7 ? goodMovieScores.push(movieScores[i])
         : movieScores[i] >=5 && movieScores[i] <= 7 ? okMovieScores.push(movieScores[i])
         : badMovieScores.push(movieScores[i]);
  };
  score(i);
  sum = sum + movieScores[i]
};

console.log(goodMovieScores);
console.log(okMovieScores);
console.log(badMovieScores);
console.log(sum/movieScores.length)
