import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import {getAuth} from 'firebase/auth';

const auth=getAuth(app);
const Login = () => {
    // const {handleSignInWithGoogle,handleSignOut}=useFirebase();
    const [signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '15px' }}>
                <button onClick={()=>signInWithGoogle()}>SignInWithGoogle</button>
            </div>
            <form>
                <input type="email" name="email" placeholder='Enter your email' id="" />
                <br />
                <input type="password" name="password" placeholder='password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;

