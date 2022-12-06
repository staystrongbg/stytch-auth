import { useState, useEffect } from 'react';
import { Input, InputContainer } from '../App';
import { useStytch } from '@stytch/react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');

  const stytchClient = useStytch();

  const token = new URLSearchParams(window.location.search).get('token');

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const reset = () => {
    stytchClient.passwords
      .resetByEmail({
        token,
        password: newPassword,
        session_duration_minutes: 60,
      })
      .then(console.log('new password is set!'))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <header>
        <h1>Reset</h1>
      </header>
      <InputContainer>
        <Input
          placeholder='new password'
          name='password'
          type='password'
          onChange={handleChange}
          required
        />{' '}
        <button onClick={reset}>Reset</button>
      </InputContainer>
    </>
  );
};
export default ResetPassword;
