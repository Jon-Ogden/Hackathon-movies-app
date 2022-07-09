import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

export default function DirectorCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" director={props.director}>
          Director
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" age={props.age}>
          age:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="DirectorFilmography">
          Filmography
        </Button>
        <Button href="">See Directed Movies</Button>
      </CardActions>
    </Card>
  );
}
