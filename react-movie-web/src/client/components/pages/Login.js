import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <h1>Login</h1>
      </header>
      <div className='Login-inputs'>
        <div className='username'>
          <p>Username: </p><input type="text"/>
        </div>
		    <div className='password'>
          <p>Password: </p><input type="text"/>
        </div>
      </div>
      <div className='submit'>
        <p></p>
        <button className='SubmimtButton' 
          // onClick={}
          type='button'>Login</button>
      </div>
    </div>
  );
}

export default Login;
