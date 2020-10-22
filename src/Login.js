import React, { useState } from 'react';
import './Login.css';
import { Link } from '@material-ui/core';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5 value={email} onChange={e => setEmail(e.target.value)}>E-mail</h5>
          <input type='text' />
          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className='login__signInButton'>Sign in</button>
        </form>
        <p>
          By signing in you agree to AMAZON FAKE CLONE Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Internet-Based Ads Notice.
        </p>
        <button className='login__registerButton'>Create your Fake Amazon Account</button>
      </div>
    </div>
  )
}

export default Login