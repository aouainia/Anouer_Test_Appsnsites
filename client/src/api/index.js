import axios from 'axios';

const url1 = 'http://localhost:5000/employees';
const url2 = 'http://localhost:5000/entreprises';

//employees url
export const fetchEmployees = () => axios.get(url1);
export const createEmployee = (newEmployee) => axios.employee(url1, newEmployee);
export const updateEmployee = (id, updatedEmployee) => axios.patch(`${url1}/${id}`, updatedEmployee);
export const deleteEmployee = (id) => axios.delete(`${url1}/${id}`);

//entreprises url
export const fetchEntreprises = () => axios.get(url1);
export const createEntreprise = (newEntreprise) => axios.entreprise(url1, newEntreprise);
export const updateEntreprise = (id, updatedEntreprise) => axios.patch(`${url1}/${id}`, updatedEntreprise);
export const deleteEntreprise = (id) => axios.delete(`${url1}/${id}`);