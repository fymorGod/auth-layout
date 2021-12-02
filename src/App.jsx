import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';

import { auth } from './firebase-config';

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user , setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    }catch (e){
      console.log(e)
    }
  }

  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    }catch (e){
      console.log(e)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }


  return (
    <div className="container">
      <div className="register">
        <h2>SignUp</h2>
        <input
         type="text" 
         placeholder="E-mail" 
         onChange={(e)=> {
           setRegisterEmail(e.target.value);
         }}
        />
        <input 
        type="password" 
        placeholder="Password"
        onChange={(e)=> {
          setRegisterPassword(e.target.value);
        }}
        />

        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h2>Sign</h2>
        <input
         type="text"
         placeholder="E-mail"
         onChange={(e)=> {
           setLoginEmail(e.target.value);
         }}
         />
        <input 
        type="password" 
        placeholder="Password" 
        onChange={(e)=> {
          setLoginPassword(e.target.value);
        }}
        />

        <button onClick={login}>Login</button>
      </div>
      <h2>User logged In: </h2>
      {user?.email}
      <button onClick={logout} >Logout</button>

    </div>
  );
}

export default App;
