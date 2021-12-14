const intitalState =  {
     firstname: "",
     lastname:"",
     loading: false,
     email:"",
     authencated : false,
     error: null,
     uid : ""
}

const SignInReducer = (state = intitalState , action )=>{
      switch(action.type){
        case "REQUEST" : return {
            ...state , 
            loading:true
        }

        case "SUCESS" : return {
            ...state ,
            authencated : true,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname,
            email : action.payload.email,
            uid: action.payload.uid, 
            loading:false,
        
        }

        case "ERROR" : return {
          ...state ,
          error: action.payload.error,
          loading:false,
          authencated : false,
        }
        default : return state
      } 
   
}


export default SignInReducer