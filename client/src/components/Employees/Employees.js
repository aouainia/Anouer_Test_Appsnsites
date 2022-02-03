import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Employee from './Employee/Employeeost';
import useStyles from './styles';

const Employees = ({ setCurrentId }) => {
  const employees = useSelector((state) => state.employees);
  const classes = useStyles();

  return (
    !employees.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {employees.map((employee) => (
          <Grid key={employee._id} item xs={12} sm={6} md={6}>
            <Employee employee={employee} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Employees;