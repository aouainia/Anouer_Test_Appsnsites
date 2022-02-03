import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteEmployee  } from '../../../actions/employees';
import useStyles from './styles';

const Employee = ({ employee, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{employee.fullname}</Typography>
        <Typography variant="h5">{employee.cin}</Typography>
      </div>
      <div className={classes.overlay2}>
       <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(employee._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
    
      <CardContent>
      <Typography className={classes.entreprise} gutterBottom variant="h5" component="h2">{employee.entreprise}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteEmployee(employee._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Employee;