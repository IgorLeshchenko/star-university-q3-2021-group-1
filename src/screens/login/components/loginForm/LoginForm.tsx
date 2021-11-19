import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import useInput from "../../../../app/hooks/useInput";
import { postUser } from "../../../../app/store/auth/thunks";

import logo from "../../pictures/logo.png";
import { useStyles } from "../../style";

interface Props {
  show(change: boolean): void;
  onSubmit(e: React.SyntheticEvent): void;
}

const LoginForm: React.FC<Props> = ({ show, onSubmit }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    formWrapperFormInput,
    formWrapper,
    cornerFigure,
    formTextWrapper,
    animationWrapper,
    logoWrapper,
    heading,
    formWrapperFormButton,
    signUpWrapper,
    signUpButton,
    firstCircle,
    secondCircle,
    thirdCircle,
    fourthCircle,
    fifthCircle,
    sixthCircle,
    seventhCircle,
    eighthCircle,
    ninthCircle,
    animationWrapperItem,
    animationWrapperItemInner,
    formLabel,
    animationMainWrapper,
    invalid,
    errorMessage,
    inputWrapper,
    signUpButtonsWrapper,
    signUpButtonHelper,
    toAllPostsButton,
    textBlock,
  } = useStyles();

  const signInHandler = () => show(true);

  const {
    value: enteredUserName,
    isValid: enteredUserNameIsValid,
    hasError: userNameInputHasError,
    valueChangeHandler: userNameChangedHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserNameInput,
  } = useInput((value: string) => value.trim().length > 1);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value: string) => value.trim().length > 7);

  let formIsValid = false;

  if (enteredUserNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!enteredUserNameIsValid && !enteredPassword) {
      return;
    }

    dispatch(
      // @ts-ignore
      postUser({ username: event.target[0].value, password: event.target[1].value }),
    );
    history.push("/star-university-q3-2021-group-1");

    resetUserNameInput();
    resetPasswordInput();
  };

  const userNameInputClasses = userNameInputHasError
    ? `${formWrapperFormInput} ${invalid}`
    : `${formWrapperFormInput}`;

  const passwordInputClasses = passwordInputHasError
    ? `${formWrapperFormInput} ${invalid}`
    : `${formWrapperFormInput}`;

  return (
    <div className={formWrapper}>
      <div className={cornerFigure}></div>
      <div className={formTextWrapper}>
        <div className={logoWrapper}>
          <img src={logo} alt="logo" width="100" height="100" />
        </div>
        <div>
          <h2 className={heading}>We've Missed You!</h2>
        </div>

        <form onSubmit={formSubmissionHandler}>
          <div className={inputWrapper}>
            <label htmlFor="username" className={formLabel}>
              Your username:
            </label>
            <input
              type="text"
              id="username"
              className={userNameInputClasses}
              placeholder="username *"
              onChange={userNameChangedHandler}
              onBlur={userNameBlurHandler}
              value={enteredUserName}
              required
            />
            {userNameInputHasError && <div className={errorMessage}>Name must not be empty</div>}
          </div>
          <div className={inputWrapper}>
            <label htmlFor="password" className={formLabel}>
              Your password:
            </label>
            <input
              type="password"
              id="password"
              className={passwordInputClasses}
              placeholder="password *"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
              required
            />
            {passwordInputHasError && (
              <div className={errorMessage}>Password must be at least 8 characters</div>
            )}
          </div>
          <Button
            variant="contained"
            className={formWrapperFormButton}
            type="submit"
            disabled={!formIsValid}>
            Log In
          </Button>
        </form>
        <div className={signUpWrapper}>
          <div>
            <h3 className={heading}>New to Reditlone?</h3>
          </div>
          <div className={signUpButtonsWrapper}>
            <Button
              variant="contained"
              className={`${signUpButton} ${signUpButtonHelper}`}
              onClick={signInHandler}>
              Sign Up
            </Button>
            <div className={textBlock}>OR</div>
            <Button
              variant="contained"
              component={Link}
              to="/star-university-q3-2021-group-1"
              className={`${signUpButton} ${toAllPostsButton}`}>
              Go back to all posts
            </Button>
          </div>
        </div>
      </div>
      <div className={animationMainWrapper}>
        <ul className={animationWrapper}>
          <li className={animationWrapperItem}>
            <span className={`${animationWrapperItemInner} ${firstCircle}`}></span>
          </li>
          <li className={animationWrapperItem}></li>
          <li className={animationWrapperItem}>
            <span className={`${animationWrapperItemInner} ${secondCircle}`}></span>
          </li>
          <li className={animationWrapperItem}>
            <span className={`${animationWrapperItemInner} ${thirdCircle}`}></span>
          </li>
          <li className={animationWrapperItem}>
            <span className={`${animationWrapperItemInner} ${fourthCircle}`}></span>
          </li>
          <li className={animationWrapperItem}>
            <span className={`${animationWrapperItemInner} ${fifthCircle}`}></span>
          </li>
          <li className={animationWrapperItem}>
            <span className={`${animationWrapperItemInner} ${sixthCircle}`}></span>
          </li>
          <li className={animationWrapperItem}>
            <span className={`${animationWrapperItemInner} ${seventhCircle}`}></span>
          </li>
          <li className={animationWrapperItem}>
            <span className={`${animationWrapperItemInner} ${eighthCircle}`}></span>
          </li>
          <li className={animationWrapperItem}>
            <span className={`${animationWrapperItemInner} ${ninthCircle}`}></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginForm;
