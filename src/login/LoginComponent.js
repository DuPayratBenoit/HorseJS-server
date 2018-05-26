import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Paper, Typography, TextField, Button, Grid, withStyles } from '@material-ui/core';
import { AccountCircle, VpnKey } from '@material-ui/icons';
import './style.css';

const styles = theme => ({
    root: {
        marginTop: 50,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

const LoginComponent = ({ classes, login, fieldChange }) => (
    <div className={classes.root}>
        <Grid container>
            <Grid item xs />
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <div className="text-center">
                        <Typography variant="display1" align="center" gutterBottom>
                            Authentication
                        </Typography>
                    </div>
                    <Grid container>
                        <Grid item xs />
                        <Grid item xs={6}>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="username"
                                        label="Username"
                                        onChange={e => fieldChange('username', e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                    <Grid container>
                        <Grid item xs />
                        <Grid item xs={6}>
                            <Grid container spacing={8} alignItems="flex-end">
                                <Grid item>
                                    <VpnKey />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type="password"
                                        onChange={e => fieldChange('password', e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                    <Button variant="raised" color="primary" className={classes.button} onClick={login}>
                        Login
                    </Button>
                    <Link to="/register">
                        <Button variant="raised" color="primary" className={classes.button}>
                            Register
                        </Button>
                    </Link>
                </Paper>
            </Grid>
            <Grid item xs />
        </Grid>
    </div>
);

LoginComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginComponent);
