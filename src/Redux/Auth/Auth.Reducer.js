import { USER_SIGN_OUT, USER_SIGN_IN } from "./Auth.Type";

const initialState = {
    currentUser: null,
    isAuthenticated: false,
};

const AuthReducer =(state =initialState ,{type, payload})=>{
    switch (type){
        case USER_SIGN_IN:
            return{
                ...state,
                isAuthenticated: true,
                currentUser :{
                    photoURL : payload.photoURL,
                    displayName: payload.displayName,
                    email: payload.email,
                    uid: payload.uid,
                }
            }
        case USER_SIGN_OUT:
            return{
                isAuthenticated: false,
            }
        default:
        return state
    }   
}