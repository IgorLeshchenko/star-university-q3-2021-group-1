import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../style";

const SortByTopButton = () => {
    const { button} = useStyles();


  return (
      <div>
          <Button variant="outlined" className={button}>
              TOP
          </Button>
      </div>
  )};

export default SortByTopButton;
