import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@material-ui/core";

import { useImageOnLoad } from "../../hooks";
import imgNotFound from "./assets/notFound.jpg";
import { useStyles } from "./style";

const NotFound: React.FC = () => {
  const { root, img } = useStyles();
  const { handleImageOnLoad, css } = useImageOnLoad();

  return (
    <Container className={root}>
      <img
        className={img}
        src={imgNotFound}
        alt="Not found"
        onLoad={handleImageOnLoad}
        style={{ ...css.fullSize }}
      />
      <Button variant="contained" color="primary" component={Link} to="/">
        <Typography variant="button">Go to home</Typography>
      </Button>
    </Container>
  );
};

export default NotFound;
