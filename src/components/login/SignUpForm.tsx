import React from 'react';
import { useStyles } from "./LoginStyle";
import {
    Typography,
    TextField,
    Button,
} from "@material-ui/core";

interface Props{
    show(change: boolean) : void
}

const SignUpForm: React.FC<Props> = (props: Props) => {
    const classes = useStyles();

    const logInHandler = () => {
        return props.show(false);
    };

    return (
        <div className={classes.frame}>
            <h1 className={classes.header}>Sign Up</h1>
            <Typography className={classes.paragraph}>Your username is how other community members will see you.</Typography>
            <form className={classes.form} color="main">
                <TextField
                    variant="outlined"
                    label="username"
                    type="text"
                    className={classes.input}
                    color="secondary"
                    required={true}
                />
                <TextField
                    variant="outlined"
                    label="password"
                    type="text"
                    className={classes.input}
                    color="secondary"
                    required={true}
                />
                <Button
                    color="secondary"
                    variant="contained"
                    className={classes.buttonLogIn}
                >
                    Sign Up
                </Button>
            </form>
            <div className={classes.signIn}>
                <Typography className={classes.paragraph}>
                    Already a Redditloner?
                </Typography>
                <Button
                    color="secondary"
                    variant="contained"
                    className={classes.buttonSignIn}
                    onClick={logInHandler}
                >
                    Log In
                </Button>
            </div>
        </div>
    );
};

export default SignUpForm;