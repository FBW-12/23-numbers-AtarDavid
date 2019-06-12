import { REQUEST, SUCCESS, FAILURE } from '../actions/actionTypes'

const initialState = {
    fetching: false,
    output: null,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST:
            return { ...state, fetching: true, error: null };
        case SUCCESS:
            return { ...state, fetching: false, output: action.output };
        case FAILURE:
            return { ...state, fetching: false, output: null, error: action.error };
        default:
            return state;
    }
}