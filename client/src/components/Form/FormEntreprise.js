import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles';
import { createEntreprise, updateEntreprise } from '../../actions/entreprises';

const FormEntreprise = ({ currentId, setCurrentId }) => {
    const [entrepriseData, setEntrepriseData] = useState({ fullname: '', cin: '', address: '', poste: '', entreprise: '' });
    const entreprise = useSelector((state) => (currentId ? state.entreprises.find((address) => address._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (entreprise) setEntrepriseData(entreprise);
    }, [entreprise]);

    const clear = () => {
        setCurrentId(0);
        setEntrepriseData({ fullname: '', cin: '', address: '', poste: '', entreprise: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createEntreprise(entrepriseData));
            clear();
        } else {
            dispatch(updateEntreprise(currentId, entrepriseData));
            clear();
        }
    };

 
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
             <div>
                <TextField name="name" variant="outlined" label="Name"  onblur="if (this.value == '') {this.value = 'Type Letters Only';}" onfocus="if (this.value == 'Type Letters Only') {this.value = '';}" fullWidth value={entrepriseData.name} onChange={(e) => setEntrepriseData({ ...entrepriseData, name: e.target.value })} />
                <TextField name="address" variant="outlined" label="Address" fullWidth multiline rows={4} value={entrepriseData.address} onChange={(e) => setEntrepriseData({ ...entrepriseData, address: e.target.value })} />
                </div>
                <div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </div>           
            </form>
        </Paper>
    );
};

export default FormEntreprise;