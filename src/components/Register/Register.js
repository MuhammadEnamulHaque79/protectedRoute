import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div>
            <h3>Register</h3>
          
            <div style={{ margin: '15px' }}>

            </div>
            <form>
                <input type="email" name="email" placeholder='Enter your email' id="" />
                <br />
                <input type="password" name="password" placeholder='password' id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;