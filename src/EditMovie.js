import {
  useHistory,
  useParams
} from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function EditMovie() {
  const { id } = useParams();
  const history = useHistory();

  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieLink, setMovieLink] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetch("https://6125e6d32d4e0d0017b6c4f9.mockapi.io/movies/" + id, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => {
        setMovieName(mv.name);
        setMoviePoster(mv.poster);
        setMovieDescription(mv.description);
        setMovieLink(mv.src);
        setRating(mv.imdb);
      });
  }, [id]);

  const editMovie = () => {
    const editedMovie = {
      name: movieName,
      poster: moviePoster,
      description: movieDescription,
      src: movieLink,
      imdb: rating,
    };

    updateMovie(editedMovie);
  };

  const updateMovie = (editedMovie) => {
    fetch("https://6125e6d32d4e0d0017b6c4f9.mockapi.io/movies/" + id, {
      method: "PUT",
      body: JSON.stringify(editedMovie),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => history.push("/movies"));
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
        onClick={editMovie}
        className="text"
        variant="contained"
        style={styles}
      >
        Add Movie
      </Button>
    </div>
  );
}
