import React from "react";
import { CircularProgress } from "@material-ui/core";

import { useStyles } from "./styles";

const Loader: React.FC = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
