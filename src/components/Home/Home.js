import React from 'react';
import './Home.css';
// import useFirebase from '../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth=getAuth(app);
const Home = () => {
    // const{user}=useFirebase();
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='user-info'>
            <h3>{user?.displayName}</h3>
            <img style={{borderRadius:'100%'}} src={user?.photoURL} alt="" />
            <h5>{user?.email}</h5>
            
        </div>
    );
};

export default Home;