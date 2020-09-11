const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const API_CAT_REQUEST = "API_CAT_REQUEST";
const API_CAT_SUCCESS = "API_CAT_SUCCESS";
const API_CAT_FAILURE = "API_CAT_FAILURE";


const initialState = {
    fetching: false,
    dog: null,
    error: null,
    catfetching: false,
    cat: null,
    caterror: null
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, dog: action.dog };
        case API_CALL_FAILURE:
            return { ...state, fetching: false, dog: null, error: action.error };
        case API_CAT_REQUEST:
            return { ...state, catfetching: true, caterror: null }
        case API_CAT_SUCCESS:
            return { ...state, catfetching: false, cat: action.cat }
        case API_CAT_FAILURE:
            return { ...state, catfetching: false, cat: null, caterror: action.error }
        default:
            return state;
    }
}

