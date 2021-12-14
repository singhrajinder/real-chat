
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"




export const signUp = (data)=>{
  const auth = firebase.auth();
  const db = firebase.firestore();
   
    return  async (dispath)=>{
           auth.createUserWithEmailAndPassword(data.email,data.password).then((user)=>{ 
            const currentUser=  auth.currentUser;
            const name = `${data.firstname} ${data.lastname}`;
            currentUser.updateProfile({
                displayName:name,
            }).then(()=>{
              db.collection('users').add({
                  firstname:data.firstname,
                  lastname:data.lastname,
                  uid: user.user.uid,
                  email: data.email,
                  createdAt: new Date(),
                  
              }).then(()=>{
                  const loginUser = {
                    firstname:data.firstname,
                    lastname:data.lastname,
                    uid: user.user.uid,
                    email: data.email
                  }
                  localStorage.setItem("users", JSON.stringify(loginUser));
                  dispath({
                    type: "SUCESS",
                    payload:loginUser
                  })
              }).catch((error)=>{
                dispath({
                 type:"FAILED",
                 payload : error
                })
              })
            })
        }).catch(err=>console.log(err,"this is error while signing in "))
        }

} 


export const logIn = (data)=>{
  const auth = firebase.auth();
   return async(dispath)=>{
    dispath({
      type: "LOGIN_REQUEST",
    })
    auth.signInWithEmailAndPassword(data.email , data.password ).then((user)=>{
      console.log( user , " user login SuccessFully");

    const name = user.user.displayName.split(" ");
   
     const userObj = {
      firstname : name[0],
      lastname : name[2],
      email :  user.user.email,
      uid : user.user.uid
   }
   console.log(userObj , "this is object")
      localStorage.setItem ("user" , JSON.stringify(userObj));
      dispath({
        type:"LOGIN_SUCCESS",
        payload : userObj
      })
    
    }).catch((error)=>{
      dispath({
        type:"LOGIN_FAILED",
        payload : error
      })
        console.log( error,"error while signing in ")
    })
   }
}