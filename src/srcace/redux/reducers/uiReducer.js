import * as actionTypes from "../types"

const initialState = {
    isDarkMode: false,
};

function uiReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.SET_THEME:
            return{
                ...state,
                isDarkMode: action.payload,
            };
            default:
                return{...state,};
    }
}

export default uiReducer