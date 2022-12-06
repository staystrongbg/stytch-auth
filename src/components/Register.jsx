import { useState } from 'react';
import { Input, InputContainer } from '../App';
import { useStytch } from '@stytch/react';

const Register = () => {
  const stytchClient = useStytch();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signUp = () => {
    console.log(user);
    //pass method available in SDK config
    //todo pass check?
    stytchClient.passwords
      .strengthCheck(user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    //todo create user
    stytchClient.passwords
      .create({ ...user, session_duration_minutes: 60 })
      .then((res) => console.log('User Created!'))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <header>
        <h1>Register</h1>
      </header>
      <InputContainer>
        <Input
          placeholder='email'
          type='email'
          name='email'
          onChange={handleChange}
        />
        {/* <Input placeholder='username' name='username' onChange={handleChange} /> */}
        <Input
          placeholder='password'
          type='password'
          name='password'
          onChange={handleChange}
        />
        <button onClick={signUp}>Sign Up</button>
      </InputContainer>
    </>
  );
};

export default Register;
