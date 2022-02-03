import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getEntreprises = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEntreprises();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createEntreprise = (entreprise) => async (dispatch) => {
  try {
    const { data } = await api.createEntreprise(entreprise);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateEntreprise = (id, entreprise) => async (dispatch) => {
  try {
    const { data } = await api.updateEntreprise(id, entreprise);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteEntreprise = (id) => async (dispatch) => {
  try {
    await api.deleteEntreprise(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};