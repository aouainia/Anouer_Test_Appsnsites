import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Entreprise from './Entreprise/Entrepriseost';
import useStyles from './styles';

const Entreprises = ({ setCurrentId }) => {
  const entreprises = useSelector((state) => state.entreprises);
  const classes = useStyles();

  return (
    !entreprises.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {entreprises.map((entreprise) => (
          <Grid key={entreprise._id} item xs={12} sm={6} md={6}>
            <Entreprise entreprise={entreprise} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Entreprises;