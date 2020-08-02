const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { addMovie, getAllMovies, getOneMovie } = require("./queries");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors());

app.post('/api/movies', (req, res) => {
  addMovie ({title: "Legally Blonde"})
  .then((data) => {res.send(data)})
  .catch((err) => {res.sendStatus(500).send(err)})
})

app.get('/api/movies', (req, res) => {
  getAllMovies()
  .then((data) => {res.send(data)})
  .catch((err) => {res.sendStatus(500).send(err)})
})

app.get('/api/movies/:id', (req, res) => {
  getOneMovie({title: "Saving Private Ryan"})
  .then((data) => {res.send(data)})
  .catch((err) => {res.sendStatus(500).send(err)})
})

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
});