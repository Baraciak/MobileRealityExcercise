import { GET_HOUSES, GET_HOUSES_SUCCESS, GET_HOUSES_FAIL } from './actionTypes';

export const getHouses = () => ({
    type: GET_HOUSES,
});

export const getHousesSuccess = (houses) => ({
    type: GET_HOUSES_SUCCESS,
    payload: houses,
});

export const getHousesFail = (error) => ({
    type: GET_HOUSES_FAIL,
    payload: error,
});
