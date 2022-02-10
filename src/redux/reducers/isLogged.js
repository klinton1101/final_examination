import * as actionTypes from "../types";

const initialState ={
isLogged: "",
active: false,


error: null,
};

function authReducer(state=initialState, action) {

    switch(action.type) {
                 case actionTypes.SET_AUTH:
                return {
                    ...state,
                    isLogged: action.payload,
                    active: true,
                    
                };
                case actionTypes.LOG_OUT:
                    return {
                        ...state,
                        isLogged: "",
                        active: false,
                    };

            default:
                return {
                    ...state,
                };
    }



  
   
    

}

export default authReducer;