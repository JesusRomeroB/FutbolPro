import styled from 'styled-components';
import Link from 'next/Link';
import { Nav, NavbarContainer } from './navElements';
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
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
