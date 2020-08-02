const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movieListApp', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

const movieSchema = new mongoose.Schema({
  title: {type: String, unique: true}
})

const Movie = mongoose.model('Movie', movieSchema);

const addMovie = (movieObj) => {
  const newMovie = new Movie(movieObj);
  return newMovie.save()
          .catch((err) => {console.log("error adding movie to db: ", err)});
}

const getAllMovies = () => {
  return Movie.find({})
          .catch((err) => {console.log("error getting movies from db: ", err)})
}

const getOneMovie = (movieObj) => {
  return Movie.find({title: movieObj.title})
          .catch((err) => {console.log("error getting one movie from db: ", err)})
}

module.exports = {
  addMovie,
  getAllMovies,
  getOneMovie,
}