import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Employees from './components/Employees/Employees';
import FormEmployee from './components/Form/FormEmployee';
import { getEmployees } from './actions/employees';
import useStyles from './styles';
import anouer_aouainia from './images/anouer_aouainia.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getEmployees());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Test technique de Anouer Aouainia a Appsnsites</Typography>
        <img className={classes.image} src={anouer_aouainia} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Employees setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormEmployee currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;