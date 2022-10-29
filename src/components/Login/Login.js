import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import {getAuth} from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth=getAuth(app);
const Login = () => {
    // const {handleSignInWithGoogle,handleSignOut}=useFirebase();
    const [signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);
    const location=useLocation();
    const navigate=useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleSignInWithGoogle=()=>{
        signInWithGoogle()
            .then(()=>{
                navigate(from, { replace: true });
            });
        
    };

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '15px' }}>
                <button onClick={handleSignInWithGoogle}>SignInWithGoogle</button>
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

