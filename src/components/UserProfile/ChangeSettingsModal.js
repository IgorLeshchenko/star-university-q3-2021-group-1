import React from 'react';
import classes from './ChangeSettingsModal.module.css';

const ChangeSettingsModal = ({ active }) => {
  const test = () => {};

  return (
    <div className={classes.change_settings_modal_wrap}>
      <form action="" className={classes.change_settings_form}>
        <label htmlFor="user-avatar">Upload a new avatar</label>
        <input id="user-avatar" type="file" />
        <button onClick={test} type="submit">
          Cancel
        </button>
        <button type="submit">Change avatar</button>
      </form>
    </div>
  );
};

export default ChangeSettingsModal;
