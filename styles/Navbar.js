import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex: 1 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 3rem;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
  margin: 0 80px 0;
`;
export const NavLinksContainer = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: flex-end;
`;
export const NavLinks = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;

  &:hover {
    color: #0d6efd;
  }
`;
