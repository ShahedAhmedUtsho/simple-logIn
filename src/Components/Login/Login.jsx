import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


const Login = () => {
    const [user,setUser] =useState(null)
    const auth = getAuth(app)
    // console.log(app)
const provider = new GoogleAuthProvider();
const googleSignIn =()=>{
    signInWithPopup(auth,provider)
    .then(result => {
        const user =result.user
        console.log(user)
        setUser(user)
    })
    .catch(error=>{
console.log("error ---",error.message )
    })
}
const googleSignOut = () =>{
    signOut(auth)
    .then((res)=>{
console.log("okey")
console.log(res)
setUser(null)
    })
    .catch(error =>{
        console.log("error" , error.message)
    })
}


    return (
        <div>
        <button onClick={googleSignIn}>google</button>
        <button onClick={googleSignOut}>sign out</button>
        {user && <div>
            <h3>User {user.displayName}</h3>
            <h3>email : {user.email}</h3>
        </div>}
        </div>
    );
};

export default Login;