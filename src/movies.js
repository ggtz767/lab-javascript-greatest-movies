// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrOfMovies) {
 return arrOfMovies.map(function (arrOfMovies){return arrOfMovies.director})
   
 };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if(movies.length === 0){
    return 0;
  } else {
    const spiel = movies.filter(function(movie) {
      if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
        return movie        
      }
    })
    return spiel.length
  } 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(arr.length === 0){
    return 0
  }
  let sum = 0;
  for(let i =0; i < arr.length;i++){
    if(arr[i].score === ''){
      return arr.length-1
    }    
    sum += arr[i].score
  }
  let avg = +((sum/arr.length).toFixed(2))
  return avg
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) { 
  let dramaMovies = [];
  for(let i =0 ; i < arr.length; i++){
    if(arr[i].genre.includes('Drama')){
      dramaMovies.push(arr[i])
    
    }
  }
  const dramaArr = dramaMovies
  if(dramaArr.length === 0){
    return 0
  }
  let score = 0;
  for(let i =0; i < dramaArr.length;i++){
    if(dramaArr[i].score === ''){
      return dramaArr.length-1
    }    
    score += dramaArr[i].score
  }
  let avg = +((score/dramaArr.length).toFixed(2))
  return avg
  // return dramaMovies.score.reduce(function(acc,curr){
  //  return +((acc + curr)/dramaMovies.length)
//  })
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  let orderedbyYear = arr.sort((a, b) => {
    return a.year - b.year
  })
  .map(x => {
    return x
  })
  .sort((a, b) => {
    if (a.year == b.year) {
      if(a.title < b.title) { 
        // console.log("A: ",a.title)
        // console.log("B: ", b.title)
        return -1; 
      }
    }
  // return 0;
  })

return orderedbyYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  // // if(arr.length < 20) {
  //   return arr
  // }
  let newvariable = [...arr]
  let abcOrderr = newvariable.sort((a,b) => {
  // let titleA=a.title, titleB=b.title
  console.log
  if (a.title < b.title){
    console.log()
    return -1 
  }
  if (a.title > b.title){
    return 1
  }
    return 0
  })
  console.log(abcOrderr)
  let result = abcOrderr.map((task) => task.title);
  console.log(result)
  // let emptyarr = [];
  // for(let i =0; i < abcOrderr.length; i++){
  // emptyarr.push(abcOrderr[i].title)
  // }
  const size = 20
  const finalarr = result.slice(0,size)
  // console.log(finalarr)
  return finalarr
}
 



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
