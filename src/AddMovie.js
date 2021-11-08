import { useHistory } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovie() {
  const history = useHistory();

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieLink, setMovieLink] = useState("");
  const [rating, setRating] = useState("");

  const createMovie = (newMovie) => {
    fetch("https://6125e6d32d4e0d0017b6c4f9.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => history.push("/movies"));
  };

  const addMovie = () => {
    const newMovie = {
      name: movieName,
      poster: moviePoster,
      description: movieDescription,
      src: movieLink,
      imdb: rating,
    };
    createMovie(newMovie);
    history.push("/movies");
  };

  const styles = { margin: "1rem 0 0 1rem" };
  return (
    <div className="textCenter">
      <TextField
        label="Movie name"
        variant="outlined"
        value={movieName}
        onChange={(event) => setMovieName(event.target.value)}
        style={styles}
        className="text" />
      <br />
      <TextField
        label="Movie Poster URL"
        variant="outlined"
        value={moviePoster}
        onChange={(event) => setMoviePoster(event.target.value)}
        style={styles}
        className="text" />
      <br />
      <TextField
        label="Movie Description"
        variant="outlined"
        value={movieDescription}
        onChange={(event) => setMovieDescription(event.target.value)}
        style={styles}
        className="text" />
      <br />
      <TextField
        label="Embedded movie Link"
        variant="outlined"
        value={movieLink}
        onChange={(event) => setMovieLink(event.target.value)}
        style={styles}
        className="text" />
      <br />
      <TextField
        label="Imdb Rating"
        variant="outlined"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        style={styles}
        className="text" />
      <br />
      <Button
        onClick={addMovie}
        className="text"
        variant="contained"
        style={styles}
      >
        Add Movie
      </Button>
    </div>
  );
}
