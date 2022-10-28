import { useState, useEffect } from "react";
import app from "../firebase.init";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from 'firebase/auth';

const auth = getAuth(app);
const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});

    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.error(error);
            });
    };
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign-out successful.');
            }).catch(() => {

            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        });
    }, []);

    return {
        user,
        setUser,
        handleSignInWithGoogle,
        handleSignOut
    };
};
export default useFirebase;
