import React from "react";
import { useStyles } from "./ChangeSettingsModalStyles";
import { theme } from "./ChangeSettingsModalStyles";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

interface Props {
  active(change: boolean): void;
}

const ChangeSettingsModal: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const change = true;
  const onHideModalHandler = () => {
    // e.preventDefault();
    return props.active(change);
  };

  return (
    <ThemeProvider theme={theme}>
      <div onClick={onHideModalHandler} className={classes.change_settings_modal_wrap}>
        <form action="" onClick={e => e.stopPropagation()} className={classes.change_settings_form}>
          <h2 className={classes.change_settings_title}>Upload user avatar</h2>

          <Button
            variant="contained"
            component="label"
            className={classes.change_settings_form_input}>
            Сhoose new avatar
            <input type="file" hidden />
          </Button>

          <div>
            <Button
              color="secondary"
              className={classes.change_settings_form_btns}
              type="submit"
              variant="contained">
              Change avatar
            </Button>

            <Button
              onClick={onHideModalHandler}
              type="button"
              variant="contained"
              className={classes.cancel_btn + " " + classes.change_settings_form_btns}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default ChangeSettingsModal;
