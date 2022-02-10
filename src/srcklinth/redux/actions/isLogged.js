import * as actionTypes from "../types";

        export const isLogged = (isLogged) => async (dispatch) => {
            try {
                localStorage.setItem("isLogged", isLogged);
                 dispatch({type: actionTypes.SET_AUTH, payload: isLogged});
            
                } catch(err) {
                    console.error(err);
                }
            };

            export const logout = () => async (dispatch) => {
                try {
                     dispatch({type: actionTypes.LOG_OUT, payload: {}});
                
                    } catch(err) {
                        console.error(err);
                    }
                };