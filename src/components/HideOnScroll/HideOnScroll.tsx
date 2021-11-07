import React from "react";
import { useScrollTrigger, Slide } from "@material-ui/core";

type Props = {
  children: JSX.Element;
};

const HideOnScroll: React.FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
