import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useUiContext } from '../context/uiContext';
import { useStytch } from '@stytch/react';
import { useUserContext } from '../context/userContext';

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 12rem;
  background-color: tomato;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  justify-content: space-between;
  border-right: 2px solid rgba(200, 100, 100, 0.8);
  transform: ${({ hideNavigation }) =>
    hideNavigation ? 'translateX(-100%)' : 'translateX(0)'};
  transition: ease-out 0.13s transform;
  h2 {
    text-decoration: underline;
  }
`;

const Arrow = styled.span`
  color: rgba(200, 100, 100, 1);
  font-size: 2rem;
  cursor: pointer;
  position: fixed;
  top: 0.4rem;
  left: 1rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    color: #fff;
    text-decoration: none;
    border-left: 4px solid transparent;
    padding: 0 5px;
    transition: ease-in-out 0.1s all;
    font-weight: bold;

    &:hover {
      border-left: 4px solid yellow;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  font-size: 14px;
  gap: 1rem;
`;

const ActiveNavLink = ({ to, children }) => {
  const activeStyle = {
    color: '#222',
  };

  return (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
};

const Navigation = () => {
  const { hideNavigation, setHideNavigation } = useUiContext();
  const stytch = useStytch();
  const { currentUser } = useUserContext();

  const logout = () => {
    stytch.session.revoke();
  };

  return (
    <>
      <Arrow onClick={() => setHideNavigation(!hideNavigation)} title='Show'>
        &rarr;
      </Arrow>
      <Navbar hideNavigation={hideNavigation}>
        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
          <h2>Stytch</h2>
        </Link>

        <Arrow onClick={() => setHideNavigation(!hideNavigation)} title='Hide'>
          &larr;
        </Arrow>
        <Links>
          <ActiveNavLink to='/'>Home</ActiveNavLink>
          <ActiveNavLink to='/register'>Register</ActiveNavLink>
          <ActiveNavLink to='/login'>Login</ActiveNavLink>
          <ActiveNavLink to='/about'>About</ActiveNavLink>
          <ActiveNavLink to='/profile'>Profile</ActiveNavLink>
        </Links>
        {currentUser?.user?.emails[0] && (
          <UserInfo>
            <p>
              You are logged in as:
              <br /> <b>{currentUser.user.emails[0].email}</b>
            </p>
            <button onClick={logout}>Logout</button>
          </UserInfo>
        )}
      </Navbar>
    </>
  );
};

export default Navigation;
