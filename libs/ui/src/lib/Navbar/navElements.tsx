import styled from 'styled-components';

export const Nav = styled.div` 
font-size: 18px;
position: sticky;
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
`;