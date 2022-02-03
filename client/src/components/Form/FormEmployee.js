import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { FixedSizeList as List } from 'react-window';


import useStyles from './styles';
import { createEmployee, updateEmployee } from '../../actions/employees';

const FormEmployee = ({ currentId, setCurrentId }) => {
    const [employeeData, setEmployeeData] = useState({ fullname: '', cin: '', address: '', poste: '', entreprise: '' });
    const employee = useSelector((state) => (currentId ? state.employees.find((address) => address._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (employee) setEmployeeData(employee);
    }, [employee]);

    const clear = () => {
        setCurrentId(0);
        setEmployeeData({ fullname: '', cin: '', address: '', poste: '', entreprise: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createEmployee(employeeData));
            clear();
        } else {
            dispatch(updateEmployee(currentId, employeeData));
            clear();
        }
    };

    // la fonction onekeydown-> alphaOnly pour les alphabets
    //  pour le cin type="number"
    //pour le poste liste déroulante (Agent, Cadre, CEO) j'ai importer fixedsizelist et j'ai choisi list
    //la fonction modification c'est au niveau de <form></form>
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <div>
                <TextField name="fullname" variant="outlined" label="Fullname" onkeydown="return alphaOnly(fullname);" onblur="if (this.value == '') {this.value = 'Type Letters Only';}" onfocus="if (this.value == 'Type Letters Only') {this.value = '';}" fullWidth value={employeeData.fullname} onChange={(e) => setEmployeeData({ ...employeeData, fullname: e.target.value })} />
                <TextField name="cin" variant="outlined" label="Cin" type="number" fullWidth value={employeeData.cin} onChange={(e) => setEmployeeData({ ...employeeData, cin: e.target.value })} />
                <TextField name="address" variant="outlined" label="Address" fullWidth multiline rows={4} value={employeeData.address} onChange={(e) => setEmployeeData({ ...employeeData, address: e.target.value })} />
                <List>{poste} </List>
                <List>{entreprise} </List>
                </div>
                <div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    );
};

export default FormEmployee;