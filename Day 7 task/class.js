// Define the Movie class
class Movie {
  // Constructor to set the properties
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  // Method to get only PG-rated movies
  static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
  }
}

// Create an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Test the getPG method
const movies = [
  new Movie("The Lion King", "Disney", "G"),
  new Movie("Jurassic Park", "Universal", "PG-13"),
  new Movie("Finding Nemo", "Pixar", "G"),
  new Movie("The Incredibles", "Pixar", "PG")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);