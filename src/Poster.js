import { useHistory } from "react-router-dom";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CardActions from "@mui/material/CardActions";
import InfoIcon from "@mui/icons-material/Info";
import { Counter } from "./Counter";


export function Poster({ name, imgs, story, rating, deleteMovie, id, editMovie }) {
  const history = useHistory();
  const [show, setShow] = useState(false);
  return (
    <div className="test">
      <Card className="box">
        <CardMedia
          component="img"
          height="422px"
          width="300px"
          image={imgs}
          alt={name} />
        <CardContent>
          <h2>
            {name}
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="Delete movie"
            >
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            <IconButton>
              <InfoIcon
                color="primary"
                onClick={() => history.push("/movies/additionalInfo/" + id)} />
            </IconButton>
            ⭐{rating}
          </h2>
          {show ? <p>{story}</p> : ""}
          <CardActions>
            <Counter /> {editMovie} {deleteMovie}
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
