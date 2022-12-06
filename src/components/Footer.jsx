import styled from 'styled-components';

const Footerr = styled.footer`
  height: 15rem;
  background-color: #222;
  width: 100%;
  color: darkgrey;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return <Footerr>&copy;DamajaDev@2022</Footerr>;
};

export default Footer;
