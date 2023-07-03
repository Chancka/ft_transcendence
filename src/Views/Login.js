import { Fragment, useEffect, useState } from 'react';
import '../style/Login.css';

import api from '../api/api.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('coucou ca mount');
  }, [])

  const handleSubmit = async e => {
    try {
      await api.login(username, password);
    } catch (error) {
      console.log('coucou ca err', error);
    }
  }
  
	return (
		<Fragment>
			<div className='login-container'>
        <div className='login-form'>
          <div className='login-title'>
            <h1>Log in</h1>
            <h2>Great to see you again!</h2>
          </div>
          
          <div className='login-credentials'>
            <input
              type='text'
              placeholder='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              />
            <input
              type='password'
              placeholder='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className='login-buttons'>
              <div className='login-login'>
                <button
                  className='login-button'
                  onClick={handleSubmit}
                >
                    Log in
                </button>
                <button
                  className='login-button'
                >
                    Log in with 42
                </button>
              </div>
              <div className='login-signup'>
                <p>Don't have an account yet?</p>
                <button className='login-button'>Sign up</button>
              </div>
            </div>
        </div>
			</div>
		</Fragment>
	)
}

export default Login;
