import styled from 'styled-components';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import Link from 'next/Link';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Menu,
  MenuItem,
  MenuLink,
} from './navElements';
const StyledPage = styled.div`
  .page {
  }
`;

export function Navbar() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <Nav>
      <NavbarContainer>
        <Link href="/">
          <NavLogo>
            <MdOutlineSportsSoccer />
            Home
          </NavLogo>
        </Link>
        <Menu>
          <MenuItem>
            <Link href="/about">
              <MenuLink>About</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/contact">
              <MenuLink>Contact</MenuLink>
            </Link>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
