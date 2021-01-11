export const SET_CURRENT_USER = "SET_CURRENT_USER";


export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const logoutUser = (dispatch) => {
    localStorage.removeItem("jwt");
    dispatch(setCurrentUser({}));
}