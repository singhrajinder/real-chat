 const initialState = {
    firstname: "",
    lastname:"",
    loading: false,
    email:"",
    authencated : false,
    error: null,
    uid : ""
}

const LoginReducer = (state= initialState , action)=> {
    switch(action.type){
    case "LOGIN_REQUEST" : return {
        ...state,
        loading:true,
    }

    case "LOGIN_SUCCESS" : return {
        
        ...state ,
        authencated: true,
        firstname : action.payload.firstname,
        lastname : action.payload.lastname,
        email :    action.paylod.email,
        uid :  action.payload.uid,
        loading: false,
        error: null 
    }

    case "LOGIN_FAILED" : return {
        ...state,
        authencated: false,
        error: action.payload 
    }
    default : return state
    }
   


}

export default LoginReducer