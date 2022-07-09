import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

export default function DirectorCardPage(props) {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div" director={props.name}>
            {`${props.name}`}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            age={props.movies}
          >
            <h3>Movies: </h3>
          </Typography>
        </CardContent>
      </Card>
      <hr />
    </div>
  );
}
