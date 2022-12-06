import { useState, useEffect } from 'react';
import { Input, InputContainer } from '../App';
import { useStytch } from '@stytch/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const stytchClient = useStytch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = () => {
    console.log('login function called!');
    stytchClient.passwords
      .authenticate({ ...user, session_duration_minutes: 60 })
      .then((res) => console.log('user is logged in!'))
      .catch((err) => console.log(err));
    navigate('/');
  };

  const resetPassword = () => {
    stytchClient.passwords.resetByEmailStart({
      email: 'staystrongbg@gmail.com', //ovo treba da se pozove izz nekog user objekta
    });
    console.log('Check your email!');
  };
  return (
    <>
      <header>
        <h1>Login</h1>
      </header>
      <InputContainer>
        <Input
          placeholder='email'
          name='email'
          type='email'
          onChange={handleChange}
          required
        />
        <Input
          placeholder='password'
          name='password'
          type='password'
          onChange={handleChange}
          required
        />
        <button onClick={login}>Login</button>
        <button
          style={{
            background: 'transparent',
            outline: 'none',
            border: 'none',
          }}
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </InputContainer>
    </>
  );
};

export default Login;
