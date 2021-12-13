
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"




export const signUp = (user)=>{
   
    return  (dispath)=>{
        const auth = firebase.auth();
           const db = firebase.firestore(); 
           console.log(db,"this is my firebse DataStore");
           auth.createUserWithEmailAndPassword(user.email,user.password).then((user)=> {console.log(user, "this is my user from firebase"); 
            const currentUser=  auth.currentUser();
            currentUser.updateProfile({
                displayName:user.firstname + " "+ user.lastname,

            }).then(()=>{})

        
        
        }).catch(err=>console.log(err,"this is error"))
        }

} 