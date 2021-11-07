import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";


export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(disLike + 1);

  const styles = {
    color: "black",
  };

  return (
    <div>
      <IconButton style={styles} onClick={incrementLike} aria-label="like">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        style={styles}
        onClick={incrementDisLike}
        aria-label="dislike"
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
