import {
  useHistory,
  useParams
} from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

const API_URL = "https://movies-api101.herokuapp.com";
// const API_URL = "https://6125e6d32d4e0d0017b6c4f9.mockapi.io";

export function AdditionalDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/movies/` + id, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);
  console.log(movie);
  const history = useHistory();
  return (
    <div>
      <iframe
        className="youtube"
        width="885"
        height="498"
        src={movie.src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br />
      <Button
        variant="contained"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </div>
  );
}
