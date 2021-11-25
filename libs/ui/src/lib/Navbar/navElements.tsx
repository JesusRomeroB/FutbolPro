import styled from 'styled-components';

export const Nav = styled.div`
  font-size: 18px;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: rgba(68, 141, 209, 0.5);
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
`;

export const NavLogo = styled.div`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 800;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.04);
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
`;

export const MenuLink = styled.div`
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 2rem;
  margin-bottom: 50px;
  height: 100%;
  transition: all 0.2s ease;

`;
