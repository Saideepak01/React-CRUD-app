import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Poster } from "./Poster";

const API_URL = "https://movies-api101.herokuapp.com";
// const API_URL = "https://6125e6d32d4e0d0017b6c4f9.mockapi.io";

export function MovieCollections() {
  const history = useHistory();

  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(`${API_URL}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((convertedMovies) => setMovies(convertedMovies));
  };

  const deleteMovie = (id) => {
    fetch(`${API_URL}/movies/` + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getMovies());
  };
  useEffect(getMovies, []);
  return (
    <div>
      <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {movies.map((mv) => (
          <Poster
            key={mv.id}
            name={mv.name}
            imgs={mv.poster}
            story={mv.description}
            rating={mv.imdb}
            deleteMovie={<IconButton
              color="error"
              onClick={() => deleteMovie(mv.id)}
            >
              <DeleteIcon />
            </IconButton>}
            editMovie={<IconButton
              style={{ marginLeft: "auto" }}
              color="primary"
              onClick={() => history.push("/movies/editMovie/" + mv.id)}
            >
              <EditIcon />
            </IconButton>}
            id={mv.id} />
        ))}
      </section>
    </div>
  );
}