import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import logo from './images/logo.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';

function App() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={logo} alt="social CRUD" width="17%"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={  4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;