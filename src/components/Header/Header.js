import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css';
import { useAuthState} from 'react-firebase-hooks/auth';
import { getAuth,signOut } from 'firebase/auth';
import app from '../../firebase.init';

const auth=getAuth(app);
const Header = () => {
    // const { user, handleSignOut } = useFirebase();
    const [user,
        loading,
        error] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/about'>About</Link>
                <span style={{ margin: '15px' }}>{user?.displayName ? user.displayName : 'No-body'}</span>
                {user?.email
                    ?
                    <button onClick={()=>signOut(auth)}>SignOut</button>
                    :
                    <Link to='/login'>Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;