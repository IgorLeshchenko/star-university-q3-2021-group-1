import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

import { useStyles } from "./style";

type Props = {
  message: any;
};

const Coments: React.FC<Props> = ({ message }) => {
  const classes = useStyles();

  const [newMessage, setNewMessage] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isToughc, setIsToughc] = useState(false);

  const showError: boolean = isEmpty && isToughc;


  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setNewMessage(event.currentTarget.value);
    setIsToughc(true);
    setIsEmpty(false);
  }

  function blurHandler() {
    setIsToughc(true);
    if (newMessage.trim().length > 0) {
      setIsEmpty(false);
    }
  }

  function clickHandler() {
    setIsToughc(true);
    if (newMessage) {
      message(newMessage);
      setIsEmpty(false);
      setNewMessage('');
    }
  }

  useEffect(() => {}, [isToughc, isEmpty, newMessage]);

  return (
    <div className={classes.wrapper}>
      <TextField
        multiline
        rows="4"
        onBlur={blurHandler}
        onChange={changeHandler}
        margin="dense"
        variant="outlined"
        placeholder="Your message"
        value={newMessage}
      />
      {showError && <p className={classes.errorMsg}>field is empty</p>}
      <Button className="addComentBtn" onClick={clickHandler} variant="contained" size="small">
        Add coment
      </Button>
    </div>
  );
};

export default Coments;
