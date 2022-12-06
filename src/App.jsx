import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import { createGlobalStyle } from 'styled-components';
import Profile from './components/Profile';
import { useUiContext } from './context/uiContext';
import { StytchHeadlessClient } from '@stytch/vanilla-js/headless';
import { StytchProvider } from '@stytch/react';
import ResetPassword from './components/ResetPassword';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background-color: #dadada;
  font-family: 'DM Sans';
  font-weight: 500;
}
h1,h2,h3{
font-family: Lobster;
}
h1{
  font-size: 5rem;
}
h2{
  font-size: 3.5rem
}
h3{
  font-size: 2rem;
}
`;

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  gap: 5rem;
  position: relative;
`;

export const Container = styled.div`
  transition: ease-out all 0.13s;
  width: 100%;
  height: 100%;
  margin-left: ${({ hideNavigation }) => (hideNavigation ? 0 : '12rem')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: scroll;
  padding-top: 2rem;
`;

export const Content = styled.main`
  margin-right: ${({ hideNavigation }) => (hideNavigation ? 0 : '12rem')};
  padding: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 2px solid #bbb;
  border-radius: 4px;
  outline: 0;
  padding: 4px 10px;
  font-size: 1.3rem;
  &::placeholder {
    color: #888;
  }
  &:focus {
    box-shadow: 8px 8px 30px #bababa;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Layout = () => {
  const { hideNavigation } = useUiContext();
  return (
    <PageWrapper>
      <Nav />
      <Container hideNavigation={hideNavigation}>
        <Content hideNavigation={hideNavigation}>
          <Outlet />
        </Content>
        <Footer />
      </Container>
    </PageWrapper>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/resetPassword',
        element: <ResetPassword />,
      },
      {
        path: '*',
        element: <ResetPassword />,
      },
    ],
  },
]);

function App() {
  const stytch = new StytchHeadlessClient(
    'public-token-test-f7c3a314-6949-489c-98c1-971992543a07'
  );

  return (
    <>
      <StytchProvider stytch={stytch}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </StytchProvider>
    </>
  );
}

export default App;
