import React, { useState, useEffect } from 'react'
import fire from './Firebase';
import FormValidation from './FormValidation';
import AccessForm from './AccessForm';

const Verification = () => {
    const[user, setUser] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[emailError, setEmailError] = useState('')
    const[passwordError, setPasswordError] = useState('')
    const[hasAccount, setHasAccount] = useState(false)

    //Limpia entradas
    const clearInputs = () => {
      setEmail('');
      setPassword('');
    }
    //Limpia errores
    const ClearErrors = () => {
      setEmailError('')
      setPasswordError('')
    }

    const HandleLogin = () =>{
      ClearErrors();
      fire.auth().signInWithEmailAndPassword(email, password)
           .catch(err => {
             switch(err.code){
               case "auth/invalid-email":
               case "auth/user-disabled":
               case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
               case "auth/wrong-password":
                    setPasswordError(err.message)
                    break;
             }
           })
    }

    const HandleSignup = () =>{
      ClearErrors();
      fire.auth().createUserWithEmailAndPassword(email, password)
           .catch(err => {
             switch(err.code){
               case "auth/email-already-in-use":
               case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
               case "auth/weak-password":
                    setPasswordError(err.message)
                    break;
             }
           })
    }

    const HandleLogout = () => {
      fire.auth().signOut();
    }

    const authListener = () => {
      fire.auth().onAuthStateChanged((user)=> {
        if(user){
          clearInputs();
          setUser(user)
        }else{
          setUser("")
        }
       }
     )
    }

    useEffect(() => {
      authListener();

    
    }, [])
    return (
    
        <div className="App">
          {user ? (
            <AccessForm HandleLogout={HandleLogout}/>
          ):(
            <FormValidation
             email={email}
             setEmail={setEmail}
             password={password}
             setPassword={setPassword}
             HandleLoguin={HandleLogin}
             HandleLogout={HandleLogout}
             HandleSignup={HandleSignup}
             hasAccount={hasAccount}
             setHasAccount={setHasAccount}
             emailError={emailError}
             passwordError={passwordError}
          />
          )}

        </div>
  )
}

export default Verification;


