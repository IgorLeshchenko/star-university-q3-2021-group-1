import React from 'react';
import classes from './ChangeSettingsModal.module.css';

interface Props {
  active(change: boolean): void;
}

const ChangeSettingsModal = (props: Props) => {
  const change = true;
  const onHideModalHandler = () => {
    // e.preventDefault();
    return props.active(change);
  };

  return (
    <div
      onClick={onHideModalHandler}
      className={classes.change_settings_modal_wrap}
    >
      <form
        action=""
        onClick={(e) => e.stopPropagation()}
        className={classes.change_settings_form}
      >
        <h2 className={classes.change_settings_title}>Upload a new avatar</h2>
        <label htmlFor="user-avatar"></label>
        <input id="user-avatar" type="file" />
        <div>
          <button type="submit">Change avatar</button>
          <button
            onClick={onHideModalHandler}
            type="button"
            className={classes.cancel_btn}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeSettingsModal;
