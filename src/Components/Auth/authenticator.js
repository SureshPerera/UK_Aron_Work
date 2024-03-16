import { useState } from "react";
import  {auth,googleProvider}  from "../Config/firebase";
import {createUserWithEmailAndPassword,signInWithPopup} from 'firebase/auth';
import React from 'react'

export default function Authenticator() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const singIn = async () =>{
      try{
        await createUserWithEmailAndPassword(auth,email,password);
      } catch (err) {
        console.error(err);
      }
    };

    const singInWithGoogle = async () =>{
        try{await signInWithPopup(auth,googleProvider); 
        } catch (err) {
          console.error(err);
        }
    };
  return (
    <div>
      <input 
      placeholder="Email.." 
      onChange={(e) => setEmail(e.target.value)}
      />
      <input 
      placeholder="Password.."
      type="Password"
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={singIn}>Sing In</button>
      <button onClick={singInWithGoogle}>Sing In With Google</button>
  </div>
  )
}


