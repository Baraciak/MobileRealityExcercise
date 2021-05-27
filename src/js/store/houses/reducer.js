import { GET_HOUSES_SUCCESS, GET_HOUSES_FAIL } from './actionTypes';

const INIT_STATE = {
    houses: [],
    total: 0,
};

const Houses = (state = INIT_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case GET_HOUSES_SUCCESS:
            return {
                ...state,
                houses: action?.payload,
            };

        case GET_HOUSES_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default Houses;
