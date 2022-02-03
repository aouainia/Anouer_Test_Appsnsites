import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteEntreprise  } from '../../../actions/entreprises';
import useStyles from './styles';

const Entreprise = ({ entreprise, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{entreprise.name}</Typography>
      </div>
      
      <div className={classes.overlay2}>
      <Typography variant="body2">{entreprise.address}</Typography>
      </div>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteEntreprise(entreprise._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Entreprise;